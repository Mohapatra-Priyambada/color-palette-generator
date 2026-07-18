const generateBtn = document.getElementById("generate-btn");
const paletteContainer = document.querySelector(".palette-container");

generateBtn.addEventListener("click", generatePalette);
// copy funtionality

// e is whenever you click js creates an object
paletteContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("copy-btn")) {
    const hexValue = e.target.previousElementSibling.textContent; //this will get the value of the element above the element with copy-btn class
    navigator.clipboard
      .writeText(hexValue)
      .then(() => showCopySuccess(e.target))
      .catch((err) => console.log(err));
  } else if (e.target.classList.contains("color")) {
    const hexValue =
      e.target.nextElementSibling.querySelector(".hex-value").textContent;
    navigator.clipboard
      .writeText(hexValue)
      .then(() => showCopySuccess(e.target))
      .catch((err) => console.log(err));
  }
});

function showCopySuccess(element) {
  element.classList.remove("far", "fa-copy");
  element.classList.add("fas", "fa-check");

  element.style.color = "#48bb78";
  setTimeout(() => {
    element.classList.add("far", "fa-copy");
    element.classList.remove("fas", "fa-check");
    element.style.color = "";
  }, 1500);
}
function generatePalette() {
  // to have a palette we create an array colors to have random colors in it
  const colors = [];
  for (let i = 0; i < 5; i++) {
    // to insert colors into it we make a for loop it 5 colors and call a funtion that will generate 5 colors and push it in the array
    colors.push(generateRandomColor());
  }
  updatePaletteDisplay(colors);
}

function generateRandomColor() {
  // WE WILL CREATE COLORS WITH HEX VALUES
  const letters = "0123456789ABCDEF";
  let color = "#"; // as this is how the hex colours start

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    // random funtion generater random number between 0-1 i.e in points we multiply it by 16 because there are 16 leeter in there and then floor operator because random generates decimals
  }
  return color;
}

function updatePaletteDisplay(colors) {
  const colorBoxes = document.querySelectorAll(".color-box");
  colorBoxes.forEach((box, index) => {
    const color = colors[index];
    const colorDiv = box.querySelector(".color");
    const hexValue = box.querySelector(".hex-value");

    colorDiv.style.backgroundColor = color;
    hexValue.textContent = color;
  });
}
