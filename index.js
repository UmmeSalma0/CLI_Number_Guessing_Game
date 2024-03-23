#!/usr/bin/env node
import iquirer from "inquirer";
// computer generate a randomNumber
// user guess the number
// computer givefeedback
const randomNumber = Math.floor(Math.random() * 10);
const answers = await iquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "please Guess a number between 1 to 10",
    },
]);
console.log(answers);
if (answers.userGuessNumber === randomNumber) {
    console.log("you win");
}
else
    console.log("you lose");
