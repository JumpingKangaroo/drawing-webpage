
function createDiv(father, id) {
  let newDiv = document.createElement("div");
  newDiv.setAttribute("id", id);
  father.appendChild(newDiv);
  return newDiv;
}

function findStyleSheet(title) {
  console.log(document.styleSheets)
  for (var i = 0; i < document.styleSheets.length; i++) {
    var sheet = document.styleSheets[i];
    console.log("title " + String(i) + ": " + sheet.title);
    if (sheet.title == title)
      return sheet;
  }
  console.log("Couldn't find stylesheet: " + title);
  return null;
}

function initDivArray(numPerSide) {
  // First, set the width and height of the grid
  var gridSheet = findStyleSheet("style");
  gridSheet.insertRule("")
  var container = document.getElementById("container");
  var boxNum = 0;
  var newDiv;
  for (var i = 0; i < numPerSide; i++) {
    for (var j = 0; j < numPerSide; j++) {
      newDiv = createDiv(container, boxNum);
      boxNum++;
    }
  }
    
}

initDivArray()