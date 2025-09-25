// Select the <body> element from the document.
// getElementsByTagName returns a list (HTMLCollection),
// so we take the first element [0].
const bodyType = document.getElementsByTagName('body')[0];

// Define a function called myColors that takes one parameter: name
function changeBg(name) {
  // Use the parameter to set the background color of the <body>
  bodyType.style.backgroundColor = name;
}

/* Call the function with 'black' → background turns black
changeBg('black') */

//Adding event Listeners to buttons
document.getElementById('yellow').addEventListener('click', () => changeBg('yellow'));
document.getElementById('green').addEventListener('click', () => changeBg('green'));
document.getElementById('blue').addEventListener('click', () => changeBg('blue'));