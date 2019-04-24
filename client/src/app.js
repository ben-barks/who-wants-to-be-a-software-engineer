const QuizLooper = require('./models/quiz_looper.js');
// const QuestionGenerator = require('./models/question_generator.js');
const QuestionFetcher = require('./models/question_fetcher.js');
const QuizView = require('./views/quiz_view.js');
const QuizSelectView = require('./views/quiz_select_view.js');
const ResultView = require('./views/result_view.js');
const FinalResults = require('./models/final_results.js');
const FinalResultView = require('./views/final_result_view.js');
const GridView = require('./views/grid_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const quizSelectViewElement = document.querySelector('nav.circle-menu');
  const quizSelectView = new QuizSelectView(quizSelectViewElement);
  quizSelectView.bindEvents();

  // const quizViewElement = document.querySelector('div.quiz-wrapper');
  // const quizView = new QuizView(quizViewElement);
  // quizView.bindEvents();

  const resultViewContainer = document.querySelector('div.checkAnswers');
  const resultView = new ResultView(resultViewContainer);
  resultView.bindEvents();

  const questionFetcher = new QuestionFetcher();
  questionFetcher.getData();
  questionFetcher.bindEvents();

  const gridViewElement = document.querySelector('.quiz-wrapper');
  const gridView = new GridView(gridViewElement)
  gridView.bindEvents();

  const quizLooper = new QuizLooper();
  quizLooper.bindEvents();

  const finalResults = new FinalResults();
  finalResults.bindEvents();

  const finalResultView = new FinalResultView();
  finalResultView.bindEvents();

  // const questionGenerator = new QuestionGenerator();
  // questionGenerator.bindEvents();

});
