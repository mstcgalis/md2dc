const form = document.querySelector("#form");
const input = document.querySelector("#input");
const output = document.querySelector("#output");
const copyStatus = document.querySelector("#copy-status");

const re = /\[(.+)\]\((http.+)\)/gm;

let outputString = "";

/**
 * Formats a string of markdown text to be displayed in the output element
 * 
 * @param {string} markdown 
 * @returns 
 */
function formatMarkdown(markdown) {
    // Replace newline characters with <br> elements
    const formatted = markdown.replace(/\n/g, "<br>");
  
    // Return the formatted string
    return formatted;
  }

/**
 * Converts markdown links to DC links
 * 
 * @param {string} mdString
 * @returns {string} dcString
 */
function convertMd2Dc(mdString) {
    let num = 0;
    let links = [];
    
    const createLink = function(m, label, link) {
        num += 1;
        links.push(link)
        const dcString = "**" + label + "**" + " (`link#" + num + "`)";
        return dcString
    };

    let linkList = "";
    
    const result = mdString.replaceAll(re, createLink);
    
    for (let i = 0; i < num; i++) {
      if (i === 0) {
        linkList += "\n\n";
      }
      linkList += "`link#" + (i+1) + "`" + ": " + links[i] + "\n";
    };

    outputString = result + linkList;

    output.value = outputString;
}

function copyOutput() {
  // Copy the output to the clipboard
  navigator.clipboard.writeText(output.value);

  // Change the copyStatus text to "Copied!"
  copyStatus.innerHTML = "Copied!";

}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  convertMd2Dc(input.value);
});