
let sum = 0;

while (true) {

let value = +prompt("Enter a number", '');

if (!value) break; // (*)

sum += value;

}
alert( 'Sum: ' + sum );