// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function(){
  let userchoice=$("#input").val();
  // gets value from input
  let num = Math.random()*3;
  num = Math.ceil(num);
  console.log(num);
  // random number generator
  // rock=1
  // paper=2
  // scissors=3
  if(num===1||userchoice==="rock"){
    $("#userChoice").text("Rock");
    $("#computerChoice").text("Rock");
    $("#result").text("Draw");
     }
  else if(num===1||userchoice==="paper"){
    $("#userChoice").text("Paper");
    $("#computerChoice").text("Rock");
    $("#result").text("You Win!");
     }
  else if(num===1||userchoice==="scissors"){
    $("#userChoice").text("Scissors");
    $("#computerChoice").text("Rock");
    $("#result").text("Computer Wins");
     }
  else if(num===2||userchoice==="rock"){
    $("#userChoice").text("Rock");
    $("#computerChoice").text("Paper");
    $("#result").text("Computer Wins");
     }
  else if(num===2||userchoice==="paper"){
    $("#userChoice").text("Paper");
    $("#computerChoice").text("Paper");
    $("#result").text("Draw");
     }
  else if(num===2||userchoice==="scissors"){
    $("#userChoice").text("Scissors");
    $("#computerChoice").text("Paper");
    $("#result").text("You Win!");
     }
  else if(num===3||userchoice==="rock"){
    $("#userChoice").text("Rock");
    $("#computerChoice").text("Scissors");
    $("#result").text("You Win!");
     }
  else if(num===3||userchoice==="paper"){
    $("#userChoice").text("Paper");
    $("#computerChoice").text("Scissors");
    $("#result").text("Computer Wins");
     }
  else if(num===3||userchoice==="scissors"){
    $("#userChoice").text("Scissors");
    $("#computerChoice").text("Scissors");
    $("#result").text("Draw");
     }
  // assigning names to numbers / filling in variable 
  // if( opp==="rock"||userchoice==="" ){
     
     // }
});
