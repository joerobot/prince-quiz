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
