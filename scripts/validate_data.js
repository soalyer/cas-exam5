#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const dataFiles = [
  "chapters.js",
  "question_data/questions.js",
  "question_data/spring2013_questions.js",
  "question_data/fall2013_questions.js",
  "question_data/spring2014_questions.js",
  "question_data/spring2019_questions.js",
  "question_data/fall2018_questions.js",
  "question_data/fall2017_questions.js",
  "question_data/fall2014_questions.js",
  "question_data/spring2015_questions.js",
  "question_data/fall2015_questions.js",
  "question_data/spring2016_questions.js",
  "question_data/spring2017_questions.js",
  "question_data/fall2016_questions.js",
  "question_data/spring2018_questions.js",
  "question_data/spring2018_makeup_questions.js",
  "exams.js"
];
const sandbox = { window: {} };
vm.createContext(sandbox);

for (const file of dataFiles) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), sandbox, { filename: file });
}

const exams = sandbox.window.EXAM_CATALOG;
const chapters = sandbox.window.EXAM_CHAPTERS;
const errors = [];
const questionIds = new Set();
const examIds = new Set();
const chapterIds = new Set();

function check(condition, message) {
  if (!condition) errors.push(message);
}

function localFileExists(relativePath) {
  return typeof relativePath === "string" && fs.existsSync(path.join(root, relativePath));
}

check(Array.isArray(exams) && exams.length > 0, "EXAM_CATALOG must contain at least one exam.");
check(Array.isArray(chapters) && chapters.length > 0, "EXAM_CHAPTERS must contain at least one chapter.");

for (const chapter of chapters || []) {
  check(!chapterIds.has(chapter.id), `Duplicate chapter ID: ${chapter.id}`);
  chapterIds.add(chapter.id);
  check(localFileExists(chapter.file), `Missing chapter source: ${chapter.file}`);
  check(Number.isInteger(chapter.page) && chapter.page > 0, `Invalid starting page for chapter ${chapter.id}.`);
}

let questionCount = 0;
for (const exam of exams || []) {
  check(!examIds.has(exam.id), `Duplicate exam ID: ${exam.id}`);
  examIds.add(exam.id);
  check(localFileExists(exam.pdf), `Missing exam PDF: ${exam.pdf}`);
  if (exam.questionFormat === "workbook") check(localFileExists(exam.workbook), `Missing exam workbook: ${exam.workbook}`);
  check(Array.isArray(exam.questions) && exam.questions.length > 0, `${exam.id} has no questions.`);
  const questionNumbers = new Set();

  for (const question of exam.questions || []) {
    questionCount += 1;
    check(!questionIds.has(question.id), `Duplicate question ID: ${question.id}`);
    questionIds.add(question.id);
    check(!questionNumbers.has(question.number), `${exam.id} has duplicate question number ${question.number}.`);
    questionNumbers.add(question.number);
    check(Array.isArray(question.parts) && question.parts.length > 0, `${question.id} has no scored parts.`);
    check(Array.isArray(question.chapterIds) && question.chapterIds.length > 0, `${question.id} has no chapter mapping.`);
    if (exam.questionFormat !== "workbook") check(Number.isInteger(question.questionPage) && question.questionPage > 0, `${question.id} has an invalid question page.`);
    check(Array.isArray(question.solutionPages) && question.solutionPages.length > 0, `${question.id} has no solution pages.`);

    const partIds = new Set();
    const partTotal = (question.parts || []).reduce((total, part) => {
      check(!partIds.has(part.id), `${question.id} has duplicate part ID ${part.id}.`);
      partIds.add(part.id);
      check(typeof part.prompt === "string" && part.prompt.trim(), `${question.id}/${part.id} has no prompt.`);
      check(typeof part.solution === "string" && part.solution.trim(), `${question.id}/${part.id} has no solution.`);
      check(typeof part.insight === "string" && part.insight.trim(), `${question.id}/${part.id} has no examiner insight.`);
      check(Number.isFinite(part.points) && part.points > 0, `${question.id}/${part.id} has invalid points.`);
      return total + Number(part.points || 0);
    }, 0);
    check(Math.abs(partTotal - question.points) < 1e-9, `${question.id} totals ${question.points} points but its parts total ${partTotal}.`);

    for (const chapterId of question.chapterIds || []) {
      check(chapterIds.has(chapterId), `${question.id} references unknown chapter ${chapterId}.`);
    }

    const tables = question.sourceBlocks
      ? question.sourceBlocks.filter(block => block.type === "table")
      : question.tables || [];
    for (const [tableIndex, table] of tables.entries()) {
      check(Array.isArray(table.headers), `${question.id} table ${tableIndex + 1} has no headers.`);
      check(Array.isArray(table.rows), `${question.id} table ${tableIndex + 1} has no rows.`);
      for (const [rowIndex, row] of (table.rows || []).entries()) {
        check(row.length === table.headers.length, `${question.id} table ${tableIndex + 1}, row ${rowIndex + 1} has ${row.length} cells for ${table.headers.length} headers.`);
      }
      if (table.groups) {
        const spanTotal = table.groups.reduce((total, group) => total + group.span, 0);
        check(spanTotal === table.headers.length, `${question.id} table ${tableIndex + 1} group spans do not match its headers.`);
      }
    }

    if (question.figure) check(localFileExists(question.figure.src), `${question.id} references missing figure ${question.figure.src}.`);
  }
}

if (errors.length) {
  console.error(`Data validation failed with ${errors.length} error${errors.length === 1 ? "" : "s"}:`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(`Data validation passed: ${exams.length} exams, ${questionCount} questions, ${chapters.length} chapters.`);
}
