(() => {
  "use strict";

  const EXAMS = window.EXAM_CATALOG;
  const EXAM_BY_ID = new Map(EXAMS.map(exam => [exam.id, exam]));
  const QUESTIONS = EXAMS.flatMap(exam => exam.questions.map(question => ({ ...question, examId: exam.id })));
  const QUIZ_QUESTIONS = QUESTIONS.filter(question => !question.excludedFromOfficialScore);
  const QUESTION_BY_ID = new Map(QUESTIONS.map(question => [question.id, question]));
  const CHAPTERS = window.EXAM_CHAPTERS;
  const CHAPTER_BY_ID = new Map(CHAPTERS.map(chapter => [chapter.id, chapter]));
  const ACTIVE_CHAPTERS = CHAPTERS.filter(chapter => QUESTIONS.some(question => question.chapterIds.includes(chapter.id)));
  const STORAGE_KEY = "cas-exam5-practice-v1";
  const SIDEBAR_KEY = "cas-exam5-sidebar-hidden";
  const PANE_RATIO_KEY = "cas-exam5-question-pane-ratio";
  const appShell = document.querySelector(".app-shell");
  const sidebarToggle = document.getElementById("sidebar-toggle");
  const main = document.getElementById("main-content");
  const toast = document.getElementById("toast");
  const figureDialog = document.getElementById("figure-dialog");
  const SAVE_DELAY_MS = 750;
  const TIMER_SAVE_DELAY_MS = 10000;
  document.getElementById("loaded-count").textContent = `${EXAMS.length} exams · ${QUESTIONS.length} questions`;
  let state = loadState();
  let libraryChapter = "all";
  let libraryMode = "chapter";
  let libraryExam = EXAMS[0].id;
  let toastTimer;
  let paneRatio = 0.52;
  let paneResizeObserver;
  let saveTimer;
  let saveDueAt = 0;
  let stateDirty = false;

  try {
    const savedRatio = Number(localStorage.getItem(PANE_RATIO_KEY));
    if (Number.isFinite(savedRatio) && savedRatio >= 0.2 && savedRatio <= 0.8) paneRatio = savedRatio;
  } catch { /* The divider still works for this visit. */ }

  function setSidebarHidden(hidden, persist = false) {
    appShell.classList.toggle("sidebar-collapsed", hidden);
    sidebarToggle.setAttribute("aria-expanded", String(!hidden));
    sidebarToggle.querySelector(".sidebar-toggle-icon").textContent = hidden ? "☰" : "←";
    sidebarToggle.querySelector(".sidebar-toggle-label").textContent = hidden ? "Show sidebar" : "Hide sidebar";
    if (persist) {
      try { localStorage.setItem(SIDEBAR_KEY, String(hidden)); } catch { /* The toggle still works for this visit. */ }
    }
  }

  try { setSidebarHidden(localStorage.getItem(SIDEBAR_KEY) === "true"); }
  catch { setSidebarHidden(false); }

  sidebarToggle.addEventListener("click", () => {
    setSidebarHidden(!appShell.classList.contains("sidebar-collapsed"), true);
  });

  function blankState() {
    return { version: 1, drafts: {}, attempts: [], quizSessions: [] };
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return blankState();
      const parsed = JSON.parse(raw);
      if (parsed.version !== 1 || !parsed.drafts || !Array.isArray(parsed.attempts)) throw new Error("Unsupported backup format");
      if (!Array.isArray(parsed.quizSessions)) parsed.quizSessions = [];
      return parsed;
    } catch {
      return blankState();
    }
  }

  function flushState() {
    clearTimeout(saveTimer);
    saveTimer = undefined;
    saveDueAt = 0;
    if (!stateDirty) return true;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      stateDirty = false;
      return true;
    } catch {
      showToast("Browser storage is unavailable. Export your work to keep it.");
      return false;
    }
  }

  function saveState(immediate = false, delay = SAVE_DELAY_MS) {
    stateDirty = true;
    if (immediate) return flushState();
    const dueAt = Date.now() + delay;
    if (saveTimer && saveDueAt <= dueAt) return true;
    clearTimeout(saveTimer);
    saveDueAt = dueAt;
    saveTimer = setTimeout(flushState, delay);
    return true;
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("visible"), 3500);
  }

  function esc(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  }

  function points(value) {
    return Number(value).toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
  }

  function questionTitle(question) {
    return `${question.exam} Q${question.number}`;
  }

  function questionUrl(question, source) {
    return `#question/${encodeURIComponent(question.id)}?from=${encodeURIComponent(source)}`;
  }

  function questionNavigation(question) {
    const source = new URLSearchParams(location.hash.split("?")[1] || "").get("from");
    let questions;
    let backHref;
    let backLabel;
    if (source === "retry") {
      questions = retryQuestions();
      backHref = "#retry";
      backLabel = "Retry queue";
    } else if (source === "home") {
      questions = QUESTIONS.filter(item => hasDraftWork(state.drafts[item.id]));
      backHref = "#home";
      backLabel = "In progress";
    } else if (source === "library") {
      questions = questionsForChapterFilter("all");
      backHref = "#library";
      backLabel = "Question library";
    } else if (source?.startsWith("library/exam/")) {
      const examId = source.slice("library/exam/".length);
      const exam = EXAM_BY_ID.get(examId);
      if (exam) {
        questions = QUESTIONS.filter(item => item.examId === examId);
        backHref = `#library/exam/${encodeURIComponent(examId)}`;
        backLabel = `${exam.label} questions`;
      }
    } else if (source?.startsWith("library/")) {
      const filter = source.slice("library/".length);
      if (CHAPTER_BY_ID.has(filter) || filter === "book:ratemaking" || filter === "book:reserving") {
        questions = questionsForChapterFilter(filter);
        backHref = `#library/${encodeURIComponent(filter)}`;
        backLabel = CHAPTER_BY_ID.has(filter) ? `Ch. ${CHAPTER_BY_ID.get(filter).number} questions` : `${filter === "book:ratemaking" ? "Ratemaking" : "Reserving"} questions`;
      }
    }
    if (!questions?.some(item => item.id === question.id)) {
      questions = QUESTIONS.filter(item => item.examId === question.examId);
      backHref = `#library/exam/${encodeURIComponent(question.examId)}`;
      backLabel = `${question.exam} questions`;
      return { questions, backHref, backLabel, source: `library/exam/${question.examId}` };
    }
    return { questions, backHref, backLabel, source };
  }

  function questionCount(count) {
    return `${count} ${count === 1 ? "question" : "questions"}`;
  }

  function duration(seconds) {
    const minutes = Math.floor(seconds / 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
  }

  function dateLabel(iso) {
    return new Date(iso).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
  }

  function questionFor(id) {
    return QUESTION_BY_ID.get(id);
  }

  function chapterLabel(chapter) {
    return `${chapter.book} Ch. ${chapter.number}: ${chapter.title}`;
  }

  function chapterQuestions(chapterId) {
    return QUESTIONS.filter(question => question.chapterIds.includes(chapterId));
  }

  function questionsForChapterFilter(filter) {
    if (filter === "all") return QUESTIONS;
    if (filter.startsWith("book:")) {
      const book = filter.slice(5);
      return QUESTIONS.filter(question => question.chapterIds.some(id => CHAPTER_BY_ID.get(id)?.book.toLowerCase() === book));
    }
    return chapterQuestions(filter);
  }

  function chapterTags(question, linked = false) {
    return `<span class="chapter-tags">${question.chapterIds.map(id => {
      const chapter = CHAPTER_BY_ID.get(id);
      if (!chapter) return "";
      const label = chapterLabel(chapter);
      return linked
        ? `<a class="chapter-tag" href="${esc(chapter.file)}#page=${chapter.page}" target="_blank" rel="noopener" title="Open ${esc(label)} in the source text">${esc(label)} ↗</a>`
        : `<span class="chapter-tag">${esc(label)}</span>`;
    }).join("")}</span>`;
  }

  function latestAttempt(id) {
    return state.attempts.find(attempt => attempt.questionId === id);
  }

  function earned(attempt) {
    return Object.values(attempt.scores).reduce((total, score) => total + Number(score || 0), 0);
  }

  function retryQuestions() {
    return QUESTIONS.filter(question => {
      const attempt = latestAttempt(question.id);
      return attempt && earned(attempt) < question.points;
    });
  }

  function ensureDraft(question) {
    if (!state.drafts[question.id]) {
      state.drafts[question.id] = { answers: {}, scores: {}, note: "", scratchpad: [], revealed: false, elapsedSec: 0 };
      saveState();
    }
    return state.drafts[question.id];
  }

  function hasDraftWork(draft) {
    return Boolean(draft && (
      Object.values(draft.answers || {}).some(answer => String(answer).trim()) ||
      (Array.isArray(draft.scratchpad) && draft.scratchpad.some(row => Array.isArray(row) && row.some(cell => String(cell ?? "").trim())))
    ));
  }

  function workTabs() {
    return `<div class="work-tabs" role="tablist" aria-label="Work area"><button type="button" role="tab" id="answers-tab" aria-controls="answers-panel" aria-selected="true" data-work-tab="answers">Answers</button><button type="button" role="tab" id="scratchpad-tab" aria-controls="scratchpad-panel" aria-selected="false" data-work-tab="scratchpad">Scratchpad</button></div>`;
  }

  function scratchpadPanel(readOnly = false) {
    return `<div id="scratchpad-panel" role="tabpanel" aria-labelledby="scratchpad-tab" hidden>${readOnly ? "" : `<p class="scratchpad-help">Try =A1*B1 or =SUM(A1:A5).</p>`}<div id="scratchpad-grid" aria-label="Question scratchpad spreadsheet"></div></div>`;
  }

  function setupWorkTabs(data, questionId = null, saveQuizScratchpad = null) {
    const tabs = main.querySelectorAll("[data-work-tab]");
    if (!tabs.length) return;
    const grid = main.querySelector("#scratchpad-grid");
    let worksheet;
    const select = name => {
      tabs.forEach(tab => {
        const selected = tab.dataset.workTab === name;
        tab.setAttribute("aria-selected", String(selected));
        tab.tabIndex = selected ? 0 : -1;
      });
      main.querySelector("#answers-panel").hidden = name !== "answers";
      main.querySelector("#scratchpad-panel").hidden = name !== "scratchpad";
      if (name !== "scratchpad" || worksheet) return;
      if (typeof window.jspreadsheet !== "function") {
        grid.textContent = "The spreadsheet could not load. Reload the page and try again.";
        return;
      }
      try {
        const sheets = window.jspreadsheet(grid, {
          worksheets: [{
            data: Array.isArray(data) ? data : [],
            minDimensions: [10, 20],
            tableOverflow: true,
            tableWidth: "100%",
            tableHeight: "440px",
            editable: Boolean(questionId || saveQuizScratchpad),
            parseFormulas: true
          }],
          onchange: saveScratchpad,
          oninsertrow: saveScratchpad,
          oninsertcolumn: saveScratchpad,
          ondeleterow: saveScratchpad,
          ondeletecolumn: saveScratchpad
        });
        worksheet = sheets[0];
      } catch {
        grid.textContent = "The spreadsheet could not load. Reload the page and try again.";
      }
    };
    const saveScratchpad = () => {
      if (!worksheet) return;
      const cells = worksheet.getData(false, true);
      if (saveQuizScratchpad) saveQuizScratchpad(cells);
      else if (questionId && state.drafts[questionId]) {
        state.drafts[questionId].scratchpad = cells;
        saveState();
      }
    };
    tabs.forEach(tab => tab.addEventListener("click", () => select(tab.dataset.workTab)));
    tabs.forEach(tab => tab.addEventListener("keydown", event => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      const next = event.key === "ArrowRight" ? "scratchpad" : "answers";
      select(next);
      main.querySelector(`[data-work-tab="${next}"]`).focus();
    }));
  }

  function route() {
    flushState();
    paneResizeObserver?.disconnect();
    const hash = decodeURIComponent((location.hash.slice(1) || "home").split("?")[0]);
    const [section, id, view, index] = hash.split("/");
    const questionSource = section === "question" ? new URLSearchParams(location.hash.split("?")[1] || "").get("from") : null;
    const activeSection = section === "question" ? questionSource === "retry" ? "retry" : questionSource === "home" ? "home" : "library" : section;
    document.querySelectorAll("[data-nav]").forEach(button => {
      button.classList.toggle("active", button.dataset.nav === activeSection);
    });
    document.getElementById("retry-count").textContent = retryQuestions().length;
    if (section === "library") {
      if (id === "exam" && EXAM_BY_ID.has(view)) {
        libraryMode = "exam";
        libraryExam = view;
      } else if (id && (CHAPTER_BY_ID.has(id) || id === "book:ratemaking" || id === "book:reserving")) {
        libraryMode = "chapter";
        libraryChapter = id;
      } else if (!id) {
        libraryMode = "chapter";
        libraryChapter = "all";
      }
      renderLibrary();
    }
    else if (section === "retry") renderRetry();
    else if (section === "history") renderHistory();
    else if (section === "quiz") renderQuizRoute(id, view, index);
    else if (section === "question" && questionFor(id)) renderQuestion(questionFor(id));
    else if (section === "attempt") renderAttempt(id);
    else renderHome();
    const isHome = Boolean(main.querySelector(".home-overview"));
    main.classList.toggle("home-main", isHome);
    appShell.classList.toggle("home-active", isHome);
    window.scrollTo(0, 0);
  }

  function pageHeader(eyebrow, title, description = "") {
    return `<div class="page-heading"><div class="eyebrow">${esc(eyebrow)}</div><h1>${esc(title)}</h1>${description ? `<p>${esc(description)}</p>` : ""}</div>`;
  }

  function summaryStats() {
    const latest = QUESTIONS.map(question => ({ question, attempt: latestAttempt(question.id) })).filter(item => item.attempt);
    const earnedPoints = latest.reduce((sum, item) => sum + earned(item.attempt), 0);
    const availablePoints = latest.reduce((sum, item) => sum + item.question.points, 0);
    return { completed: latest.length, attempts: state.attempts.length, earnedPoints, availablePoints };
  }

  function renderHome() {
    const stats = summaryStats();
    const inProgress = QUESTIONS.find(question => hasDraftWork(state.drafts[question.id]));
    const book = inProgress && CHAPTER_BY_ID.get(inProgress.chapterIds[0])?.book;
    main.innerHTML = `
      <div class="home-overview">
        <header class="home-heading"><h1>Overview</h1></header>
        <section class="home-stats" aria-label="Study progress">
          <div><strong>${stats.completed}</strong><span>Questions scored</span></div>
          <a href="#retry"><strong>${retryQuestions().length}</strong><span>To retry</span></a>
        </section>
        ${inProgress ? `<section class="home-section" aria-labelledby="home-continue-title"><h2 id="home-continue-title">Continue</h2><a class="home-continue" href="${esc(questionUrl(inProgress, "home"))}"><span>${esc(inProgress.exam)} · Q${inProgress.number}</span><span>${esc(book || "Exam 5")}</span><strong>Resume <span aria-hidden="true">→</span></strong></a></section>` : ""}
        <section class="home-section" aria-labelledby="home-practice-title"><h2 id="home-practice-title">Practice</h2><nav class="home-routes" aria-label="Practice options">
          <a href="#library" data-library-mode="chapter"><span class="home-route-number">1</span><span>By chapter</span><span class="home-route-arrow" aria-hidden="true">→</span></a>
          <a href="#library/exam/${esc(libraryExam)}"><span class="home-route-number">2</span><span>Past exam</span><span class="home-route-arrow" aria-hidden="true">→</span></a>
          <a href="#quiz"><span class="home-route-number">3</span><span>Random quiz</span><span class="home-route-arrow" aria-hidden="true">→</span></a>
        </nav></section>
      </div>
    `;
  }

  function questionRow(question, source) {
    const attempt = latestAttempt(question.id);
    const draft = state.drafts[question.id];
    const hasWork = hasDraftWork(draft);
    const status = hasWork ? "In progress" : attempt ? `${points(earned(attempt))} / ${points(question.points)} pts` : "Not started";
    return `<a class="question-row" href="${esc(questionUrl(question, source))}"><span class="question-index">${String(question.number).padStart(2, "0")}</span><span class="question-details"><strong>${esc(questionTitle(question))}</strong>${chapterTags(question)}<small>${question.parts.length} ${question.parts.length === 1 ? "part" : "parts"}</small></span><span class="question-points">${points(question.points)} pts</span><span class="status-pill ${hasWork ? "status-active" : ""}">${esc(status)}</span><span class="row-arrow">→</span></a>`;
  }

  function renderChapterFilter() {
    const groups = ["Ratemaking", "Reserving"].map(book => {
      const key = `book:${book.toLowerCase()}`;
      const chapters = ACTIVE_CHAPTERS.filter(chapter => chapter.book === book);
      return `<optgroup label="${book === "Ratemaking" ? "Ratemaking — Werner & Modlin" : "Reserving — Friedland"}"><option value="${key}" ${libraryChapter === key ? "selected" : ""}>All ${book.toLowerCase()} chapters (${questionsForChapterFilter(key).length})</option>${chapters.map(chapter => `<option value="${esc(chapter.id)}" ${libraryChapter === chapter.id ? "selected" : ""}>Ch. ${chapter.number}: ${esc(chapter.title)} (${chapterQuestions(chapter.id).length})</option>`).join("")}</optgroup>`;
    }).join("");
    const selectedChapter = CHAPTER_BY_ID.get(libraryChapter);
    return `<div class="chapter-filter"><label for="chapter-filter">TEXTBOOK CHAPTER</label><select id="chapter-filter"><option value="all" ${libraryChapter === "all" ? "selected" : ""}>All available chapters (${QUESTIONS.length} questions)</option>${groups}</select>${selectedChapter ? `<a href="${esc(selectedChapter.file)}#page=${selectedChapter.page}" target="_blank" rel="noopener">Read this chapter ↗</a>` : ""}</div>`;
  }

  function renderLibrary() {
    const selectedExam = EXAM_BY_ID.get(libraryExam);
    const visible = libraryMode === "exam" ? QUESTIONS.filter(question => question.examId === libraryExam) : questionsForChapterFilter(libraryChapter);
    main.innerHTML = `
      ${pageHeader("QUESTION LIBRARY", "Choose your next question")}
      <div class="library-toolbar"><div class="segmented" role="group" aria-label="Study mode"><button type="button" data-mode="chapter" class="${libraryMode === "chapter" ? "selected" : ""}">By chapter</button><button type="button" data-mode="exam" class="${libraryMode === "exam" ? "selected" : ""}">Past exam in order</button></div><span class="library-count">${visible.length} ${visible.length === 1 ? "QUESTION" : "QUESTIONS"}</span></div>
      ${libraryMode === "chapter" ? renderChapterFilter() : `<div class="exam-filter"><label for="exam-filter">Exam</label><select id="exam-filter">${EXAMS.map(exam => `<option value="${esc(exam.id)}" ${exam.id === libraryExam ? "selected" : ""}>${esc(exam.label)} (${exam.questions.length} questions)</option>`).join("")}</select><span>01—${String(selectedExam.questions.length).padStart(2, "0")}</span></div>`}
      <div class="question-list">${visible.map(question => questionRow(question, libraryMode === "exam" ? `library/exam/${libraryExam}` : libraryChapter === "all" ? "library" : `library/${libraryChapter}`)).join("")}</div>
    `;
  }

  function renderRetry() {
    const questions = retryQuestions();
    main.innerHTML = `${pageHeader("REVIEW CYCLE", "Retry queue")}
      ${questions.length ? `<div class="question-list">${questions.map(question => questionRow(question, "retry")).join("")}</div>` : `<div class="empty-state"><span>↻</span><h2>Nothing to retry yet</h2><p>Score a question after reviewing its solution. Questions below full points will appear here.</p><a class="button button-dark" href="#library">Browse questions →</a></div>`}`;
  }

  function renderHistory() {
    const quizzes = state.quizSessions.filter(session => session.status === "completed");
    main.innerHTML = `${pageHeader("YOUR WORK", "Attempt history")}
      ${quizzes.length ? `<section class="section-head"><h2>Quizzes</h2></section><div class="quiz-list">${quizzes.map(session => `<a class="quiz-list-row" href="${quizUrl(session, "results")}"><span><strong>${session.questionIds.length}-question quiz · ${esc(quizExamLabel(session))}</strong><small>${dateLabel(session.completedAt)} · ${duration(session.elapsedSec)} spent</small></span><b>${points(quizScore(session))} / ${points(quizMaxPoints(session))} pts →</b></a>`).join("")}</div>` : ""}
      ${state.attempts.length ? `${quizzes.length ? `<section class="section-head"><h2>Question attempts</h2></section>` : ""}<div class="history-list">${state.attempts.map(attempt => {
        const question = questionFor(attempt.questionId);
        if (!question) return "";
        return `<a href="#attempt/${esc(attempt.id)}" class="history-row"><span class="history-number">Q${question.number}</span><span><strong>${esc(questionTitle(question))}</strong>${chapterTags(question)}<small>${dateLabel(attempt.completedAt)} · ${duration(attempt.elapsedSec)} spent${attempt.quizId ? " · Quiz" : ""}</small></span><span class="history-score">${points(earned(attempt))} / ${points(question.points)} <small>pts</small></span><span class="row-arrow">→</span></a>`;
      }).join("")}</div>` : `<div class="empty-state"><span>◷</span><h2>No scored attempts yet</h2><p>Complete and score a question to see it here.</p><a class="button button-dark" href="#library">Browse questions →</a></div>`}`;
  }

  function sourceLink(question, page, label) {
    return `<a href="${esc(EXAM_BY_ID.get(question.examId).pdf)}#page=${page}" target="_blank" rel="noopener">${esc(label)} ↗</a>`;
  }

  function renderTables(question) {
    return question.tables.map(table => `<div class="table-wrap${table.headers.length > 4 ? " wide-table" : ""}">${table.title ? `<div class="table-title">${esc(table.title)}</div>` : ""}<table><thead><tr>${table.headers.map(header => `<th>${esc(header)}</th>`).join("")}</tr></thead><tbody>${table.rows.map(row => `<tr>${row.map(cell => `<td>${esc(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`).join("");
  }

  function renderSourceBlocks(question) {
    return question.sourceBlocks.map(block => {
      if (block.type === "line") return `<p class="source-line">${esc(block.text)}</p>`;
      return `<div class="source-table-wrap">${block.title ? `<div class="table-title">${esc(block.title)}</div>` : ""}<table class="source-table"><thead>${block.groups ? `<tr>${block.groups.map(group => `<th colspan="${group.span}">${esc(group.label)}</th>`).join("")}</tr>` : ""}<tr>${block.headers.map(header => `<th>${esc(header)}</th>`).join("")}</tr></thead><tbody>${block.rows.map(row => `<tr>${row.map(cell => `<td>${esc(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
    }).join("");
  }

  function renderFigure(question) {
    if (!question.figure) return "";
    return `<figure class="question-figure"><button type="button" class="figure-open" data-figure="${esc(question.id)}" aria-label="Enlarge ${esc(question.figure.title)} graph"><img src="${esc(question.figure.src)}" alt="${esc(question.figure.alt)}" loading="lazy" /><span>↗ Enlarge graph</span></button><figcaption>Graph from the original exam. Select to inspect its axes and legend.</figcaption></figure>`;
  }

  function renderPrompt(question) {
    const source = question.sourceBlocks ? renderSourceBlocks(question) : `${question.introduction ? `<p class="prompt-intro">${esc(question.introduction)}</p>` : ""}${renderTables(question)}${question.facts.length ? `<ul class="fact-list">${question.facts.map(fact => `<li>${esc(fact)}</li>`).join("")}</ul>` : ""}`;
    const original = EXAM_BY_ID.get(question.examId).questionFormat === "workbook"
      ? `<span class="source-note">Questions for this sitting were provided in an Excel workbook; no question PDF was published.</span>`
      : sourceLink(question, question.questionPage, `View original · PDF p. ${question.questionPage}`);
    return `<div class="paper-card"><div class="paper-top"><span>CAS EXAM 5 · ${esc(question.exam.toUpperCase())}</span><span>QUESTION ${String(question.number).padStart(2, "0")}</span></div><div class="paper-body">${source}${renderFigure(question)}${question.notice ? `<p class="source-notice">${esc(question.notice)}</p>` : ""}<div class="prompt-parts">${question.parts.map(part => `<div class="prompt-part"><div class="part-label"><strong>${part.id}.</strong><span>${points(part.points)} ${part.points === 1 ? "point" : "points"}</span></div><p>${esc(part.prompt)}</p></div>`).join("")}</div></div><div class="paper-bottom">${original}</div></div>`;
  }

  function paneDivider() {
    return '<div class="pane-divider" role="separator" tabindex="0" aria-orientation="vertical" aria-label="Resize question and answer panes" aria-controls="question-pane answer-pane" aria-valuenow="52" title="Drag to resize; use left and right arrow keys"><span class="pane-divider-handle" aria-hidden="true"></span></div>';
  }

  function setupPracticeResize() {
    paneResizeObserver?.disconnect();
    const layout = main.querySelector(".practice-layout");
    const divider = layout?.querySelector(".pane-divider");
    if (!divider) return;

    function bounds() {
      const gap = parseFloat(getComputedStyle(layout).columnGap) || 0;
      const available = Math.max(1, layout.clientWidth - divider.offsetWidth - 2 * gap);
      const min = Math.max(0.25, Math.min(0.42, 300 / available));
      return { available, min, max: 1 - min };
    }

    function setRatio(value, persist = false) {
      const { available, min, max } = bounds();
      paneRatio = Math.max(min, Math.min(max, value));
      layout.style.setProperty("--question-pane-width", `${Math.round(paneRatio * available)}px`);
      const percent = Math.round(paneRatio * 100);
      divider.setAttribute("aria-valuemin", String(Math.round(min * 100)));
      divider.setAttribute("aria-valuemax", String(Math.round(max * 100)));
      divider.setAttribute("aria-valuenow", String(percent));
      divider.setAttribute("aria-valuetext", `Question pane ${percent} percent; answer pane ${100 - percent} percent`);
      if (persist) {
        try { localStorage.setItem(PANE_RATIO_KEY, String(paneRatio)); } catch { /* Keep this visit's layout. */ }
      }
    }

    divider.addEventListener("pointerdown", event => {
      if (event.button !== 0) return;
      event.preventDefault();
      divider.setPointerCapture(event.pointerId);
      divider.classList.add("dragging");
      document.documentElement.classList.add("resizing-panes");
      const startX = event.clientX;
      const startRatio = paneRatio;
      const pointerId = event.pointerId;
      const move = current => {
        if (current.pointerId !== pointerId) return;
        setRatio(startRatio + (current.clientX - startX) / bounds().available);
      };
      const end = current => {
        if (current.pointerId !== pointerId) return;
        divider.removeEventListener("pointermove", move);
        divider.removeEventListener("pointerup", end);
        divider.removeEventListener("pointercancel", end);
        divider.classList.remove("dragging");
        document.documentElement.classList.remove("resizing-panes");
        setRatio(paneRatio, true);
      };
      divider.addEventListener("pointermove", move);
      divider.addEventListener("pointerup", end);
      divider.addEventListener("pointercancel", end);
    });

    divider.addEventListener("keydown", event => {
      const { min, max } = bounds();
      let next;
      if (event.key === "ArrowLeft") next = paneRatio - 0.05;
      else if (event.key === "ArrowRight") next = paneRatio + 0.05;
      else if (event.key === "Home") next = min;
      else if (event.key === "End") next = max;
      else if (event.key === "Enter") next = 0.52;
      else return;
      event.preventDefault();
      setRatio(next, true);
    });

    setRatio(paneRatio);
    if (window.ResizeObserver) {
      paneResizeObserver = new ResizeObserver(() => setRatio(paneRatio));
      paneResizeObserver.observe(layout);
    }
  }

  function quizSessionFor(id) {
    return state.quizSessions.find(session => session.id === id);
  }

  function quizResponse(session, questionId) {
    return session.responses[questionId];
  }

  function quizAnswered(session, questionId) {
    return Object.values(quizResponse(session, questionId)?.answers || {}).some(answer => String(answer).trim());
  }

  function quizScore(session) {
    return session.questionIds.reduce((total, id) => total + Object.values(quizResponse(session, id)?.scores || {}).reduce((sum, value) => sum + Number(value || 0), 0), 0);
  }

  function quizMaxPoints(session) {
    return session.questionIds.reduce((total, id) => total + (questionFor(id)?.points || 0), 0);
  }

  function quizExamLabel(session) {
    const examIds = new Set(session.questionIds.map(id => questionFor(id)?.examId).filter(Boolean));
    return examIds.size === 1 ? EXAM_BY_ID.get([...examIds][0]).label : "Mixed exams";
  }

  function quizUrl(session, view, index = null) {
    return `#quiz/${session.id}/${view}${index === null ? "" : `/${index}`}`;
  }

  function renderQuizRoute(id, view, indexText) {
    if (!id) { renderQuizHub(); return; }
    const session = quizSessionFor(id);
    if (!session) { location.hash = "#quiz"; return; }
    const index = Number(indexText);
    if (session.status === "active") {
      if (view === "finish") renderQuizFinish(session);
      else if (view === "q" && Number.isInteger(index) && index >= 0 && index < session.questionIds.length) renderQuizQuestion(session, index);
      else location.hash = quizUrl(session, "q", session.currentIndex || 0);
    } else if (session.status === "review" || session.status === "completed") {
      if (view === "review" && Number.isInteger(index) && index >= 0 && index < session.questionIds.length) renderQuizReview(session, index);
      else if (view === "results" && session.status === "completed") renderQuizResults(session);
      else location.hash = session.status === "completed" ? quizUrl(session, "results") : quizUrl(session, "review", 0);
    } else location.hash = "#quiz";
  }

  function renderQuizHub() {
    const open = state.quizSessions.filter(session => session.status !== "completed");
    main.innerHTML = `${pageHeader("QUIZ MODE", "Build a random quiz")}
      <section class="quiz-setup"><label for="quiz-exam">Questions from</label><select id="quiz-exam" class="quiz-exam-select"><option value="all">All exams (${QUIZ_QUESTIONS.length})</option>${EXAMS.map(exam => `<option value="${esc(exam.id)}">${esc(exam.label)} (${exam.questions.filter(question => !question.excludedFromOfficialScore).length})</option>`).join("")}</select><label for="quiz-count" class="quiz-count-label">Number of questions</label><div class="quiz-setup-row"><input id="quiz-count" type="number" min="1" max="${QUIZ_QUESTIONS.length}" step="1" inputmode="numeric" value="5" /><span id="quiz-range">1–${QUIZ_QUESTIONS.length}</span><button class="button button-dark" type="button" data-quiz-action="start">Start quiz →</button></div></section>
      ${open.length ? `<section class="section-head"><h2>Continue a quiz</h2></section><div class="quiz-list">${open.map(session => `<div class="quiz-list-item"><a class="quiz-list-row" href="${session.status === "active" ? quizUrl(session, "q", session.currentIndex || 0) : quizUrl(session, "review", 0)}"><span><strong>${questionCount(session.questionIds.length)} · ${esc(quizExamLabel(session))}</strong><small>${session.status === "active" ? `${session.questionIds.filter(id => quizAnswered(session, id)).length} answered` : "Ready to score"} · Started ${dateLabel(session.createdAt)}</small></span><b>${session.status === "active" ? "Resume →" : "Review →"}</b></a><button class="quiz-discard" type="button" data-quiz-action="discard" data-quiz-id="${esc(session.id)}">Discard</button></div>`).join("")}</div>` : ""}`;
  }

  function discardQuiz(session) {
    if (session.status === "completed") return;
    if (!confirm(`Discard this ${questionCount(session.questionIds.length)} quiz? Its answers and scratchpad will be removed.`)) return;
    state.quizSessions = state.quizSessions.filter(item => item.id !== session.id);
    saveState(true);
    renderQuizHub();
    showToast("Quiz discarded.");
  }

  function startQuiz() {
    const field = main.querySelector("#quiz-count");
    const selectedExam = main.querySelector("#quiz-exam")?.value || "all";
    const pool = selectedExam === "all" ? QUIZ_QUESTIONS : QUIZ_QUESTIONS.filter(question => question.examId === selectedExam);
    const count = Number(field?.value);
    if (!Number.isInteger(count) || count < 1 || count > pool.length) {
      showToast(`Choose a whole number from 1 to ${pool.length}.`);
      field?.focus();
      return;
    }
    const ids = pool.map(question => question.id);
    for (let i = ids.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [ids[i], ids[j]] = [ids[j], ids[i]];
    }
    const questionIds = ids.slice(0, count);
    const responses = Object.fromEntries(questionIds.map(id => [id, { answers: {}, scores: {}, note: "", scratchpad: [], elapsedSec: 0 }]));
    const session = {
      id: `quiz-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      questionIds, responses, examId: selectedExam, status: "active", currentIndex: 0,
      elapsedSec: 0, createdAt: new Date().toISOString()
    };
    state.quizSessions.unshift(session);
    saveState(true);
    location.hash = quizUrl(session, "q", 0);
  }

  function quizNavigation(session, index, view) {
    return `<nav class="quiz-navigation" aria-label="Quiz questions">${session.questionIds.map((id, position) => `<a href="${quizUrl(session, view, position)}" class="quiz-number ${position === index ? "current" : ""} ${view === "q" && quizAnswered(session, id) ? "answered" : ""}" ${position === index ? 'aria-current="step"' : ""} aria-label="Question ${position + 1}${view === "q" && quizAnswered(session, id) ? ", answered" : ""}">${position + 1}</a>`).join("")}</nav>`;
  }

  function renderQuizQuestion(session, index) {
    const question = questionFor(session.questionIds[index]);
    if (!question) { location.hash = "#quiz"; return; }
    session.currentIndex = index;
    saveState();
    const response = quizResponse(session, question.id);
    main.innerHTML = `<div class="practice-top"><a href="#quiz" class="back-link">← Quiz mode</a><span class="timer">◷ <span id="quiz-elapsed">${duration(session.elapsedSec)}</span></span></div>
      <div class="practice-heading"><div><div class="eyebrow">QUIZ QUESTION ${index + 1} OF ${session.questionIds.length}</div><h1>${esc(questionTitle(question))}</h1></div><span class="total-points">${points(question.points)} ${question.points === 1 ? "POINT" : "POINTS"}</span></div>
      ${quizNavigation(session, index, "q")}
      <div class="practice-layout"><section id="question-pane" class="question-side" aria-label="Question prompt">${renderPrompt(question)}</section>${paneDivider()}<section id="answer-pane" class="answer-side" aria-label="Your answer"><div class="answer-header"><h2>Show your work</h2></div>${workTabs()}<div id="answers-panel" role="tabpanel" aria-labelledby="answers-tab">${question.parts.map(part => `<div class="answer-card"><div class="answer-part-head"><strong>Part ${part.id}</strong><span>${points(part.points)} ${part.points === 1 ? "point" : "points"}</span></div><p class="answer-prompt">${esc(part.prompt)}</p><label class="sr-only" for="quiz-answer-${part.id}">Your answer to part ${part.id}</label><textarea id="quiz-answer-${part.id}" data-quiz-answer="${part.id}" placeholder="Type your reasoning, formulas, and final answer…" spellcheck="true">${esc(response.answers[part.id] || "")}</textarea></div>`).join("")}</div>${scratchpadPanel()}</section></div>
      <div class="quiz-actions">${index > 0 ? `<a class="button button-outline" href="${quizUrl(session, "q", index - 1)}">← Previous</a>` : ""}<a class="button button-dark" href="${index + 1 < session.questionIds.length ? quizUrl(session, "q", index + 1) : `#quiz/${session.id}/finish`}">${index + 1 < session.questionIds.length ? "Next question →" : "Finish quiz →"}</a></div>`;
    setupPracticeResize();
    setupWorkTabs(response.scratchpad, null, cells => {
      response.scratchpad = cells;
      saveState();
    });
  }

  function renderQuizFinish(session) {
    const answered = session.questionIds.filter(id => quizAnswered(session, id)).length;
    main.innerHTML = `${pageHeader("QUIZ MODE", "Finish quiz")}
      <section class="quiz-summary"><strong>${answered} of ${questionCount(session.questionIds.length)} answered</strong><p>Submitting reveals the solutions and ends the answering phase. You can leave unanswered questions blank.</p><div class="quiz-actions"><a class="button button-outline" href="${quizUrl(session, "q", session.currentIndex || 0)}">Keep answering</a><button class="button button-dark" type="button" data-quiz-action="submit" data-quiz-id="${esc(session.id)}">Submit quiz →</button></div></section>
      <div class="quiz-list">${session.questionIds.map((id, index) => `<a class="quiz-list-row" href="${quizUrl(session, "q", index)}"><span><strong>Question ${index + 1} · ${esc(questionFor(id)?.exam || "")} Q${questionFor(id)?.number || ""}</strong><small>${quizAnswered(session, id) ? "Answered" : "No answer entered"}</small></span><b>Review →</b></a>`).join("")}</div>`;
  }

  function submitQuiz(session) {
    if (session.status !== "active") return;
    session.status = "review";
    session.submittedAt = new Date().toISOString();
    saveState(true);
    location.hash = quizUrl(session, "review", 0);
  }

  function renderQuizReview(session, index) {
    const question = questionFor(session.questionIds[index]);
    if (!question) { location.hash = "#quiz"; return; }
    const response = quizResponse(session, question.id);
    const scoring = session.status === "review";
    main.innerHTML = `<div class="practice-top"><a href="${session.status === "completed" ? quizUrl(session, "results") : "#quiz"}" class="back-link">← ${session.status === "completed" ? "Quiz results" : "Quiz mode"}</a><span class="timer">◷ ${duration(session.elapsedSec)}</span></div>
      <div class="practice-heading"><div><div class="eyebrow">QUIZ REVIEW ${index + 1} OF ${session.questionIds.length}</div><h1>${esc(questionTitle(question))}</h1></div><span class="total-points">${points(question.points)} POINTS</span></div>
      ${quizNavigation(session, index, "review")}
      <div class="practice-layout"><section id="question-pane" class="question-side" aria-label="Question prompt">${renderPrompt(question)}</section>${paneDivider()}<section id="answer-pane" class="answer-side" aria-label="Your answer and solutions"><div class="answer-header"><h2>Your work & solutions</h2></div>${workTabs()}<div id="answers-panel" role="tabpanel" aria-labelledby="answers-tab">${question.parts.map(part => `<div class="answer-card"><div class="answer-part-head"><strong>Part ${part.id}</strong><span>${points(part.points)} ${part.points === 1 ? "point" : "points"}</span></div><p class="answer-prompt">${esc(part.prompt)}</p><div class="saved-answer">${esc(response.answers[part.id] || "No answer entered.")}</div><div class="solution-block"><div class="solution-kicker">SAMPLE ANSWER</div><p>${esc(part.solution)}</p><div class="examiner-note"><strong>Examiner insight</strong><p>${esc(part.insight)}</p></div></div>${scoring ? `<div class="score-row"><label for="quiz-score-${part.id}">Points earned</label><div><input id="quiz-score-${part.id}" data-quiz-score="${part.id}" type="number" min="0" max="${part.points}" step="0.25" inputmode="decimal" value="${response.scores[part.id] ?? ""}" /><span>/ ${points(part.points)}</span></div></div>` : `<div class="score-row"><span>Points earned</span><strong>${points(response.scores[part.id] || 0)} / ${points(part.points)}</strong></div>`}</div>`).join("")}</div>${scratchpadPanel(true)}</section></div>
      <div class="quiz-actions">${index > 0 ? `<a class="button button-outline" href="${quizUrl(session, "review", index - 1)}">← Previous</a>` : ""}<a class="button button-outline" href="${index + 1 < session.questionIds.length ? quizUrl(session, "review", index + 1) : quizUrl(session, "review", 0)}">${index + 1 < session.questionIds.length ? "Next question →" : "First question ↺"}</a>${scoring ? `<button class="button button-dark" type="button" data-quiz-action="finish-scoring" data-quiz-id="${esc(session.id)}">Finish scoring →</button>` : ""}</div>`;
    setupPracticeResize();
    setupWorkTabs(response.scratchpad);
  }

  function finishQuizScoring(session) {
    if (session.status !== "review") return;
    for (const [index, id] of session.questionIds.entries()) {
      const question = questionFor(id);
      const response = quizResponse(session, id);
      for (const part of question.parts) {
        const raw = response.scores[part.id];
        const score = Number(raw);
        if (raw === undefined || raw === "" || !Number.isFinite(score) || score < 0 || score > part.points || Math.round(score * 4) !== score * 4) {
          const targetHash = quizUrl(session, "review", index);
          if (location.hash === targetHash) renderQuizReview(session, index);
          else location.hash = targetHash;
          showToast(`Score every part. Check Question ${index + 1}, part ${part.id}.`);
          requestAnimationFrame(() => main.querySelector(`[data-quiz-score="${part.id}"]`)?.focus());
          return;
        }
        response.scores[part.id] = score;
      }
    }
    session.status = "completed";
    session.completedAt = new Date().toISOString();
    const attempts = session.questionIds.map(id => {
      const response = quizResponse(session, id);
      return {
        id: `attempt-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        questionId: id, quizId: session.id,
        answers: { ...response.answers }, scores: { ...response.scores }, note: response.note,
        scratchpad: Array.isArray(response.scratchpad) ? response.scratchpad.map(row => Array.isArray(row) ? [...row] : []) : [],
        elapsedSec: response.elapsedSec || 0, completedAt: session.completedAt
      };
    });
    state.attempts.unshift(...attempts);
    saveState(true);
    location.hash = quizUrl(session, "results");
  }

  function renderQuizResults(session) {
    const earnedPoints = quizScore(session);
    const maxPoints = quizMaxPoints(session);
    main.innerHTML = `${pageHeader("QUIZ COMPLETE", "Quiz results")}
      <section class="quiz-summary"><strong>${points(earnedPoints)} / ${points(maxPoints)} points</strong><p>${questionCount(session.questionIds.length)} · ${esc(quizExamLabel(session))} · ${duration(session.elapsedSec)} spent · Completed ${dateLabel(session.completedAt)}</p><div class="quiz-actions"><a class="button button-outline" href="#history">Attempt history</a><a class="button button-dark" href="#quiz">Start another quiz →</a></div></section>
      <div class="quiz-list">${session.questionIds.map((id, index) => { const question = questionFor(id); const score = Object.values(quizResponse(session, id).scores).reduce((sum, value) => sum + Number(value || 0), 0); return `<a class="quiz-list-row" href="${quizUrl(session, "review", index)}"><span><strong>Question ${index + 1} · ${esc(question.exam)} Q${question.number}</strong><small>${points(score)} / ${points(question.points)} points</small></span><b>Review →</b></a>`; }).join("")}</div>`;
  }

  function renderQuestion(question) {
    const navigation = questionNavigation(question);
    const latest = latestAttempt(question.id);
    if (latest && !state.drafts[question.id]) {
      main.innerHTML = `${questionHeader(question, navigation)}<div class="completed-panel"><div class="completed-symbol">✓</div><div class="eyebrow">LATEST ATTEMPT</div><h2>${points(earned(latest))} <span>/ ${points(question.points)} points</span></h2><p>Scored ${dateLabel(latest.completedAt)}. Your answer and the reference solution are saved in attempt history.</p><div class="completed-actions"><a class="button button-dark" href="#attempt/${esc(latest.id)}">Review last attempt</a><button class="button button-outline" type="button" data-action="new-attempt" data-question="${esc(question.id)}">Try this question again</button></div></div>${renderPrompt(question)}`;
      return;
    }
    const draft = ensureDraft(question);
    main.innerHTML = `${questionHeader(question, navigation)}<div class="practice-layout"><section id="question-pane" class="question-side" aria-label="Question prompt">${renderPrompt(question)}</section>${paneDivider()}<section id="answer-pane" class="answer-side" aria-label="Your answer"><div class="answer-header"><div><h2>Show your work</h2></div><div class="timer" title="Time spent on this attempt">◷ <span id="elapsed-time">${duration(draft.elapsedSec)}</span></div></div>${workTabs()}<div id="answers-panel" role="tabpanel" aria-labelledby="answers-tab">${question.parts.map(part => `<div class="answer-card"><div class="answer-part-head"><strong>Part ${part.id}</strong><span>${points(part.points)} ${part.points === 1 ? "point" : "points"}</span></div><p class="answer-prompt">${esc(part.prompt)}</p><label class="sr-only" for="answer-${part.id}">Your answer to part ${part.id}</label><textarea id="answer-${part.id}" data-answer="${part.id}" placeholder="Type your reasoning, formulas, and final answer…" spellcheck="true">${esc(draft.answers[part.id] || "")}</textarea>${draft.revealed ? `<div class="solution-block"><div class="solution-kicker">SAMPLE ANSWER</div><p>${esc(part.solution)}</p><div class="examiner-note"><strong>Examiner insight</strong><p>${esc(part.insight)}</p></div></div><div class="score-row"><label for="score-${part.id}">Points earned</label><div><input id="score-${part.id}" data-score="${part.id}" type="number" min="0" max="${part.points}" step="0.25" inputmode="decimal" value="${draft.scores[part.id] ?? ""}" /><span>/ ${points(part.points)}</span></div></div>` : ""}</div>`).join("")}${draft.revealed ? `<div class="review-finish"><label for="review-note">What would you like to remember?</label><textarea id="review-note" data-note placeholder="Optional note for your next attempt…">${esc(draft.note)}</textarea><div class="review-actions"><span>Enter points earned for every part, including zeroes.</span><button type="button" class="button button-dark" data-action="save-attempt" data-question="${esc(question.id)}">Save scored attempt →</button></div></div><p class="solution-source">${sourceLink(question, question.solutionPages[0], `View examiner's report · PDF p. ${question.solutionPages.join("–")}`)}</p>` : `<div class="reveal-card"><div><strong>Ready to review?</strong></div><button type="button" class="button button-dark" data-action="reveal" data-question="${esc(question.id)}">Reveal solutions →</button></div>`}</div>${scratchpadPanel()}</section></div>`;
    setupPracticeResize();
    setupWorkTabs(draft.scratchpad, question.id);
  }

  function questionHeader(question, navigation) {
    const { questions, source, backHref, backLabel } = navigation;
    const index = questions.findIndex(item => item.id === question.id);
    const previous = questions[index - 1];
    const next = questions[index + 1];
    return `<div class="practice-top"><a href="${esc(backHref)}" class="back-link">← ${esc(backLabel)}</a><div class="practice-pager">${previous ? `<a href="${esc(questionUrl(previous, source))}" aria-label="Previous question">←</a>` : `<span class="disabled">←</span>`}<span>${index + 1} OF ${questions.length}</span>${next ? `<a href="${esc(questionUrl(next, source))}" aria-label="Next question">→</a>` : `<span class="disabled">→</span>`}</div></div><div class="practice-heading"><div><div class="eyebrow">PAST EXAM QUESTION</div><h1>${esc(questionTitle(question))}</h1>${chapterTags(question, true)}</div><span class="total-points">${points(question.points)} ${question.points === 1 ? "POINT" : "POINTS"}</span></div>`;
  }

  function renderAttempt(id) {
    const attempt = state.attempts.find(item => item.id === id);
    if (!attempt) { location.hash = "#history"; return; }
    const question = questionFor(attempt.questionId);
    if (!question) { location.hash = "#history"; return; }
    main.innerHTML = `<div class="practice-top"><a href="#history" class="back-link">← Attempt history</a><span class="eyebrow">${dateLabel(attempt.completedAt)}</span></div><div class="practice-heading"><div><div class="eyebrow">ATTEMPT REVIEW</div><h1>${esc(questionTitle(question))}</h1>${chapterTags(question, true)}</div><span class="total-points">${points(earned(attempt))} / ${points(question.points)} POINTS</span></div><div class="practice-layout"><section id="question-pane" class="question-side">${renderPrompt(question)}</section>${paneDivider()}<section id="answer-pane" class="answer-side"><div class="answer-header"><div><div class="eyebrow">SCORED ATTEMPT</div><h2>Your work & solutions</h2></div><span class="timer">◷ ${duration(attempt.elapsedSec)}</span></div>${workTabs()}<div id="answers-panel" role="tabpanel" aria-labelledby="answers-tab">${question.parts.map(part => `<div class="answer-card"><div class="answer-part-head"><strong>Part ${part.id}</strong><span>${points(attempt.scores[part.id] || 0)} / ${points(part.points)} pts</span></div><p class="answer-prompt">${esc(part.prompt)}</p><div class="saved-answer">${esc(attempt.answers[part.id] || "No answer entered.")}</div><div class="solution-block"><div class="solution-kicker">SAMPLE ANSWER</div><p>${esc(part.solution)}</p><div class="examiner-note"><strong>Examiner insight</strong><p>${esc(part.insight)}</p></div></div></div>`).join("")}${attempt.note ? `<div class="saved-note"><strong>Your review note</strong><p>${esc(attempt.note)}</p></div>` : ""}<button class="button button-dark" type="button" data-action="new-attempt" data-question="${esc(question.id)}">Try again →</button><p class="solution-source">${sourceLink(question, question.solutionPages[0], `View examiner's report · PDF p. ${question.solutionPages.join("–")}`)}</p></div>${scratchpadPanel(true)}</section></div>`;
    setupPracticeResize();
    setupWorkTabs(attempt.scratchpad);
  }

  function saveAttempt(question) {
    const draft = state.drafts[question.id];
    if (!draft?.revealed) return;
    for (const part of question.parts) {
      const raw = draft.scores[part.id];
      const score = Number(raw);
      if (raw === undefined || raw === "" || !Number.isFinite(score) || score < 0 || score > part.points || Math.round(score * 4) !== score * 4) {
        showToast(`Enter a valid score from 0 to ${points(part.points)} for part ${part.id}, in quarter-point steps.`);
        document.querySelector(`[data-score="${part.id}"]`)?.focus();
        return;
      }
    }
    const attempt = {
      id: `attempt-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      questionId: question.id,
      answers: { ...draft.answers },
      scores: { ...draft.scores },
      note: draft.note,
      scratchpad: Array.isArray(draft.scratchpad) ? draft.scratchpad.map(row => Array.isArray(row) ? [...row] : []) : [],
      elapsedSec: draft.elapsedSec,
      completedAt: new Date().toISOString()
    };
    state.attempts.unshift(attempt);
    delete state.drafts[question.id];
    saveState(true);
    location.hash = `#attempt/${attempt.id}`;
    showToast("Scored attempt saved.");
  }

  document.addEventListener("click", event => {
    const figureButton = event.target.closest("[data-figure]");
    if (figureButton) {
      const question = questionFor(figureButton.dataset.figure);
      if (!question?.figure) return;
      document.getElementById("figure-dialog-title").textContent = `Question ${question.number}: ${question.figure.title}`;
      const image = document.getElementById("figure-dialog-image");
      image.src = question.figure.src;
      image.alt = question.figure.alt;
      document.getElementById("figure-dialog-full").href = question.figure.src;
      figureDialog.showModal();
      return;
    }
    const nav = event.target.closest("[data-nav]");
    if (nav) location.hash = `#${nav.dataset.nav}`;
    const mode = event.target.closest("[data-mode]");
    if (mode) {
      libraryMode = mode.dataset.mode;
      libraryChapter = "all";
      const hash = libraryMode === "exam" ? `#library/exam/${libraryExam}` : "#library";
      if (location.hash === hash) renderLibrary();
      else location.hash = hash;
    }
    const chapterPath = event.target.closest("[data-library-mode]");
    if (chapterPath) libraryMode = chapterPath.dataset.libraryMode;
    const quizAction = event.target.closest("[data-quiz-action]");
    if (quizAction) {
      const session = quizSessionFor(quizAction.dataset.quizId);
      if (quizAction.dataset.quizAction === "start") startQuiz();
      else if (session && quizAction.dataset.quizAction === "submit") submitQuiz(session);
      else if (session && quizAction.dataset.quizAction === "finish-scoring") finishQuizScoring(session);
      else if (session && quizAction.dataset.quizAction === "discard") discardQuiz(session);
      return;
    }
    const action = event.target.closest("[data-action]");
    if (!action) return;
    const question = questionFor(action.dataset.question);
    if (!question) return;
    if (action.dataset.action === "reveal") {
      ensureDraft(question).revealed = true;
      saveState();
      renderQuestion(question);
      document.querySelector(".solution-block")?.scrollIntoView({ behavior: "smooth", block: "center" });
    } else if (action.dataset.action === "save-attempt") {
      saveAttempt(question);
    } else if (action.dataset.action === "new-attempt") {
      ensureDraft(question);
      saveState();
      const target = location.hash.startsWith(`#question/${encodeURIComponent(question.id)}`)
        ? location.hash
        : questionUrl(question, `library/exam/${question.examId}`);
      if (location.hash === target) renderQuestion(question);
      else location.hash = target;
    }
  });

  document.getElementById("figure-dialog-close").addEventListener("click", () => figureDialog.close());
  figureDialog.addEventListener("click", event => {
    if (event.target === figureDialog) figureDialog.close();
  });

  document.addEventListener("change", event => {
    if (event.target.id === "chapter-filter") {
      libraryChapter = event.target.value;
      const hash = libraryChapter === "all" ? "#library" : `#library/${libraryChapter}`;
      if (location.hash === hash) renderLibrary();
      else location.hash = hash;
    } else if (event.target.id === "exam-filter") {
      libraryExam = event.target.value;
      location.hash = `#library/exam/${libraryExam}`;
    } else if (event.target.id === "quiz-exam") {
      const exam = EXAM_BY_ID.get(event.target.value);
      const max = exam ? exam.questions.filter(question => !question.excludedFromOfficialScore).length : QUIZ_QUESTIONS.length;
      const count = main.querySelector("#quiz-count");
      count.max = max;
      if (Number(count.value) > max) count.value = max;
      main.querySelector("#quiz-range").textContent = `1–${max}`;
    }
  });

  document.addEventListener("input", event => {
    const target = event.target;
    const quizMatch = location.hash.match(/^#quiz\/([^/]+)\/(q|review)\/(\d+)$/);
    if (quizMatch) {
      const session = quizSessionFor(quizMatch[1]);
      const questionId = session?.questionIds[Number(quizMatch[3])];
      const response = questionId && quizResponse(session, questionId);
      if (!response) return;
      if (quizMatch[2] === "q" && session.status === "active" && target.dataset.quizAnswer !== undefined) response.answers[target.dataset.quizAnswer] = target.value;
      else if (quizMatch[2] === "review" && session.status === "review" && target.dataset.quizScore !== undefined) response.scores[target.dataset.quizScore] = target.value;
      else return;
      saveState();
      return;
    }
    const match = location.hash.match(/^#question\/([^?]+)/);
    if (!match) return;
    const question = questionFor(decodeURIComponent(match[1]));
    if (!question) return;
    const draft = ensureDraft(question);
    if (target.dataset.answer) draft.answers[target.dataset.answer] = target.value;
    else if (target.dataset.score) draft.scores[target.dataset.score] = target.value;
    else if (target.matches("[data-note]")) draft.note = target.value;
    else return;
    saveState();
  });

  document.getElementById("export-data").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify({ ...state, exportedAt: new Date().toISOString() }, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `exam5-practice-backup-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    showToast("Backup exported.");
  });

  document.getElementById("import-data").addEventListener("click", () => document.getElementById("import-file").click());
  document.getElementById("import-file").addEventListener("change", async event => {
    const file = event.target.files[0];
    if (!file) return;
    try {
      const imported = JSON.parse(await file.text());
      if (imported.version !== 1 || !imported.drafts || typeof imported.drafts !== "object" || !Array.isArray(imported.attempts)) throw new Error("This is not an Exam 5 Practice Desk backup.");
      if (!confirm("Importing this backup will replace the study data currently saved in this browser. Continue?")) return;
      if (!Array.isArray(imported.quizSessions)) imported.quizSessions = [];
      state = imported;
      if (!saveState(true)) throw new Error("Could not save imported data in this browser.");
      location.hash = "#home";
      route();
      showToast("Backup imported.");
    } catch (error) {
      showToast(error.message || "Could not read that backup.");
    } finally {
      event.target.value = "";
    }
  });

  setInterval(() => {
    if (document.hidden) return;
    const quizMatch = location.hash.match(/^#quiz\/([^/]+)\/q\/(\d+)$/);
    if (quizMatch) {
      const session = quizSessionFor(quizMatch[1]);
      const response = session && quizResponse(session, session.questionIds[Number(quizMatch[2])]);
      if (!session || session.status !== "active" || !response) return;
      session.elapsedSec += 1;
      response.elapsedSec += 1;
      const clock = document.getElementById("quiz-elapsed");
      if (clock) clock.textContent = duration(session.elapsedSec);
      saveState(false, TIMER_SAVE_DELAY_MS);
      return;
    }
    const match = location.hash.match(/^#question\/([^?]+)/);
    if (!match) return;
    const question = questionFor(decodeURIComponent(match[1]));
    if (!question || !state.drafts[question.id]) return;
    state.drafts[question.id].elapsedSec += 1;
    const clock = document.getElementById("elapsed-time");
    if (clock) clock.textContent = duration(state.drafts[question.id].elapsedSec);
    saveState(false, TIMER_SAVE_DELAY_MS);
  }, 1000);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) flushState();
  });
  window.addEventListener("pagehide", flushState);

  window.addEventListener("hashchange", route);
  route();
})();
