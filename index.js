// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>HTML Forms QRD</h1>`;

// forms

let temp = `<option value="">--Select--</option>`;
Array(43)
  .fill(0)
  .map((i, ind) => {
    temp += `<option value=${ind + 18}>${ind + 18}</option>`;
  });

document.getElementById('ageField').innerHTML = temp;
