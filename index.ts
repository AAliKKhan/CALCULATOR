#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
  {
    message: "Select one of the operators  to perform task",
    type: "list",
    name: "operator",
    choices: [
      "addition",
      "subtraction",
      "division",
      "multiplication",
      "square",
      "cube",
      "square root",
      "cube root",
    ],
  },
  { message: "Enter first Number", type: "number", name: "firstNumber" },
  {
    message: "Enter second Number(OPTIONAL)",
    type: "number",
    name: "secondNumber",
  },
]);

console.log(answer);

if (answer.operator === "addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else if (answer.operator === "square") {
  console.log(answer.firstNumber * answer.firstNumber);
} else if (answer.operator === "cube") {
  console.log(answer.firstNumber * answer.firstNumber * answer.firstNumber);
} else if (answer.operator === "square root") {
  console.log(Math.sqrt(answer.firstNumber));
} else if (answer.operator === "cube root") {
  console.log(Math.cbrt(answer.firstNumber));
} else console.log("please select Valaid operator");


