// TODO: Improve UI


// Variables

var questionCount,
    currentAnswer,
    correctAnswer,
    totalCorrect;


// Functions

// Reset Variables & Counter
var reset = function() {
    questionCount = 0;
    currentAnswer = 0;
    correctAnswer = 0;
    totalCorrect = 0;
    $('.counter').removeClass('correct').removeClass('incorrect');
}

// Load the currentQ into the answers
var putQuestion = function(currentQ) {
    $('#q-text').text(currentQ.questionText);
    $('#A').text(currentQ.optionA);
    $('#B').text(currentQ.optionB);
    $('#C').text(currentQ.optionC);
    $('#D').text(currentQ.optionD);
    currentQ.newCorrect();
};

// Initialises the game
var startGame = function() {
    reset();
    $('.entry').fadeOut(1000);
    $('.question').show();
    $('.answers').show();
    questionMarker();
    putQuestion(questionBank[questionCount]);
    $('.qa-head').text('Question ' + (questionCount + 1));
    $('.quiz-body').delay(1000).fadeIn(1000);
};

// Highlights current question number
var questionMarker = function() {
    $('#q' + (questionCount + 1)).addClass('current');
};

// Check an answer is correct and display result
var checkAnswer = function() {
    if ($('.option').hasClass('picked')) {

        $('.question').fadeOut(600);
        $('.answers').fadeOut(600);
        $('.option').removeClass('picked');
        $('#gif').delay(600).fadeIn(100);

        if (currentAnswer == correctAnswer) {
            totalCorrect++;
            $('#q' + (questionCount + 1)).removeClass('current').addClass('correct');
            $('.qa-head').text('Correct!');
            $('#gif').addClass('pos' + randomBg());

        } else {
            $('#q' + (questionCount + 1)).removeClass('current').addClass('incorrect');
            $('.qa-head').text('Incorrect!');
            $('#gif').addClass('neg' + randomBg());
        };
    }
}

// Generate a random number 1-4
var randomBg = function() {
    return Math.floor(Math.random() * (4 - 1 + 1)) + 1;
}

// Advance Question
var advance = function() {
    $('#gif').removeClass().hide();

    if (questionCount < (questionBank.length - 1)) {
        questionCount++;
        questionMarker();
        putQuestion(questionBank[questionCount]);
        $('.qa-head').text('Question ' + (questionCount + 1));
        $('.question').fadeIn(200);
        $('.answers').fadeIn(200);
    } else {
        // Show completed screen
        $('.qa-head').text("");
        $('.score').text(totalCorrect).show();
        $('.completed').show();
        $('.tryagain').show();
    }
};

// Page Load
$(document).ready(function() {

    // Start Game on Click
    $('.entry').click(function() {
        startGame();
    });

    // Select an Answer
    $('body').on('click', '.option', function() {
        $('.option').removeClass('picked');
        $(this).addClass('picked');
    });

    // Submit Answer
    $('body').on('click', '.confirm', function() {
        currentAnswer = $('.picked').attr('id');
        checkAnswer();
    });

    // Next Question
    $('body').on('click', '#gif', function() {
        advance();
    });

    // New game
    $('body').on('click', '.tryagain', function() {
        $('.score').hide();
        $('.completed').hide();
        $('.tryagain').hide();
        startGame();
    });

});


// Questions

var question1 = {
    questionText: "What is Prince's real name?",
    optionA: "Peter Ulversson",
    optionB: "Prince",
    optionC: "Prince Rogers Nelson",
    optionD: "Prince Nelson Rogers",
    newCorrect: function() {
        correctAnswer = "C";
    };
};

var question2 = {
    questionText: "Finish these Prince lyrics: \"This is what it sounds like...\"",
    optionA: "When love dies",
    optionB: "When doves cry",
    optionC: "When doves lie",
    optionD: "When gloves dry",
    newCorrect: function() {
        correctAnswer = "B";
    };
};

var question3 = {
    questionText: "On which album did the song 'Uptown' first appear?",
    optionA: "Sign 'O' The Times",
    optionB: "Purple Rain",
    optionC: "Lovesexy",
    optionD: "Dirty Mind",
    newCorrect: function() {
        correctAnswer = "D";
    };
};

var question4 = {
    questionText: "Prince\'s most recent band was called...",
    optionA: "T1m3FUNK",
    optionB: "TH1rd 3yE g1rL",
    optionC: "P.U.R.P.L.E.",
    optionD: "pr1nc3",
    newCorrect: function() {
        correctAnswer = "B";
    };
};

var question5 = {
    questionText: "Which of these is a Prince song?",
    optionA: "Dark Green Delorean",
    optionB: "Little Red Corvette",
    optionC: "Little Red Cadillac",
    optionD: "Mustang Sally",
    newCorrect: function() {
        correctAnswer = "B";
    };
};

var question6 = {
    questionText: "Prince won a Golden Globe for Best Song for a Movie, but what animated film was the song for?",
    optionA: "Happy Feet",
    optionB: "Finding Nemo",
    optionC: "Antz",
    optionD: "Up",
    newCorrect: function() {
        correctAnswer = "A";
    };
};

var question7 = {
    questionText: "What is the name of Prince\'s home and recording studio complex?",
    optionA: "Tartan Tower",
    optionB: "Check Castle",
    optionC: "Paisley Park",
    optionD: "Flannel Mansion",
    newCorrect: function() {
        correctAnswer = "C";
    };
};

var question8 = {
    questionText: "Which of these songs were written by Prince?",
    optionA: "Manic Monday",
    optionB: "Time After Time",
    optionC: "Ghostbusters",
    optionD: "With or Without You",
    newCorrect: function() {
        correctAnswer = "A";
    };
};

var questionBank = [question1, question2, question3, question4, question5, question6, question7, question8];
