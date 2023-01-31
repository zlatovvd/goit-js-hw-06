const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

text.style.fontSize = `${fontSizeControl.value}px`;

fontSizeControl.addEventListener('input', onChange);

function onChange(event) {

    text.style.fontSize = `${event.currentTarget.value}px`;

}