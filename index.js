/*==========================================
Requires
===========================================*/
const inquirer = require("inquirer");
const fs = require("fs");

/*==========================================
Greeting Message
===========================================*/

console.log("=============================================");
console.log("Welcome to Bear's README Generator!          ");
console.log("---------------------------------------------");
console.log("Just answer some basic questions, and your   ");
console.log("README file will be semi-automatically       ");
console.log("generated and saved to a ready-to-go file!   ");
console.log("=============================================");

/*==========================================
Inquirer Prompt for User Data
===========================================*/

inquirer
  .prompt([
    {
      name: "projectName",
      type: "input",
      message: "What is the name of your project?",
    },
    {
      name: "description",
      type: "input",
      message: "Please describe your project.",
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
  ])
  .then((data) => {
    let fileContents = `# ${data.projectName}

## Description

${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)

## Installation

${data.install}

## Usage

${data.usage}

## Contribution

${data.contribution}

## Tests

${data.tests}

## License

This project is licensed under the terms of the ${data.license} license.`;

    fs.writeFile(data.projectName + " README.md", fileContents, (err) => {
      err ? console.log(err) : console.log("README generated!");
    });
  });
