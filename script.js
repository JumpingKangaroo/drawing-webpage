// Reset a given div box to the original wheat color
function resetBox(div) {
  div.classList.remove('clickedBox');
  div.classList.add('blankBox');
}

// Empties the given container of all child elements
function emptyContainer(container) {
  while (container.firstChild != null) {
    container.removeChild(container.firstChild);
  }
}

// Called when mouseover on a box, changes it to yellow
function changeColor() {
  this.classList.remove('blankBox');
  this.classList.add('clickedBox');
}

// Initialize the n x n div array, and append them to the container div
function initDivs(n) {
  var container = document.querySelector("#container");
  var numOfDivs = n * n;
  for (var i = 0; i < numOfDivs; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("blankBox");
    newDiv.addEventListener('mouseover', changeColor);
    container.appendChild(newDiv);
  }
}

// Get new n (height and width of drawing thing)
function resetButtonPushed() {
  emptyContainer(document.querySelector("#container"));
  var n = parseInt(prompt("Enter a new width and height (in boxes) for the canvas", "16"));
  var container = document.querySelector("#container");
  container.style.gridTemplateColumns = "repeat(" + String(n) + ", auto)";
  container.style.gridTemplateRows = "repeat(" + String(n) + ", auto)";
  initDivs(n);
}

// Initialize the button listener event
function initButton() {
  var resetButton = document.querySelector("#reset");
  resetButton.addEventListener("click", resetButtonPushed);
}

// Initialize the button, and the initial 16 x 16 canvas
initDivs(16);
initButton();