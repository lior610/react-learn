// while loop
/*
let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}

let i = 3;
while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
  alert( i );
  i--;
}

// do-while - will run at least once
let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);

// for-loop
for (let i = 0; i < 3; i++) { // i exists only in the loop
    alert(i); // 0, 1, 2
} 

let i = 0; // i exist all the way

for (; i < 3;) { //shorten version
  alert( i++ );
}

// break
let sum = 0;

while (true) {
  let value = +prompt("Enter a number", '');
  if (!value) break; // (*)
  sum += value;
}
alert( 'Sum: ' + sum );

// continue
for (let i = 0; i < 10; i++) {
    // if true, skip the remaining part of the body
    if (i % 2 == 0) continue;
    alert(i); // 1, then 3, 5, 7, 9
}
//outer
outer:
for (let i  = 0; i < 3; i++){
    for (let j = 0; j < 3; j++){
        let input = prompt("Enter number", "");
        if(!input) break outer;
    }
}
alert("done");
for(let i = 2; i < 11; i+=2 ){
    alert(i);
}
let i = 0;
while(i < 3){
    alert(`number ${i}`);
    i++;
}

let number = +prompt("Enter number larger then 100", 100)
while (number <= 100 && number != 0) {
    number = prompt("Enter number larger then 100")
}
alert("done"); 
// prime numbers
let n = prompt("Enter number: ", 10);
for (let i = 2; i <= n; i++){
    let j;
    for (j = 2; j < i; j++){
        if(i % j == 0) break;
    }
    if (j == i) alert(i);
}
// another option
let n = prompt("Enter number: ", 10);
nextPrime:
for (let i = 2; i <= n; i++){
    for (let j = 2; j < i; j++){
        if(i % j == 0) continue nextPrime;
    }
    alert(i);
}*/