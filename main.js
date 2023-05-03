// Arithmetic Operators on numbers: Problem 1:

let x = 5;
x += 2;
console.log(x);

x -= 6;
console.log(x)

x *= 30;
console.log(x);

x /= 2;
console.log(x);

x %= 5;
console.log(x);

x **= 3;
console.log(x);

//Problem 2: assignment operators 

let y = 5;
y = y + 2;
console.log(y);

y = y - 6;
console.log(y);

y = y * 30;
console.log(y);

y = y / 2;
console.log(y);

y = y % 5;
console.log(y);

y = y ** 3;
console.log(y);



// Problem 3:


console.log(0.1 + 0.2 === 0.3);

console.log(true === "true");

console.log(1 + 7);
console.log(1 + 7 === 8);

console.log(10 ** 5);
console.log(9 ** 6);
console.log(10 ** 5 > 9 ** 6);

console.log(17 / 6);
console.log(17 / 6 <= 4);


// Problem 4:

let name = prompt("Please enter your name:");
let age = prompt("Please enter your age:");
let price = 35;

if (age < 18) {
   console.log("Hello, " + name + " Your price is free.");
   price = 0;
} else if (name === "James" && age === "25") {
   console.log("Hello, " + name + " Your price is $" + price * 0.80 + ".");
} else {
   console.log("Hello, " + name + " Your price is $" + price + ".");
}

