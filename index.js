// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("./utils/generateMarkdown.js");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    name: "projectName",
    type: "input",
    message: "What is the name of your project?",
  },
  {
    name: "githubUsername",
    type: "input",
    message: "Please enter your Github username.",
  },
  {
    name: "email",
    type: "input",
    message: "Please enter your email address.",
  },
  {
    name: "description",
    type: "input",
    message: "Describe your project.",
  },
  {
    name: "install",
    type: "input",
    message: "How do you install this project?",
  },
  {
    name: "usage",
    type: "input",
    message: "How do you use this project?",
  },
  {
    name: "contribution",
    type: "input",
    message: "What are your guidelines for contribution?",
  },
  {
    name: "tests",
    type: "input",
    message: "What are the instructions for running tests?",
  },
  {
    name: "license",
    type: "list",
    message: "What license will you release under?",
    choices: [
      "MIT",
      "Creative Commons Attribution Share Alike 4.0",
      "GNU General Public v3.0",
      "Mozilla Public 2.0",
    ],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("File saved!")
  );
}

// TODO: Create a function to initialize app
function init() {
  console.log("=============================================");
  console.log("Welcome to Bear's README Generator!          ");
  console.log("---------------------------------------------");
  console.log("Just answer some basic questions, and your   ");
  console.log("README file will be semi-automatically       ");
  console.log("generated and saved to a ready-to-go file!   ");
  console.log("=============================================");

  const fileContents = inquirer
    .prompt(questions)
    .then((answers) => generateMarkdown(answers));
  writeToFile("README.md", fileContents);
}

// Function call to initialize app
init();
