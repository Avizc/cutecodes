/* FizzBuzz uses my favourite 
   arithmetic operator: modulo/modulus!
   Essentially need to return "fizz" for i%3, 
   "buzz" for i%5, "fizzbuzz" for i%3&&i%5. */
var fizz = 3;
var buzz = 5;
var fizzbuzz = 15;
// VARIATION ONE //
/* First fizzbuzz I'm going to just use only 
   fizz and buzz and use the && operator
   to solve it. */
function fizzBuzz(countTo) {
  var playedGame = [];
  for (var i=1; i<=countTo; i++){
    if(i%fizz===0&&i%buzz===0){
      playedGame.push("fizzbuzz");
    }
    else if(i%buzz===0){
      playedGame.push("buzz");
    }
    else if(i%fizz===0){
      playedGame.push("fizz");
    }
    else{
      playedGame.push(i);
    }
  }
  return playedGame;
}
// VARIATION TWO //
/* This one is just setting each 3, 5, and 15
   together. I don't like this one as much
   because its one more int when the game
   only specifies 3 and 5. */
function fizzBuzzV2(countTo) {
  var playedGame = [];
  for (var i=1; i<=countTo; i++){
    if(i%fizzbuzz===0){
      playedGame.push("fizzbuzz");
    }
    else if(i%buzz===0){
      playedGame.push("buzz");
    }
    else if(i%fizz===0){
      playedGame.push("fizz");
    }
    else{
      playedGame.push(i);
    }
  }
  return playedGame;
}
/* Made the following function
   playFizzBuzz to see if my
   solutions work! */
function playFizzBuzz(){
  var num = 19;
  console.log(fizzBuzz(num), fizzBuzzV2(num));
}
playFizzBuzz(); // Working!
