#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumebr = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([{
        name: "guessedNumber",
        message: "guess the number!",
        type: "number",
    }]);
if (answer.guessedNumber === randomNumebr) {
    console.log(`Congratulation! you guess the right number`);
}
else {
    console.log(`Ops You guess the wrong number, try again`);
}
