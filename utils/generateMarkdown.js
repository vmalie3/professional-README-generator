// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === '') '';
  else {
    return'![license](https://img.shields.io/badge/license-${license})';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === '') '';
  else {
    return 'This project is licensed by ${license}';
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return 
`# ${data.title}

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Test](#test)
7. [Questions](#questions)
`;
};

module.exports = generateMarkdown;
