let counterValue=0;
const value = document.querySelector("#value");

const refs = {
	decrementBtn: document.querySelector('[data-action="decrement"]'),
	incrementBtn: document.querySelector('[data-action="increment"]'),
}

refs.incrementBtn.addEventListener('click', handleIncrementClick);
refs.decrementBtn.addEventListener('click', handleDecrementClick);

function handleIncrementClick() {
	counterValue += 1;
	value.textContent = counterValue;
}

function handleDecrementClick() {
	counterValue -= 1;
	value.textContent = counterValue;
}

