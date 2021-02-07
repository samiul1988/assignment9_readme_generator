// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const isEmail = require('validator/lib/isEmail');

const generateMarkdown = require('./utils/generateMarkdown'); // local module 

// Helper function that checks for empty input
const validateInput = (inputName, errorMessage) => {
    if (inputName) return true;
    else console.log(errorMessage);
    
    return false;
}

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: `[PROJECT TITLE] Enter project title (Required)`,
        validate: projectTitle => validateInput(projectTitle, 'Please enter a project title!')
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: '[DESCRIPTION] Describe your project shortly (Required)',
        validate: projectDescription => validateInput(projectDescription, 'Please enter a short description of your project!')
    },
    {
        type: 'list',
        name: 'installationChoice',
        message: '[INSTALLATION] Please select an option',
        choices: ['I want to provide detailed instruction including code samples', 'I want to provide simple instruction without any code sample']
    },
    {
        type: 'editor',
        name: 'installationInstructionDetailed',
        message: '[INSTALLATION] Enter installation instruction (Required)',
        validate: installationInstruction => validateInput(installationInstruction, 'Please enter instruction on how to install your application!'),
        when: ({ installationChoice }) => installationChoice === 'I want to provide detailed instruction including code samples'
    },
    {
        type: 'input',
        name: 'installationInstructionSimple',
        message: '[INSTALLATION] Enter installation instruction (Required)',
        validate: installationInstruction => validateInput(installationInstruction, 'Please enter instruction on how to install your application!'),
        when: ({ installationChoice }) => installationChoice === 'I want to provide simple instruction without any code sample'
    },
    {
        type: 'list',
        name: 'usageChoice',
        message: '[USAGE] Please select an option',
        choices: ['I want to provide detailed usage info including code samples', 'I want to provide simple usage info without any code sample']
    },
    {
        type: 'editor',
        name: 'usageInfoDetailed',
        message: '[USAGE] Enter Usage Information (Required)',
        validate: usageInfo => validateInput(usageInfo, 'Please enter usage information!'),
        when: ({ usageChoice }) => usageChoice === 'I want to provide detailed usage info including code samples'
    },
    {
        type: 'input',
        name: 'usageInfoSimple',
        message: '[USAGE] Enter Usage Information (Required)',
        validate: usageInfo => validateInput(usageInfo, 'Please enter usage information!'),
        when: ({ usageChoice }) => usageChoice === 'I want to provide simple usage info without any code sample'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license',
        choices: ['MIT', 'GNU', 'ISC', 'BSD', 'Apache', 'None']
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your GitHub Username (Required)',
        validate: githubUsername => validateInput(githubUsername, 'Please enter your GitHub username!')
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address (Required)',
        validate: email => {
            let response = validateInput(email, 'Please enter an email address!'); 
            if(response) {
                if(!isEmail(email)) {
                    console.log('\nPlease enter a valid email address!')
                    return false;
                }
            }
            return response;
        }
    },
    {
        type: 'input',
        name: 'contributionInfo',
        message: 'Provide some information about how people can contribute:',
        // when: ({ confirmContribution }) => confirmContribution,
        validate: contributionInfo => validateInput(contributionInfo, 'Please enter a brief contribution guideline!')
    },
    {
        type: 'input',
        name: 'testInstruction',
        message: 'Enter test instructions',
        default: "Run the following command to test\n```\nnpm test\n```"
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
          if (err) {
            reject(err);
            return;
          }
    
          resolve({
            success: true,
            message: 'Readme file created!'
          });
        });
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(data => {
            // console.log(data);
            return generateMarkdown(data);
        })
        .then(mdData => writeToFile('./README.md', mdData))
        .then(({ success, message }) => console.log(message))
        .catch(err => console.log("Could not complete operation!"));
}

// Function call to initialize app
init();