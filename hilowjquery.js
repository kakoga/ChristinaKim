$(document).ready(function() {
  $("button").click(function(){

      var rand = Math.floor((Math.random() * 10) + 1);
      $("numberToGuess").append(rand);
      var userGuess = $("#questionTextBox").val();
      alert(userGuess);

    //Conditional to see if user entered a number or if the number is too high or low
    if (userGuess < rand){
      alert("Too Low");
    }
    else if (userGuess > rand) {
      alert("Too High");
    }
      alert("You WIN!");
    })
  });
