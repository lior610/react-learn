/*
// local variables
function showMessage() {
    let message = "Hello, I'm JS!"; //Inner
    alert(message);
}
showMessage();
alert(message); //Error

// outer variables
let userName = 'John';

function showMessage() {
    userName = 'Bob';
  let message = 'Hello, ' + userName;
  alert(message);
}
alert(userName); // John
showMessage(); // Hello, Bob
alert(userName); // Bob


// Parameters and Default text
function showMessage(from, text = "no text given") { // Default text
    alert( from + ": " + text );
  }
  
  showMessage("Ann"); // Ann: no text given

// returning some value
let age = 20;
function checkAge(age) {
    if (age > 18) {
      return true;
    }
    // ...
    return confirm('Did parents allow you?');
}
alert(checkAge(age));
*/
let age = 18;
function checkAge(age) {
    // return (age > 18) ? true : confirm('Did parents allow you?');
    return (age > 18) || confirm('Did parents allow you?')
}
checkAge(age);

function min(a, b) {
    return ((a > b) ? b :
}