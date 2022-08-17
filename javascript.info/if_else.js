//if, else
/*
let year = prompt("What year was I born?", 2000);
if (year < 2000) {
    alert("Too Early");
} else if (year > 2000) {
    alert("Too Late");
} else {
    alert("You the best!")
}

let age = prompt("How old are you", 18);
let allowAccess = (age > 18) ? "let him in": 
    (age < 18)? "get him out" : 
    "Congrats";
alert(allowAccess)

let officialName = prompt("Enter the official name of JS", "js");
if (officialName == "ECMAScript") {
    alert("Great")
} else {
    alert("You're wrong")
}


let number = +prompt("Enter Number", 0)
let result = (number > 0) ? 1:
    (number < 0)? -1:
    0;
alert(result)

let login = "Hello";
let message = (login == "Employee") ? 'Hello':
    (login == "Director") ? 'Greetings' :
    (login == "") ? 'No Login' :
    "";
alert(message);


// From Logical Operators
let age = 20;
if (age >= 14 && age <= 90 ) {
    alert("age is good");
}
*/

let username = prompt("Enter your username", "");
if (username === "admin") {
    let password = prompt("Enter your password", "");
    if (password === "TheMaster") {
        alert("Welcome!")
    } else if (password === "" || password === null) {
        alert("Canceled");
    } else {
        alert("Worng Password");
    }
} else if (username === "" || username === null) {
    alert("Canceled");
} else {
    alert("I don't know you.");
}