// Add Two Numbers
function add(x,y){
    let result= x + y;
    let multi= x * y;
   let newRes = result + multi;
    return newRes;
}

let AllResult = add(100,200)+ add(700,800)+ add(10,20);

console.log(AllResult);






// Multiply Two Numbers
function multiply(x,y){

if(typeof(x)!=="number "){

  return "1st number is not a number";

}
else if(typeof(y)!=="number"){
  return "2nd number is not a number";

}
else{
    return x * y;
}
}
console.log(multiply(10,20));
console.log(multiply("737","mohsin"));


//Covert Minutes to seconds
function minutesToSeconds(minutes){
    return minutes * 60;
}
console.log("Seconds are : "+minutesToSeconds(5));



//Concatenate Two Strings
function Concatenate(x,y){
return x + y;

}
console.log("Concatenated String is : "+Concatenate("Arafat ","Rifat"));




//Check if string contains a word 
function checkSTR(sentences){
return sentences.includes("word");


}
console.log(checkSTR("I love javascript","javascript"));







//Even or Odd Checker 
function isEven(num){
//if(num % 2 == 0){
    return "Even";


//}else{
   // return "Odd";
//}
return num % 2 == 0 ? "Even" : "Odd";

}
console.log(isEven(10));



//Celcius to Fahrenheit
function CelciusToFahrenheit(celcius){
  
   return (celcius * 9/5) + 32;
  
}
console.log("Answer is : "+CelciusToFahrenheit(100));




// Square of a Number
function squareNumber(num){
    return num * num;
}
console.log("Square number is : "+squareNumber(5));


// Get First Character of a String
function firstCharacter(str){
    return str.charAt(6);
}
console.log("Character is : "+firstCharacter("Hello World"));

//Number is Positive or Negative
function checkNum(num){

   // if(num > 0)
   // {
   //     return "Positive";
  //  }
   // else{
     //   return "Negative";
   // }
   switch(num > 0){
       case true:
           return "Positive";
       case false:
           return "Negative";
   }
   //return num > 0 ? "Positive" : "Negative";
}
console.log("Number is : "+checkNum(-10));
console.log("Number is : "+checkNum(1));