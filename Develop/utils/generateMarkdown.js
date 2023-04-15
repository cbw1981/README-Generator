const fs = require('fs');


function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  } else {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://lbesson.mit-license.org/`
  }
  if (license === 'GPL') {
    return `http://perso.crans.org/besson/LICENSE.html`
  }
  if (license === 'CC--0') {
    return `https://creativecommons.org/licenses/by-nd/4.0` 
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return `## Licenses
    This project is covered under the ${license} license. To learn more about what this means, click the license button at the top.`
  }
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

    let content = ' '
    
    content += `# ${data.projectTitle}
    ## Description
    ${data.description}
  
    ## Installation
    ${data.installation}
             
    ## Usage
    ${data.usage}

    ## Collaborations
    ${data.collabs}

    ## License
    ${data.license}
    ${renderLicenseBadge(data.license)}
    ${renderLicenseLink(data.license)}
    ${renderLicenseSection(data.license)}
    ` 
    
    
    
    content += `## Questions
    This was made by ${data.username}. Any questions can be sent to ${data.email}.
    You can find more at (https://github.com/${data.username}
    `;
    
    
    return content;
    }
  
module.exports = generateMarkdown;
