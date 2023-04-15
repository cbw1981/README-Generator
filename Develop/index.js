const inquirer = require('inquirer');
const generateMarkdown = require ('./utils/generateMarkdown.js');
const fs = require('fs');

const confirmInput = (nameInput) => nameInput ? true : (console.log("Please enter SOMETHING"), false);

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username',
        validate: confirmInput,
      },
      {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
        validate: confirmInput,
      },
      {
        type: 'input',
        message: 'What is your Project title?',
        name: 'title',
        validate: confirmInput,
      },
      {
        type: 'input',
        message: 'Please provide a short description of your project',
        name: 'description',
        validate: confirmInput,
      },
      {
        type: 'input',
        message: 'List any collaborators involved in the project',
        name: 'collabs',
        validate: confirmInput,
      },
      {
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        name: 'installation',
        validate: confirmInput,
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use.',
        name: 'usage',
        validate: confirmInput,
    },
      {
        type: 'list',
        message: 'please choose a license for the project',
        name: 'license',
        choices: ['MIT', 'GPL', 'CC--0'],
        validate: confirmInput,
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.error(err) : console.log('README created')
)};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile('yourREADME.md', generateMarkdown(data));
        
        console.log(data);
    });
}



// Function call to initialize app
init();
