// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
    let outputStr = '';
    if (license !== 'None') {
        outputStr = `\n![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return outputStr;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
    let outputStr = '';
    if (license !== 'None') {
        outputStr = `\n* [License](#license)`;
    }
    return outputStr;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    let outputStr = '';
    if (license !== 'None') {
        outputStr = 
        `\n## License\nThis application is licensed under ${license} license.`;
    }
    return outputStr;
}

// TODO: Create a function to generate markdown for README
module.exports = data => {
  return (
`# ${data.projectTitle} ${renderLicenseBadge(data.license)}

---
## Description
${data.projectDescription}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installationInstructionDetailed ? data.installationInstructionDetailed : data.installationInstructionSimple}

## Usage
${data.usageInfoDetailed ? data.usageInfoDetailed : data.usageInfoSimple} ${renderLicenseSection(data.license)}

## Contributing
${data.contributionInfo}  

## Tests
${data.testInstruction}

## Questions
If you have any question or need more information/examples, feel free to reach out to me here: ${data.email}.

You can also connect with me on [Github](https://github.com/${data.githubUsername}) to find relevant projects.
`
  );
}