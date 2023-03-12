/* eslint-disable no-extra-semi */
const form = document.querySelector('#form');
const input = document.querySelector('#input');
const output = document.querySelector('#output');
const copyStatus = document.querySelector('#copy-status');

const re = /\[(.+)\]\((http.+)\)/gm;

/**
 * Converts markdown links to DC links
 *
 * @param {string} mdString
 * @returns {string} dcString
 */
function convertMd2Dc(mdString) {
  let num = 0;
  const links = [];

  // function to be used in the replaceAll method
  function createLink(m, label, link) {
    num += 1;
    links.push(link);
    const dcLink = `**${label}** (#link#${num})`;
    return dcLink;
  };

  let linkList = '';

  const textWithLinks = mdString.replaceAll(re, createLink);

  for (let i = 0; i < num; i += 1) {
    if (i === 0) {
      linkList += '\n\n';
    }
    linkList += `#link#${i + 1}: ${links[i]} \n`;
  };

  const dcString = textWithLinks + linkList;

  return dcString;
};

/**
 * Copies the output to the clipboard
 */
// eslint-disable-next-line no-unused-vars
function copyOutput() {
  // Copy the output to the clipboard
  navigator.clipboard.writeText(output.value);

  // Change the copyStatus text to "Copied!"
  copyStatus.innerHTML = 'Copied!';

  // Change the copyStatus text back to "" after 1 second
  setTimeout(() => {
    copyStatus.innerHTML = '';
  }, 1000);
};

// Add an event listener to the form
form.addEventListener('submit', (event) => {
  event.preventDefault();
  // const clean = DOMPurify.sanitize(input.value);
  // Convert the Md inuput to DC output
  output.value = convertMd2Dc(input.value);
});
