const please = document.getElementById("confirmation-message");
const form = document.getElementById("form-id");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

form.addEventListener("submit", function(event) {
please.innerText = "Thank you for your message! We will get back to you as soon as possible.";
if (nameInput.value === "" || emailInput.value === "" || messageInput.value === "") {
    please.innerText = "Please fill out all fields before submitting the form.";
    event.preventDefault();
    return;
}
event.preventDefault();
});

form.addEventListener("submit", function(event) {
    if (nameInput.value === "") {
        nameInput.placeholder = "Please enter your name";
        event.preventDefault();
        nameInput.style.borderColor = "red";
    } else {
        nameInput.style.borderColor = "";
    }
});

form.addEventListener("submit", function(event) {
    if (emailInput.value === "") {
        emailInput.placeholder = "Please enter your email";
        event.preventDefault();
        emailInput.style.borderColor = "red";
    } else {
        emailInput.style.borderColor = "";
    }
});

form.addEventListener("submit", function(event) {
    if (messageInput.value === "") {
        messageInput.placeholder = "Please enter a message";
        event.preventDefault();
        messageInput.style.borderColor = "red";
    } else {
        messageInput.style.borderColor = "";
    }
});
