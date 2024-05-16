let isEmailSend = false;
const loadingContainer = document.querySelector('.loadingContainer');
const email = document.querySelector('.email');
const name = document.querySelector('.name');
const object = document.querySelector('.object');
const message = document.querySelector('.coreText');

const emailValue = email.value.trim();
const nameValue = name.value.trim();
const messageValue = message.value.trim();
const objectValue = object.value.trim();



function loading() {
    if (emailValue === '' || nameValue === '' || messageValue === '' || objectValue === '') {
        alert('All fields must be filled out.');
        return false;
    } else {
        loadingContainer.style.display = 'block';
        console.log(emailValue);
        isEmailSend = true;
    }
    if (isEmailSend === true) {
        windows.alert('Your mail as been successfully sent');
    } else {
        window.alert(`Sorry a problem as occured and your mail didn't upload.`);
    }
}
