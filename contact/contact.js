let isEmailSend = false;
const loadingContainer = document.querySelector('.loadingContainer');
const email = document.querySelector('.email');
const name = document.querySelector('.name');
const object = document.querySelector('.object');
const message = document.querySelector('.coreText');


function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.value.match(validRegex)) {
        return true;
    } else {
        alert("Invalid email address!");
        return false;
    }

}

function loading() {
    const emailValue = email.value.trim();
    const nameValue = name.value.trim();
    const messageValue = message.value.trim();
    const objectValue = object.value.trim();
    if (ValidateEmail(email) === false) {
        console.log("Email is not valid");
        return;
    }
    if (emailValue === '' || nameValue === '' || messageValue === '' || objectValue === '') {
        alert('All fields must be filled out.');
        console.log(emailValue);
        return;
    } else {
        isEmailSend = true;
        loadingContainer.style.display = 'block';
        console.log(emailValue);
    }
}

if (isEmailSend === true) {
    windows.alert('Your mail as been successfully sent');
} else {
    window.alert(`Sorry a problem as occured and your mail didn't upload.`);
}