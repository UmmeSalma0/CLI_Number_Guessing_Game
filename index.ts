#!/usr/bin/env node

import iquirer from "inquirer";  // import inquirer module is used to take input from the user.
import chalk from "chalk";    // chalk is used to color the text in the terminal.

console.log(chalk.bgGray("welcome to number guessing game"));
// computer generate a randomNumber
// user guess the number
// computer give feedback

while(true){
  
const randomNumber = Math.floor(Math.random() * 10);
// Math.floor() is used to round the number down to the nearest integer
// Math.random() is used to generate a random number between 0 and 1 mostly 0-0.99 values are generated.
// *10 is used to generate a random number between 0 and 10.
// if you dont want a number 0 then *10+1 is used to generate a random number between 1 and 10.

const answers = await iquirer.prompt(
  [
  {
    name: "userGuessNumber",
    type: "number",
    message: chalk.blue("please Guess a number between 1 to 10:"),
  },
]
);
console.log(answers.userGuessNumber);

if (answers.userGuessNumber === randomNumber) {
  console.log(chalk.green("you win"));

} else console.log(chalk.red("you lose"));
};
