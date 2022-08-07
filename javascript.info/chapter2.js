"use strict";
// Consts and vars decleration
const OUR_PLANET = "earth";
let isGreater = 4 > 1;
let name = "john";

// prompt, confirm and alert
/* 
let visitor = prompt("Enter your name: ", "Itay");
let isBoss = confirm(`${visitor}, are you the boss?`);
alert(isBoss); 
*/

// Conversion between data types
/* 
alert(Number("Hello")); // NaN
alert(Boolean("0")); alert(Boolean(" ")); // true
alert(Boolean(0)); alert(Boolean("")); // false 
*/

// Operands and Operators
/*
alert(typeof ('1' + 3));
alert(+true);
alert(+"");
let num1 = +prompt("First number?", 1); //changes to number
let num2 = +prompt("Second number?", 2); //changes to number
alert(num1 + num2); // 12
*/

// Increments
/*
let a = 1, b = 1;
let c = ++a; // 2
let d = b++; // 1;
*/

// Comparisons
/*
console.log( 0 == false ); // true
console.log( 0 === false ); // false
console.log( "Lior" > "Aharon" ); //true
console.log(null == undefined) //true
*/

// Logical Operators
/*
alert( 1 || 0 ); // 1 (1 is truthy)
alert( null || 2 ); // 1 (1 is the first truthy value)
alert( undefined || "" || 0 ); // 0 (all falsy, returns the last value)

true || alert("not printed"); // won't be printed
false || alert("printed"); // will be printed

alert( 1 && 0 ); // 0 is falsy
alert( "" && "no matter what" ); // "" is the first falsy
alert( 1 && 5 ); // 5 (no falsy - last value returned)

true && alert("will be printed");

alert(!true); // false
alert(!!"Non empty string"); //convert to boolean - true
alert(!!""); //convert to boolean - false
*/
let user = "John";
alert(user ?? "Anonymous"); // John (user defined)
let user2;
alert(user2 ?? "Anonymous"); // Anonymous (user not defined)

let height = 0;
alert(height || 100); // 100 (0 is falsy)
alert(height ?? 100); // 0 (0 is not undefined ot null)