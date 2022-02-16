/*
    Assignment 1
    There is some errors in the codepen example from the lesson
    Copy the code from: https://codepen.io/dominoeffekten/pen/abVJGEr inside a HTML, CSS and JS file
    When the time is 20-22 the output should be: snacktime
*/

let textHolder = document.querySelector("p"); //get the element

let hour = new Date().getHours(); //get hour

if (hour >= 8 && hour <= 11) { 
  textHolder.innerHTML = "Good morning!";
} else if (hour > 11 && hour < 13 ) { 
  textHolder.innerHTML = "It is lunch time";
} else if (hour == 17) { 
  textHolder.innerHTML = "Good afternoon";
} else if (hour >= 18 && hour <= 19) { 
  textHolder.innerHTML = "It is dinner time";
} else if (hour >= 20  && hour <= 22) { 
  textHolder.innerHTML = "Snack time!"; 
} else {
  textHolder.innerHTML = "Goodnight";
}

/*
    Assignment 2 - follow up from assignment 1
    Copy the code from: https://codepen.io/dominoeffekten/pen/abVJGEr inside a HTML, CSS and JS file
    Change the time, so it fits your day. It could be:
    8-14: School
    11: Lunch
    and so on..
*/

let textHolder = document.querySelector("p"); //get the element

let hour = new Date().getHours(); //get hour

if (hour >= 6 && hour <= 8) { 
  textHolder.innerHTML = "Good morning!";
} else if (hour > 8 && hour < 11 ) { 
  textHolder.innerHTML = "Class Time!";
} else if (hour >= 11 && hour <12 ) { 
  textHolder.innerHTML = "Lunch Time!";
} else if (hour >= 12 && hour < 14) { 
  textHolder.innerHTML = "Last class!";
} else if (hour >= 14 && hour < 20) {
  textHolder.innerHTML = "Relax and enjoy your time!";
} else if (hour = 20 && hour < 21) {
  textHolder.innerHTML = "Time to cook dinner!";
} else if (hour >= 21 && hour < 23) {
  textHolder.innerHTML = "I heard movies are great around this time!";
} else {
  textHolder.innerHTML = "Goodnight";
}


/*
    Assignment 3
    write a program where the user can write 2 numbers and display the larger one
*/

let x = prompt("Insert a number");
let y = prompt("Insert a number");

let textHolder = document.querySelector("#pepe");

if (x>y) {
    textHolder.innerHTML = x + " is bigger than " + y;
} else if (x<y) {
    textHolder.innerHTML = y + " is bigger than " + x;
} else {
    textHolder.innerHTML = "These numbers are the same"
}

/*  
    Assignment 4
    make a variable with 3 numbers and sort them with help of JS conditions
*/
let x = prompt("Insert a number");
let y = prompt("Insert a number");
let z = prompt("Insert a number");

let textHolder = document.querySelector("#pepe");

if (x>y && y>z) {
  textHolder.innerHTML = x + ">" + y + ">" + z;
} else if (y>x && x>z){
  textHolder.innerHTML = y + ">" + x + ">" + z;
} else if (z>x && x>y){
  textHolder.innerHTML = z + ">" + x + ">" + y;
} else if (z>y && y>x){
  textHolder.innerHTML = z + ">" + y + ">" + x;
} else if (x>z && z>y){
  textHolder.innerHTML = x + ">" + z + ">" + y;
} else if (y>z && z>x){
  textHolder.innerHTML = y + ">" + z + ">" + x;
} else {
  textHolder.innerHTML = "Error!";
}  