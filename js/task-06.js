const input = document.querySelector('#validation-input');
const dataLength = input.dataset.length;

input.addEventListener('blur', onBlur);

function onBlur(event) {
    
    if (Number(event.currentTarget.value.length) === Number(dataLength)) {
       input.classList.add('valid');
       input.classList.remove('invalid');

    } else {
        input.classList.add('invalid'); 
        input.classList.remove('valid');
    }
}