
let inputEmail = document.querySelector("[name='email']");
let inputSubmit = document.querySelector("[type='submit']");
let error = document.querySelector(".error");

console.log(inputEmail);
console.log(inputSubmit);
console.log(error);

document.forms[0].onsubmit = function (e) {
    if (!inputEmail.value.includes("@")) {
        error.classList.remove("hide");
        e.preventDefault();
    }
}
inputEmail.onclick = function () {
    error.classList.add("hide");
}

