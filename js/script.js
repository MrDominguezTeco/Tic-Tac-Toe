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
  let opp=""
  // assigning empty variable to be filled later
  if(num===1){
    let opp="rock";
     }
  else if(num===2){
    let opp="paper";
     }
  else if(num===3){
    let opp="scissors";
     }
  // assigning names to numbers / filling in variable 
  if( opp==="rock"||userchoice==="" ){
     
     }
});
