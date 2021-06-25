// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  output = "";

  switch (license) {
    case "MIT":
      output =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Creative Commons Attribution Share Alike 4.0":
      output =
        "[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)";
      break;
    case "GNU General Public v3.0":
      output =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "Mozilla Public 2.0":
      output =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
  }

  return output;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  output = "";

  switch (license) {
    case "MIT":
      output =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Creative Commons Attribution Share Alike 4.0":
      output =
        "[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)";
      break;
    case "GNU General Public v3.0":
      output =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "Mozilla Public 2.0":
      output =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
  }

  return output;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
${renderLicenseBadge(data.license)}
## Description

${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.install}

## Usage

${data.usage}

## Contribution

${data.contribution}

## Tests

${data.tests}

${renderLicenseSection(data.license)}

## Questions

If you have any questions about this project, you can contact me via [email](${
    data.email
  }) or visit my [Github] for issues and bug tracking.`;
}

module.exports = generateMarkdown;
