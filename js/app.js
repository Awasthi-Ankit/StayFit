// form validator
const form = document.getElementById("form");
const name = document.getElementById("name");
const contact = document.getElementById("contact");
const email = document.getElementById("email");
const age = document.getElementById("age");
const anim = document.getElementsByClassName("join-info");

function showError(input, message) {
    const formPart = input.parentElement;
    formPart.className = "form-part error";
    const small = formPart.querySelector("small");
    small.innerText = message;
}

function showSuccess(input) {
    const formPart = input.parentElement;
    formPart.className = "form-part success";
}

function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


// Event Listeners
form.addEventListener("submit", function(e) {
    e.preventDefault();

    if (name.value == "") {
        showError(name, "name is required")
    } else {
        showSuccess(name);
    }

    if (email.value == "") {
        showError(email, "Email is required")
    } else if (!isValidEmail(email.value)) {
        showError(email, "Enter a valid mail")
    } else {
        showSuccess(email);
    }

    if (contact.value == "") {
        showError(contact, "Valid contact is required")
    } else {
        showSuccess(contact);
    }

    if (age.value == "") {
        showError(age, "Enter you age")
    } else if (age.value < 16) {
        showError(age, "You are under age")
    } else {
        showSuccess(age);
    }

});