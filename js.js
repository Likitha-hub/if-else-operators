// 1.  
const score = 85;

const grade = (score >= 90) ? 'A' :
              (score >= 80) ? 'B' :
              (score >= 70) ? 'C' :
              (score >= 60) ? 'D' : 'F';

console.log(`Your grade is: ${grade}`);


// 2.
const age = 48;

const isAdult = (age >= 18) ? 'You are an adult.' : 'You are not an adult.';
console.log(isAdult);

// // 3.
// // You have a variable day that contains the name of a day (e.g., "Monday", "Tuesday", etc.). 
// // Write an if-else statement to determine if the day is a weekend. The weekend is defined as either Saturday or Sunday.

var day=prompt("ENTER DAY")
if(day){
    if(day==("saturday"||"sunday")){
        console.log("it is weekend")
}else{
    console.log("it is not weekend")
}
}

// // 4.
// // You have a variable age representing a person's age and a boolean variable citizenship indicating whether
// //  they are a citizen (true for citizen, false for non-citizen). Write an if-else statement to check if the person is eligible to vote. 
// //  A person is eligible to vote if they are at least 18 years old and a citizen.
var Age=15;
var citizenship=true;
if(Age>=18 && citizenship){
console.log("you are eligible to vote")
}else{
    console.log("you are not eligible to vote")
}

// 5.
// You have a simple login form where users enter their username and password. 
// You want to check if the username is "admin" and the password is "12345". 
// The username can be entered in any case (e.g., "Admin", "ADMIN", "admin"), while the password must be checked strictly.
var username=prompt("enter username")
var password=prompt("enter password")

function checkLogin(username, password) {
    if (username.toLowerCase() === "admin" && password === "12345") {
    console.log("Login successful!");
    } else {
     console.log("Invalid username or password.");

    }
  }
  checkLogin(username,password)
  
