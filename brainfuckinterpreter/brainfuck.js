//First idea of an empty array isn't as convenient
//let brainNums=[];
function setUp(){
  let brainNums = new Array(256);
  for(let i=0;i<brainNums.length;i++){
    brainNums[i]=0;
  }
  let index=0;
  let program=prompt("Enter your brainfuck program!");
  interpret(index,program,brainNums);
}
function interpret(index,program,brainNums){
 console.log("This is the program: ",program);
  for(let i=0;i<program.length;i++){
    switch(program[i]){
      case ">":
        if(index===256){
          alert("Invalid brainfuck");
          return 1;
        }
        else{
          index=index+1;
        }
        console.log("This is the index: ",index);
        break;
      case "<":
        if(index===0){
          alert("Invalid brainfuck");
          return 1;
        }
        else{
          index=index-1;
        }
        console.log("This is the index: ",index);
        break;
      case "+":
        if(brainNums[index]===127){
          alert("Invalid brainfuck brainNums num");
          return 2;
        }
        else{
          brainNums[index]=brainNums[index]+1;
        }
        console.log("This is the brainNums: ",brainNums[index]);
        break;
      case "-":
        if(brainNums[index]===0){
          alert("Invalid brainfuck brainNums num");
          return 2;
        }
        else{
          brainNums[index]=brainNums[index]-1;
        }
        console.log("This is the brainNums: ",brainNums[index]);
        break;
      case ".":
        //String.fromCharCode()
        console.log("This is the output: ",String.fromCharCode(brainNums[index]));
        break;  
      case ",":
        //str.charCodeAt(index)
        brainNums[index]=prompt("Enter any character!").charCodeAt(0);
        break;
      //Clean up code before continuing on!
      //Add in loops '[' and ']'!
    }
  }
}
setUp();
