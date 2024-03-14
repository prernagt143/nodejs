// "use strict"
// const ps=require("prompt-sync");
// const prompt=ps({sigint: true});

// let name=prompt("enter name:");
// console.log(`hello ${name}`);

// 
// Example using prompt-sync
// const prompt = require('prompt-sync')();
// const userInput = prompt('Enter something: ');
// console.log(`You entered: ${userInput}`);


//using readline sync

// let rlSync = require('readline-sync');
// let name = rlSync.question("What's your name?\n");
// console.log(`Good Morning, ${name}!`);


//to add two numbers
// let rlSync=require('readline-sync');

// let num1=rlSync.question('enter 1st number:\n');
// let num2=rlSync.question('enter 2nd number:\n');

// let sum=num1+num2;
// console.log(`The sum of ${num1} and ${num2} is ${sum}`);


//to multiply two numbers
let rlSync=require('readline-sync');

let n1=rlSync.question("enter 1st number:");
let n2=rlSync.question('enter 2nd number');
let mul=n1*n2;
console.log(`The product of ${n1} and ${n2} is ${mul}`);
