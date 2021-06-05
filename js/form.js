const form = document.querySelector(".formContainer");

const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");

const subject = document.querySelector("#number");
const subjectError = document.querySelector("#numberError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

function validateForm(event) {
  event.preventDefault();

  if (checkLength(firstName.value, 4) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (validateNumber(number.value) === true) {
    phoneError.style.display = "none";
  } else {
    phoneError.style.display = "block";
  }
  if (checkLength(firstName.value, 4) && validateEmail(email.value)) {
    alert("Message has been sent successfully!");
  }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

function validateNumber(number) {
  const regNum = /^[0-9]{8}$/;
  const numMatch = regNum.test(number);
  return numMatch;
}
