const generateBtn = document.getElementById("generate-btn");
const paletteContainer = document.querySelector(".palette-container");

generateBtn.addEventListener("click", generatePalette);

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

  for (let i = 0; i <= 6; i++) {
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
