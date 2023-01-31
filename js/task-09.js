const changeColorBtn = document.querySelector('.change-color');
const colorText = document.querySelector('.color');

changeColorBtn.addEventListener('click', onClick);

function onClick() {
	const color = getRandomHexColor();
	colorText.textContent = color;
	document.body.style.backgroundColor = color;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
