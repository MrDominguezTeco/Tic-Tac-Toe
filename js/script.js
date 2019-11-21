// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function() {
  let userchoice = $("#input").val();
  $("#userChoice").text(userchoice);
  let yourmove=userchoice.toLowerCase();
  // gets value from input making it lowercase and prints text 
  let num = Math.random() * 3;
  num = Math.ceil(num);
  // random number generator
  // rock=1
  // paper=2
  // scissors=3
  if (num === 1 & yourmove === "rock") {
    $("#computerChoice").text("Rock");
    $("#result").text("Draw");
  } else if (num === 1 & yourmove === "paper") {
    $("#computerChoice").text("Rock");
    $("#result").text("You Win!");
  } else if (num === 1 & yourmove === "scissors") {
    $("#computerChoice").text("Rock");
    $("#result").text("Computer Wins");
  } else if (num === 2 & yourmove === "rock") {
    $("#computerChoice").text("Paper");
    $("#result").text("Computer Wins");
  } else if (num === 2 & yourmove === "paper") {
    $("#computerChoice").text("Paper");
    $("#result").text("Draw");
  } else if (num === 2 & yourmove === "scissors") {
    $("#computerChoice").text("Paper");
    $("#result").text("You Win!");
  } else if (num === 3 & yourmove === "rock") {
    $("#computerChoice").text("Scissors");
    $("#result").text("You Win!");
  } else if (num === 3 & yourmove === "paper") {
    $("#computerChoice").text("Scissors");
    $("#result").text("Computer Wins");
  } else if (num === 3 & yourmove === "scissors") {
    $("#computerChoice").text("Scissors");
    $("#result").text("Draw");
  }else{
    $("#result").text("Ummm please choose rock, paper, or scissors. Caps don't but spelling does.");
  }
  // conditionals to print computers choice based on number 
  // and print winner loser or draw 
});
