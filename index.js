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
    {
        type: 'input',
        name: 'table of contentx',
        message: 'Enter project TOC:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter project installation steps:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter project usage information:'
    },
    {
        type: 'input',
        name: 'license',
        message: 'Enter project license:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter project contribution:'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter project testing information:'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Enter questions for project:'
    },

    // Add more prompts for other sections like installation, usage, license, etc.
]).then((answers) => {
    const readmeContent = `
# ${answers.title}

## Description
${answers.description}

## Instalation
${answers.installation}

## Usage
${answers.usage}

## Contribution
${answers.contributing}

## Test Instructions
${answers.test}
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
