const containerDiv = document.getElementById("container");
let squares = 256;

function changeColor(e) {
  const hue = Math.random() * 360;
  const saturation = Math.random() * 100;

  if (e.target.hasAttribute("style")) {
    e.target.dataset.lightness -= 5;
    e.target.style.backgroundColor = `hsl(${hue}, ${saturation}%,
                                              ${e.target.dataset.lightness}%)`;
  } else {
    e.target.setAttribute("data-lightness", 50);
    e.target.style.backgroundColor = `hsl(${hue}, ${saturation}%, 50%)`;
  }
}

function setChildren(n) {
  while (containerDiv.firstChild) {
    containerDiv.removeChild(containerDiv.firstChild);
  }

  for (let i = 1; i <= n; i++) {
    containerDiv.appendChild(document.createElement("div"));
  }

  containerDiv.childNodes.forEach(div =>
    div.addEventListener("mouseenter", changeColor)
  );
}

function setSquares() {
  let squaresPerSide = prompt(
    "How many squares in one row would you like?",
    ""
  );

  while (isNaN(squaresPerSide) || squaresPerSide <= 0) {
    if (squaresPerSide === null) return;
    squaresPerSide = prompt("Invalid option. Enter a positive number.", "");
  }

  squares = Math.pow(squaresPerSide, 2);

  containerDiv.style.grid = `repeat(${squaresPerSide}, auto) /
                               repeat(${squaresPerSide}, auto)`;
}

const button = document.querySelector("button");
button.addEventListener("click", setSquares);
button.addEventListener("click", () => setChildren(squares));

setChildren(squares);
