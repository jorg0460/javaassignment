'use strict';

//assignemnt 1
/*
let numOfDaysUntilWeekend = 2;
numOfDaysUntilWeekend -= 1;

1. Use console.log() to log the value just after the variable has been declared
2.  Use console.log() to log the value right after the value of the variable has been changed. 
3. Tell what it does 
*/

let numOfDaysUntilWeekend = 2;
console.log(numOfDaysUntilWeekend);
numOfDaysUntilWeekend-= 1;
console.log(numOfDaysUntilWeekend);
//The result is 1

//assignemnt 2
//Addition to numbers

let x = 3;
x+=7;
console.log(x);
//The result is 10

//assignemnt 3
//Subtraction to numbers

let x = 3;
x-=1;
console.log(x);
//The result is 2

//assignemnt 4
//write two sentences in two variables and connect them together 

let x = "I'm Hungry ";
x+= "Give me a donut";
console.log(x);
// The result was "I'm Hungry Give me a donut"

//assignemnt 5
//write two variables, one number and one string. add them together

let x = " Guys";
var a = 5;
console.log("The retaurant " + (a+x));
//The result was "The restaurant 5 Guys"

//assignemnt 6
//write the answears in the in a comment
let r = 15;
let s = 5;
let t = r + s;
//20
let u = r - s;
//10
let v = t / u;
//2
let x = r * v;
//30
let y = s % v;
//1


//assignemnt 7
//Why does it not write out? 
let r = 34;
let c = 1;
let x = r - 32 + c;
let y = r++ * 4; 
if(x == 30 || y == 2 ){
 console.log("yeah you got it");
}
//change a number in a variable, so it print out the text

//Doesn't work because none of the results match since x==3 and not 30 and y==136 and not 2. r needs to be 61.

//assignemnt 8
//make two vaiables. One variable must contain a number and the other one must contain a prompt, 
//where the user can enter a number. Match the two number and print out the answear
//TIP: search prompt

let x = 5;
let y = prompt("Enter a number");
(z = x + y);
console.log(z);

//assignment 9
//write these numbers in the console and write the output. Explain you thing this happens
    0.1 + 0.2;
    //The awnser is 0.30000000000000004
    0.1 + 0.2 === 0.3;
    //The awnser is false
    3  - 1
    // the awnser is 2
    3  + 1
    //The awnser is 4
    '3' - 1 
    //The awnser is 2
    '3' + 1 
    //The awnser is 31
    '222' - -'111'
    //The awnser is 333

//assignemnt 10
//Write a JavaScript program to determine whether a given year is a leap year 

let x = prompt("Enter a year");
if (x%4 == 0){
    console.log("This is a leap year");
} 
else{
    console.log("This is not a leap year");
}