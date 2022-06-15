// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const utils = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the project\'s title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the project\'s description?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'How do you install/run the project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How do you use the project?',
        name: 'usage',
    },
    {
        type: 'rawlist',
        message: 'What License was this created with?',
        name: 'license',
        choices: [
            'NPL',
            'GPL',
            'Apache',
            'MIT',
            'CC',
            'BSD',
            'none',
        ],
    },
    {
        type: 'input',
        message: 'Who contributed to the project?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'How can you test the project?',
        name: 'test',
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'gitHub',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
];

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        utils.generateMarkdown(answers);
    });
};

// Function call to initialize app
init();
