/* This should take in whatever small prime
   and whatever bigger prime number you want
   and return the primes in-between. */
var smallPrime=638489;
var bigPrime=697399;
function primeNumbers(countTo){
  for(var i=smallPrime; i<countTo; i++){
    if(countTo%i===0){
      return false;
    }
  }
  return true;
}
function smallToBigNumPrimeTest(bigNum){
  var primeList = [smallPrime];
  for(var i=smallPrime;i<bigNum;i+=2){
    if(primeNumbers(i)){
      primeList.push(i);
    }
  }
  console.log(primeList);
}
smallToBigNumPrimeTest(bigPrime);
