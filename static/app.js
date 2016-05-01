// Questions

var question1 = {
  question-text: "What is Prince's real name?",
  optionA: "Peter Ulversson",
  optionB: "Prince",
  optionC: "Prince Rogers Nelson",
  optionD: "Prince Nelson Rogers",
  correctAnswer: question1.optionC
}

var question2 = {
  question-text: "Finish these Prince lyrics: \"This is what it sounds like...\"",
  optionA: "When love dies",
  optionB: "When doves cry",
  optionC: "When doves lie",
  optionD: "When gloves dry",
  correctAnswer: question2.optionB
}

var question3 = {
  question-text: "On which album did the song 'Uptown' first appear?",
  optionA: "Sign 'O' The Times",
  optionB: "Purple Rain",
  optionC: "Lovesexy",
  optionD: "Dirty Mind",
  correctAnswer: question3.optionD
}

var question4 = {
  question-text: "Prince\'s most recent band was called...",
  optionA: "T1m3FUNK",
  optionB: "TH1rd 3yE g1rL",
  optionC: "P.U.R.P.L.E.",
  optionD: "pr1nc3",
  correctAnswer: question4.optionB
}

var question5 = {
  question-text: "Which of these is a Prince song?",
  optionA: "Dark Green Delorean",
  optionB: "Little Red Corvette",
  optionC: "Little Red Cadillac",
  optionD: "Mustang Sally",
  correctAnswer: question5.optionB
}

var question6 = {
  question-text: "Prince won a Golden Globe for Best Song for a Movie, but what animated film was the song for?",
  optionA: "Happy Feet",
  optionB: "Finding Nemo",
  optionC: "Antz",
  optionD: "Up",
  correctAnswer: question6.optionA
}

var question7 = {
  question-text: "What is the name of Prince\'s home and recording studio complex?",
  optionA: "Tartan Tower",
  optionB: "Check Castle",
  optionC: "Paisley Park",
  optionD: "Flannel Mansion",
  correctAnswer: question7.optionC
}

var question8 = {
  question-text: "Which of these songs were written by Prince?",
  optionA: "Manic Monday",
  optionB: "Time After Time",
  optionC: "Ghostbusters",
  optionD: "With or Without You",
  correctAnswer: question8.optionA
}







$(document).ready(function(){

  $('.entry').click(function(){
    $('.entry').fadeOut(1000);
    $('.quiz-body').delay(1000).fadeIn(1000);
  })

  $('body').on('click', '.confirm', function(){
    $('.question').fadeOut(600);
    $('.answers').fadeOut(600);
    $('.gif-cont').delay(600).fadeIn(100);
    $('#q1').css('background-color', '#36954F');
    $('.qa-head').text('Correct!');
  })




})
