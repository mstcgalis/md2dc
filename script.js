const form = document.querySelector("#form");
const input = document.querySelector("#input");
const output = document.querySelector("#output");

const re = /\[(.+)\]\((http.+)\)/gm;

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
        const dcString = label + " (`link#" + num + "`)";
        return dcString
    };

    let linkList = "\n\n";
    
    const result = mdString.value.replaceAll(re, createLink);
    
    for (let i = 0; i < num; i++) {
        linkList += "`link#" + (i+1) + "`" + ": " + links[i] + "\n";
    };

    output.innerHTML = formatMarkdown(result + linkList)
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  convertMd2Dc(input);
});