// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let output = "";

  switch (license) {
    case "MIT License":
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
    case "Apache License v2.0":
      output =
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
  }

  return output;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let output = "";
  if (license) output = "- [License](#license)";
  return output;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let output = "";

  switch (license) {
    case "MIT License":
      output =
        "## License\n\nThis project is licensed under the [MIT License](https://opensource.org/licenses/MIT).";
      break;
    case "Creative Commons Attribution Share Alike 4.0":
      output =
        "## License\n\nThis project is licensed under the [Creative Commons Attribution Share Alike 4.0 License](https://creativecommons.org/licenses/by-sa/4.0/).";
      break;
    case "GNU General Public v3.0":
      output =
        "## License\n\nThis project is licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0).";
      break;
    case "Apache License v2.0":
      output =
        "## License\n\nThis project is licensed under the [Apache License v2.0](https://opensource.org/licenses/Apache-2.0).";
      break;
  }

  return output;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const output = `# ${data.projectName}

## Description

${data.description}

${renderLicenseBadge(data.license)}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)
${renderLicenseLink(data.license)}

## Installation

${data.install}

## Usage

${data.usage}

## Contribution

${data.contribution}

## Tests

${data.tests}

## Questions

If you have any questions about this project, you can contact me via [email](${
    data.email
  }) or visit my [Github](https://github.com/${
    data.githubUsername
  }/) for issues and bug tracking.

${renderLicenseSection(data.license)}
`;

  return output;
}

module.exports = generateMarkdown;
