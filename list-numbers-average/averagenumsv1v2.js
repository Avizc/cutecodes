/* Without doing a for-loop in the first version of my 
   solution though it did call for one hence the
   second function and solution. */
// VARIATION 1 //
function average(nums) {
  var arrayLength = nums.length;
  var addedNums = nums.reduce(function(a,b){
    return a+b;
  });
  var averagedNums = addedNums/arrayLength;
  return averagedNums;
}
// VARIATION 2 //
function averageV2(nums){
  var arrayLengthV2 = nums.length;
  var addedNumsV2 = nums[0];
  for (i=1; i<nums.length; i++){
    addedNumsV2+=nums[i];
  }
  var averagedNumsV2 = addedNumsV2/arrayLengthV2;
  return averagedNumsV2;
}
/* Made the following function
   averagedNumbersTest to see if
   my solutions work! */
// TEST FOR VARIATION 1 and 2 //
function averagedNumbersTest(){
  var numList = [2,3,5,7,11,13,17,19,23];
  console.log(average(numList), averageV2(numList));
}
averagedNumbersTest(); // It works!
