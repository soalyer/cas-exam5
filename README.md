# Exam 5 Practice Desk

A personal, local web app for practicing CAS Exam 5 questions. It includes Spring 2013 (26 questions), Fall 2013 (24), Spring 2014 (23), Fall 2014 (24), Spring 2015 (25), Fall 2015 (25), Spring 2016 (25), Fall 2016 (27), Spring 2017 (26), Fall 2017 (28), the regular and makeup Spring 2018 sittings (26 each), Fall 2018 (24), Spring 2019 (24), and Fall 2019 (25). Spring 2018 answers are independently worked from their workbooks and examiner guidance; the other exams use the official PDFs in `past_exams/`.

## Start the app

From this folder, run:

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

Then open [http://127.0.0.1:4173](http://127.0.0.1:4173) in your browser. Press `Ctrl+C` in the terminal to stop the server. The app has no package installation, account, cloud service, or network dependency.

## Study workflow

1. Choose a textbook chapter or select **Past exam in order** and choose an exam from the question library. A question can appear under multiple chapters.
2. Type an answer for each part. Use the **Scratchpad** tab for calculations in spreadsheet cells, including formulas such as `=A1*B1` or `=SUM(A1:A5)`. Answers and scratchpad cells save automatically in your browser.
3. Return to **Answers**, reveal the sample answers, compare your work, and enter points earned for every part, including zeroes.
4. Save the scored attempt. Its scratchpad is preserved for read-only review in **Attempt history**. Retry questions below full points from **Retry queue**.

## Quiz mode

Choose **Quiz mode**, choose all exams or one exam, and enter the number of questions. The app draws that many distinct questions in random order from the chosen pool. Answers and scratchpads save separately from ordinary question drafts, so you can leave and resume a quiz. Solutions remain hidden until you submit the whole quiz. You can submit with unanswered questions.

After submission, review the solutions and score every part. Finishing scoring shows the quiz total and saves the quiz in **Attempt history**. Each quiz question also becomes a scored question attempt for progress and the retry queue. Quiz sessions are included in backup exports, and older backups remain importable.

Unfinished quizzes appear under **Continue a quiz**. Use **Discard** there to remove a quiz you no longer want; the app asks for confirmation before deleting its answers and scratchpad.

Use **Hide sidebar** in the top bar for a wider practice area. **Show sidebar** restores navigation. The app remembers this layout choice in the same browser.

On question and scored-attempt screens, drag the vertical handle between the question and answer to change their widths. You can also focus the handle and use the left or right arrow keys; Home and End move to the allowed limits, and Enter resets the split. The app remembers the split in the same browser.

Spring 2013 Question 12, Spring 2014 Question 9, Fall 2014 Question 10, Fall 2015 Question 10, Fall 2016 Question 12, Spring 2017 Questions 8 and 26, Spring 2018 Question 13, Spring 2018 Makeup Question 12, Fall 2018 Question 9, Spring 2019 Question 9, and Fall 2019 Questions 10, 11, and 23 include graphs from the original exams. Select a graph to enlarge it, or open the image at full resolution from the enlarged view.

Use **Export backup** regularly. It downloads a JSON file with your drafts and attempts. **Import backup** replaces the data currently saved in this browser. Clearing browser site data can erase progress that has not been exported.

## Source and scope

- Spring 2013: `past_exams/admissions_studytools_exam5_sp13-5.pdf` supplies the questions, two Question 12 GLM charts, sample answers, and examiner report. The CBT workbook supplies the point grid and accelerates extraction. All 26 questions and 61 scored parts total 63.5 points. The printed PDF corrects workbook values in Questions 2 and 8 and the age label in Question 16.
- Fall 2013: `past_exams/admissions_studytools_exam5_f13-5.pdf` supplies the questions, sample answers, and examiner commentary. The CBT workbook supplies the point grid and accelerates extraction. All 24 questions and 53 scored parts total 58.5 points. Split workbook headings were restored from the printed tables, including the paired Company A and B triangles in Question 15.
- Spring 2014: `past_exams/admissions_studytools_exam5_sp14-5.pdf` supplies the questions, Question 9 chart, sample answers, and examiner reports. The CBT workbook supplies the point grid and accelerates extraction. All 23 questions and 48 scored parts total 59.75 points. Split workbook headings were restored from the printed tables.
- Fall 2014: `past_exams/admissions_studytools_exam5_f14-5.pdf` supplies the scanned questions, the Question 10 graph, sample answers, and examiner report. The CBT workbook supplies the point grid and speeds transcription. All 24 questions and 55 scored parts total 58.25 points. PDF wording corrects workbook errors including Question 12's GAAP reference.
- Spring 2015: `past_exams/admissions_studytools_exam5_sp15-5.pdf` supplies the scanned questions, sample answers, and examiner report. The CBT workbook supplies the point grid and speeds transcription. All 25 questions and 49 scored parts total 57.25 points. The printed PDF corrects Question 22's accident-year labels and Question 25's 128,672 figure. Question 19's worked answer uses the question's figures where the examiner report's sample answer has transcription errors. Question 20 notes the exposure-base typo acknowledged by the report.
- Fall 2015: `past_exams/admissions_studytools_exam5_f15-5.pdf` supplies the questions, original Question 10 charts, sample answers, and examiner report. The CBT workbook supplies the point grid and speeds transcription. All 25 questions and 53 scored parts total 55.75 points. The PDF's January 30, 2014 claim date in Question 16 corrects the workbook's 2001 date. Two Question 5 sample calculations embedded as images in the report were transcribed from the printed page.
- Spring 2016: `past_exams/admissions_studytools_exam5_sp16-5.pdf` supplies the scanned questions, sample answers, and examiner report. The CBT workbook supplies the point grid and speeds transcription. All 25 questions and 63 scored parts total 57.75 points. The printed PDF corrects the workbook's Question 4 transaction date and Question 24 accident years and $1,000 value. Image-only report calculations were transcribed from the printed pages.
- Fall 2016: `past_exams/admissions_studytools_exam5_f16-5.pdf` supplies the scanned questions, sample answers, and examiner report. The CBT workbook supplies the point grid and accelerates transcription. All 27 questions and 64 scored parts total 56 points. Question 16's 2013 payment for claim 2 is 20 in the printed PDF, correcting a workbook value of 0.2. Question 23's sample answer is embedded as an image; the app gives its Berquist-Sherman and Bornhuetter-Ferguson calculation and resulting unpaid estimate.
- Spring 2017: `past_exams/admissions_studytools_exam5_sp17-5.pdf` supplies the questions, sample answers, and examiner report. The CBT workbook supplies the point grid. All 26 questions and 62 scored parts total 57.5 points. Question 22 prints “34” months over the third closed-count column, while the examiner report treats it as 36; the app retains the printed label and notes the discrepancy.
- Fall 2017: `past_exams/admissions_studytools_exam5_f17-5.pdf` supplies questions, tables, figure, sample answers, and examiner reports. All 28 questions and 66 scored parts total 55.75 points.
- Spring 2018 regular sitting: questions and point values come from `past_exams/april_may_sp18-5.xls`, an Excel workbook despite its `.xls` extension; the 30-page `past_exams/april_may_sp18-5-examiners_report.pdf` supplies grading expectations but no sample solutions. The app provides independently worked answers checked against those expectations. All 26 questions and 60 scored parts total 55.5 points. The original Question 13 GLM chart is extracted from the workbook. No question PDF was published, so question pages show a source note instead of a PDF link; solution reviews link to the examiner report.
- Spring 2018 makeup sitting: questions and point values come from `past_exams/april_may_sp18-5-makeup.xls`; `past_exams/april_may_sp18-5-makeup_examiners_report.pdf` supplies grading guidance but no model solutions. All 26 questions and 58 parts are present. The workbook totals 56.25 points; the official score excluded defective Question 21 (2.75 points), leaving 53.5 available points. Question 21 remains available for optional practice in the library, is flagged in the app, and is excluded from random quizzes. The workbook assigns Question 5 2.5 points across its parts, while the report heading says 2. Question 12 part c is 0.25 point according to the point grid and report, although its worksheet label says 0.5. The original Question 12 chart is extracted from the workbook.
- Fall 2018 questions, tables, and graphs: `past_exams/admissions_studytools_exam5_f18-5.pdf`, physical PDF pages 4–27; sample answers and examiner report on pages 31–92. All 24 questions and 64 scored parts total 55 points. Question 14's three stakeholders each carry 0.5 points in the report, although the workbook groups them into one item. Question 12 is 2.5 points per the exam and part values; the report's 2-point heading is a typo. Table headings, units, wording and values were checked visually against every question page, correcting workbook errors (including Question 5's 19,200 severity and Question 23's ALAE dollar units). Answers use accepted report methods with arithmetic typos identified where relevant.
- Spring 2019 questions and tables: `past_exams/admissions_studytools_exam5_sp19-5.pdf`, PDF pages 5–28. Its sample answers and examiner report follow later in the same PDF. Table headings were checked against the PDF because the spreadsheet sometimes splits one heading across cells.
- Fall 2019 questions, tables, and graphs: `past_exams/admissions_studytools_exam5_f19-5.pdf`, PDF pages 5–29. Its sample answers and examiner report start on page 33.
- Chapter labels come from Werner & Modlin's *Basic Ratemaking* and Friedland's *Estimating Unpaid Claims Using Basic Techniques* in `source_texts/`. Selecting a chapter also provides a link to its starting page in the source PDF. Only chapters linked to loaded questions appear in the filter.
- The reference answers in the app focus on one accepted method per part and concise examiner insights. Use the available PDF links to review the full reports and alternate solutions.
- The included content is for personal, noncommercial study and is not intended for redistribution.

## Files

- `index.html`: app shell
- `styles.css`: layout and visual design
- `DESIGN.md`: design direction for future interface changes
- `question_data/questions.js`: Fall 2019 question and answer data
- `question_data/spring2013_questions.js`, `question_data/fall2013_questions.js`, `question_data/spring2014_questions.js`: Spring 2013, Fall 2013, and Spring 2014 question data, with stable exam-prefixed IDs
- `question_data/spring2019_questions.js`: Spring 2019 question and answer data
- `question_data/fall2018_questions.js`: Fall 2018 question and answer data, with stable `fall-2018-1` through `fall-2018-24` IDs
- `question_data/fall2017_questions.js`: Fall 2017 question and answer data from the official PDF, with stable `fall-2017-1` through `fall-2017-28` IDs
- `question_data/spring2017_questions.js`: Spring 2017 question and answer data, with stable `spring-2017-1` through `spring-2017-26` IDs
- `question_data/fall2016_questions.js`: Fall 2016 question and answer data, with stable `fall-2016-1` through `fall-2016-27` IDs
- `question_data/spring2016_questions.js`: Spring 2016 question and answer data, with stable `spring-2016-1` through `spring-2016-25` IDs
- `question_data/fall2015_questions.js`: Fall 2015 question and answer data, with stable `fall-2015-1` through `fall-2015-25` IDs
- `question_data/spring2015_questions.js`: Spring 2015 question and answer data, with stable `spring-2015-1` through `spring-2015-25` IDs
- `question_data/fall2014_questions.js`: Fall 2014 question and answer data, with stable `fall-2014-1` through `fall-2014-24` IDs
- `question_data/spring2018_questions.js`: regular Spring 2018 workbook questions and independently worked answers, with stable `spring-2018-1` through `spring-2018-26` IDs
- `question_data/spring2018_makeup_questions.js`: makeup Spring 2018 workbook questions and worked answers, with stable `spring-2018-makeup-1` through `spring-2018-makeup-26` IDs
- `exams.js`: exam catalog, including the PDF link and question set for each exam
- `scripts/build_spring2019.py`: reproduces the Spring 2019 data from the supplied workbook and examiner report, with PDF-checked table headings
- `scripts/build_fall2018.py`: reproduces Fall 2018 from the supplied workbook, explicit PDF-checked corrections, report-based answers, and a direct crop of both Question 9 graphs (requires openpyxl, pypdf, Pillow and pdftoppm)
- `scripts/build_spring2018.py`: reproduces the regular Spring 2018 data from the original CBT workbook and examiner report guidance (requires openpyxl and pypdf)
- `scripts/build_fall2017.py`: reproduces Fall 2017 data from the CBT workbook with the official PDF controlling question wording, table headings, figures, and sample answers (requires openpyxl and pypdf)
- `scripts/build_2016_2017.py`: reproduces Fall 2016 and Spring 2017 data from the CBT workbooks, PDF-checked tables and wording, and examiner reports (requires openpyxl)
- `scripts/build_2015_2016.py`: reproduces Fall 2015 and Spring 2016 from their CBT workbooks, PDF-checked tables and corrections, and official examiner reports (requires openpyxl and pypdf)
- `scripts/build_2014_2015.py`: reproduces Fall 2014 and Spring 2015 from their CBT workbooks, PDF-checked tables and corrections, and official examiner reports (requires openpyxl and pypdf)
- `scripts/build_2013_2014.py`: reproduces Spring 2013, Fall 2013, and Spring 2014 from their CBT workbooks, PDF-checked figures and tables, and official examiner reports (requires openpyxl and pypdf)
- `scripts/build_spring2018_makeup.py`: reproduces the makeup Spring 2018 data from its CBT workbook and examiner report guidance (requires openpyxl and pypdf)
- `past_exams/`: original past exam PDFs
- `assets/exam-graphs/`: original exam graph crops referenced by question data
- `chapters.js`: textbook chapter titles, source PDF links, and question taxonomy
- `app.js`: navigation, local saving, scoring, and backup
- `vendor/`: locally bundled Jspreadsheet CE, jSuites, and Formula Basic assets for the offline scratchpad

The app stores study data under the browser's `localStorage` key `cas-exam5-practice-v1`. Run it at the same local address each time to access the same saved data.

## Checks

Run the dependency-free project checks after changing question data or the app shell:

```bash
node --check app.js
node scripts/validate_data.js
python3 scripts/smoke_test.py
```

The data validator checks IDs, point totals, chapter mappings, table dimensions, and referenced source files. The smoke test starts an isolated local server, verifies the required app shell, and requests every local script and stylesheet referenced by `index.html`.

## Adding another exam

Add a question data file with stable IDs such as `spring-2020-1`, load it before `exams.js` in `index.html`, then add its name, PDF path, and question array to `exams.js`. The library, quiz choices, progress, and question navigation read from that catalog. Keep question IDs stable so existing browser drafts and scores remain linked to the correct questions.
