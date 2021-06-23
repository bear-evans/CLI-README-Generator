/*==========================================
Requires
===========================================*/
const inquirer = require("inquirer");
const fs = require("fs");

/*==========================================
Greeting Message
===========================================*/

/*==========================================
Inquirer Prompt for User Data
===========================================*/

inquirer.prompt([]).then((data) => {
  let fileContents = fs.writeFile(
    data.projectName + " README.md",
    fileContents,
    (err) => {
      err ? console.log(err) : console.log("README generated!");
    }
  );
});
