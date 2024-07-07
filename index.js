const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Enter the project title:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a project description:'
    },
    // Add more prompts for other sections like installation, usage, license, etc.
]).then((answers) => {
    const readmeContent = `
# ${answers.title}

## Description
${answers.description}

`;

    // Write the generated README content to a file
    fs.writeFile('README.md', readmeContent, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('README.md generated successfully!');
        }
    });
});
