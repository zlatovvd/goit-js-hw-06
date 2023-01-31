const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onSubmit);

function onSubmit(event) {

    event.preventDefault();

    const {
        elements: {
            email, password
        }
    } = event.currentTarget;

 
    if(email.value === "" || password.value === "") {
        alert("Всі поля повинні бути заповнені !");
    } else {
        const fields = {
            email: email.value,
            password: password.value,
        }

        console.log(fields);
        loginForm.reset();
    }
    
}
