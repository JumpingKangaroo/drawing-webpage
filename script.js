function resetBox() {
  this.classList.remove('clickedBox');
  this.classList.add('blankBox');
}

function changeColor() {
  this.classList.remove('blankBox');
  this.classList.add('clickedBox');
}

function initDivs() {
  var container = document.querySelector("#container");

  for (var i = 0; i < 256; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("blankBox");
    newDiv.addEventListener('mouseover', changeColor);
    container.appendChild(newDiv);
  }
}


initDivs();
