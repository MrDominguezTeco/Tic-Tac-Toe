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
    $("#rock").show();
    $("#rock2").show();
    $("#result").text("Draw");
  } else if (num === 1 & yourmove === "paper") {
    $("#computerChoice").text("Rock");
    $("#paper").show();
    $("#rock2").show();
    $("#result").text("You Win!");
  } else if (num === 1 & yourmove === "scissors") {
    $("#computerChoice").text("Rock");
    $("#scissors").show();
    $("#rock2").show();
    $("#result").text("Computer Wins");
  } else if (num === 2 & yourmove === "rock") {
    $("#computerChoice").text("Paper");
    $("#rock").show();
    $("#paper2").show();
    $("#result").text("Computer Wins");
  } else if (num === 2 & yourmove === "paper") {
    $("#computerChoice").text("Paper");
    $("#paper").show();
    $("#paper2").show();
    $("#result").text("Draw");
  } else if (num === 2 & yourmove === "scissors") {
    $("#computerChoice").text("Paper");
    $("#scissors").show();
    $("#paper2").show();
    $("#result").text("You Win!");
  } else if (num === 3 & yourmove === "rock") {
    $("#computerChoice").text("Scissors");
    $("#rock").show();
    $("#scissors2").show();
    $("#result").text("You Win!");
  } else if (num === 3 & yourmove === "paper") {
    $("#computerChoice").text("Scissors");
    $("#paper").show();
    $("#scissors2").show();
    $("#result").text("Computer Wins");
  } else if (num === 3 & yourmove === "scissors") {
    $("#computerChoice").text("Scissors");
    $("#scissors").show();
    $("#scissors2").show();
    $("#result").text("Draw");
  }else{
    $("#result").text("Ummm please choose rock, paper, or scissors. Caps don't but spelling does.");
  }
  // conditionals to print computers choice/mychoice based on number 
  // and print winner, loser, or draw 
});
