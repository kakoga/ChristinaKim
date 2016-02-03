$(document).ready(function() {
  var answerArray = ["May not be warranted at this point!","Just because you've always done it that way doesn't mean it's not incredibly stupid.", "Maybe", "Hard work often pays off after time, but laziness always pays off now.", "The journey of a thousand miles sometimes ends very, very badly.", "None of us is as dumb as all of us.","I Guess so?"];

  function answer(){
    var num = Math.floor(Math.random()*answerArray.length);
    $("#eightBallAnswer").append(answerArray[num]);
  };


  $("button").click(function()
  {
    var bla = $("#userQuestion").append($('#questionTextBox').val());
    answer();
    $('#questionTextBox').val('');
  });




});
