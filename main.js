const inputEmail = document.querySelector("[name='email']");
const inputSubmit = document.querySelector("[type='submit']");
const error = document.querySelector(".error");

// console.log(inputEmail);
// console.log(inputSubmit);
// console.log(error);

function hideError() {
  error.classList.add("hide");
}

function showError() {
  error.classList.remove("hide");
}

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

document.forms[0].onsubmit = function (e) {
  if (!validateEmail(inputEmail.value)) {
    showError();
    e.preventDefault();
  }
};
inputEmail.onclick = hideError;
