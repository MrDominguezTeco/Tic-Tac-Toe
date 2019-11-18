// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function() {
  let userchoice = $("#input").val();
  $("#userChoice").text(userchoice);
  // gets value from input and prints text
  let num = Math.random() * 3;
  num = Math.ceil(num);
  console.log(num);
  // random number generator
  // rock=1
  // paper=2
  // scissors=3
  if (num === 1 || userchoice === "rock") {
    $("#computerChoice").text("Rock");
    $("#result").text("Draw");
  } else if (num === 1 || userchoice === "paper") {
    $("#computerChoice").text("Rock");
    $("#result").text("You Win!");
  } else if (num === 1 || userchoice === "scissors") {
    $("#computerChoice").text("Rock");
    $("#result").text("Computer Wins");
  } else if (num === 2 || userchoice === "rock") {
    $("#computerChoice").text("Paper");
    $("#result").text("Computer Wins");
  } else if (num === 2 || userchoice === "paper") {
    $("#computerChoice").text("Paper");
    $("#result").text("Draw");
  } else if (num === 2 || userchoice === "scissors") {
    $("#computerChoice").text("Paper");
    $("#result").text("You Win!");
  } else if (num === 3 || userchoice === "rock") {
    $("#computerChoice").text("Scissors");
    $("#result").text("You Win!");
  } else if (num === 3 || userchoice === "paper") {
    $("#computerChoice").text("Scissors");
    $("#result").text("Computer Wins");
  } else if (num === 3 || userchoice === "scissors") {
    $("#computerChoice").text("Scissors");
    $("#result").text("Draw");
  }
  // assigning names to numbers / filling in variable
  // if( opp==="rock"||userchoice==="" ){

  // }
  console.log(userchoice);
  console.log(num);
});
