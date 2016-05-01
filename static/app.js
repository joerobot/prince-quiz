// TODO: "Click Prince to continue" advances question count, hide gif, load question body



// Variables

var questionCount = 1;
var currentAnswer = 0;
var correctAnswer = 0;



// Functions

// Load the currentQ into the answers
var putQuestion = function(currentQ){
  $('#q-text').text(currentQ.questionText);
  $('#a1').text(currentQ.optionA);
  $('#a2').text(currentQ.optionB);
  $('#a3').text(currentQ.optionC);
  $('#a4').text(currentQ.optionD);
}

// Initialises the game
var startGame = function(){
  $('.entry').click(function(){
    $('.entry').fadeOut(1000);
    $('.quiz-body').delay(1000).fadeIn(1000);
    questionMarker();
  })
};

// Highlights current question number
var questionMarker = function(){
  $('#q' + questionCount).addClass('current');
};

// Check an answer is correct and display result
var checkAnswer = function(){
  if($('.option').hasClass('picked')){

    $('.question').fadeOut(600);
    $('.answers').fadeOut(600);
    $('.option').removeClass('picked');
    $('#gif').delay(600).fadeIn(100);

    if(currentAnswer == correctAnswer){
      console.log('correct');
      $('#q' + questionCount).removeClass('current').addClass('correct');
      $('.qa-head').text('Correct!');
      $('#gif').addClass('pos' + randomBg());

    }
    else {
      console.log('incorrect');
      $('#q' + questionCount).removeClass('current').addClass('incorrect');
      $('.qa-head').text('Incorrect!');
      $('#gif').addClass('neg' + randomBg());
    };
  }
}

// Generate a random number 1-4
var randomBg = function(){
  return Math.floor(Math.random() * (4 - 1 + 1)) + 1;
}

// Advance Question
var advance = function(){
  $('#gif').removeClass().hide();
  questionCount++;
  questionMarker();
  $('.question').fadeIn(200);
  $('.answers').fadeIn(200);
};

$(document).ready(function(){

  startGame();

// Submit Answer
  $('body').on('click', '.confirm', function(){
    checkAnswer();
  })

  $('body').on('click', '.option', function(){
    $('.option').removeClass('picked');
    $(this).addClass('picked');
  });

  $('body').on('click', '#gif', function(){
    advance();
  })

})


// Questions

var question1 = {
  questionText: "What is Prince's real name?",
  optionA: "Peter Ulversson",
  optionB: "Prince",
  optionC: "Prince Rogers Nelson",
  optionD: "Prince Nelson Rogers",
  correctAnswer: this.optionC
}

var question2 = {
  questionText: "Finish these Prince lyrics: \"This is what it sounds like...\"",
  optionA: "When love dies",
  optionB: "When doves cry",
  optionC: "When doves lie",
  optionD: "When gloves dry",
  correctAnswer: this.optionB
}

var question3 = {
  questionText: "On which album did the song 'Uptown' first appear?",
  optionA: "Sign 'O' The Times",
  optionB: "Purple Rain",
  optionC: "Lovesexy",
  optionD: "Dirty Mind",
  correctAnswer: this.optionD
}

var question4 = {
  questionText: "Prince\'s most recent band was called...",
  optionA: "T1m3FUNK",
  optionB: "TH1rd 3yE g1rL",
  optionC: "P.U.R.P.L.E.",
  optionD: "pr1nc3",
  correctAnswer: this.optionB
}

var question5 = {
  questionText: "Which of these is a Prince song?",
  optionA: "Dark Green Delorean",
  optionB: "Little Red Corvette",
  optionC: "Little Red Cadillac",
  optionD: "Mustang Sally",
  correctAnswer: this.optionB
}

var question6 = {
  questionText: "Prince won a Golden Globe for Best Song for a Movie, but what animated film was the song for?",
  optionA: "Happy Feet",
  optionB: "Finding Nemo",
  optionC: "Antz",
  optionD: "Up",
  correctAnswer: this.optionA
}

var question7 = {
  questionText: "What is the name of Prince\'s home and recording studio complex?",
  optionA: "Tartan Tower",
  optionB: "Check Castle",
  optionC: "Paisley Park",
  optionD: "Flannel Mansion",
  correctAnswer: this.optionC
}

var question8 = {
  questionText: "Which of these songs were written by Prince?",
  optionA: "Manic Monday",
  optionB: "Time After Time",
  optionC: "Ghostbusters",
  optionD: "With or Without You",
  correctAnswer: this.optionA
}
