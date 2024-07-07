const inquirer = require('inquirer');
const fs = require('fs');
const licenses = [
    {
        name: 'MIT License',
        badge: 'https://img.shields.io/badge/License-MIT-yellow.svg'
    },
    {
        name: 'GNU GPLv3',
        badge: 'https://img.shields.io/badge/License-GPLv3-blue.svg'
    },
    // Add more license options as needed
];


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
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: licenses.map(license => license.name)
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
    const selectedLicense = licenses.find(license => license.name === answers.license);
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

## License
[![License](${selectedLicense.badge})](${selectedLicense.name})

This application is covered under the ${selectedLicense.name}.
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
