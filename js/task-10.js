const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]')
const input = document.querySelector('#controls input');
const boxes = document.querySelector('#boxes');
let width = 30;
let height = 30;

createBtn.addEventListener('click', () => {
	createBoxes(input.value);
});

destroyBtn.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


function destroyBoxes() {
	boxes.innerHTML="";
	width = 30;
	height = 30;
}

function createBoxes(amount) {
	const arr = [];
	let div;
	for (let i=0; i<amount; i+=1) {
		div = document.createElement('div');
		div.style.width = `${width}px`;
		div.style.height = `${height}px`;
		div.style.backgroundColor = getRandomHexColor();
		arr.push(div);
		width += 10;
		height += 10;
	}

	boxes.append(...arr);
}
