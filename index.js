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
//get an element by its ID name
document.getElementById('yellow').addEventListener('click', () => changeBg('yellow'));
document.getElementById('green').addEventListener('click', () => changeBg('green'));
document.getElementById('blue').addEventListener('click', () => changeBg('blue'));

function randomColor() {
  // Generate a random number between 0 and 255 for the red channel
  const yellow = Math.round(Math.random() * 255)
  const green = Math.round(Math.random() * 255)
  const blue = Math.round(Math.random() * 255)

  // Build an RGB string like "rgb(123, 45, 200)"
  const colors = `rgb(${yellow}, ${green}, ${blue})`;

  // Apply this random color to the page background
  bodyType.style.backgroundColor = colors;
}
//call the function
console.log(randomColor());