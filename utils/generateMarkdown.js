const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'none') {
    return '';
  }
  else {
    return (
`![license](https://img.shields.io/badge/license-${license}-blueviolet)`
      );
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none'|| 'CC') {
    return '';
  }
  if (license === 'GPL' || 'Apache') {
    return (`[${license}](https://https://choosealicense.com/licenses/${license}-2.0/)`);
  }
  if (license === 'MIT') {
    return (`[${license}](https://https://choosealicense.com/licenses/${license}/)`);
  }
  if (license === 'BSD') {
    return (`[${license}](https://https://opensource.org/licenses/BSD-3-Clause)`);
  }
  if (license === 'NPL') {
    return (`[${license}](https://https://spdx.org/licenses/NPL-1.1.html)`);
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return '';
  }
  else {
    return (

`## License
This project is licensed by ${license}`);
  }
};

function changeTableOfContents (license) {
  if (license === 'none') {
    return (
`4. [Contributing](#contributing)
5. [Test](#test)
6. [Questions](#questions)`
    );
  } else {
    return (
`4. [License](#license)
5. [Contributing](#contributing)
6. [Test](#test)
7. [Questions](#questions)`
    )
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, installation, usage, license, contributing, test, gitHub, email}) {
  
  console.log (title);

  const template = ( 
`# ${title}

${renderLicenseBadge(license)}

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
${changeTableOfContents(license)}

## Description

${description}

## Installation

${installation}

## Usage

${usage}

${renderLicenseSection(license)}
${renderLicenseLink(license)}

## Contibuting

${contributing}

## Test

${test}

## Questions

If you have any questions please feel free to reach out via email at ${email}!

You may also reach out via github at the link below:

[Repository](https://github.com/${gitHub}/${title})
`);
  fs.writeFileSync('./sample/README.md', template);
  console.log('Success');
  process.exit();
};

module.exports = {
  generateMarkdown
};
