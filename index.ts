#! /usr/bin/env node


import inquirer from "inquirer";

// 1) Computer will generate a random number
// 2) User will input a random number 
// 3) Compare user input with computer random number and show result

const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(randomNumber);
const answers = await inquirer.prompt([
    {
        name: "userguessnumber",
        type: "number",
        message: "Please guess a number between 1 to 10: ",
        },
]);
if(answers.userguessnumber === randomNumber){
    console.log("Congrutalions! you guessed the right number.");
}
    else {
    console.log("Alas you guess the wrong number");
}