const userName = document.getElementById("user-name");
const email = document.getElementById("email");
const number = document.getElementById("number");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
const eye = document.getElementById("eye");
const alphabet = "qwertyuiopasdfghjklzxcvbnm";
const too = "0123456789";
let num = 0;
let valid = 0;
function validName() {
  const nameValue = userName.value;
  if (nameValue == "") {
  } else {
    valid++;
  }
}
function validEmail() {
  const value = email.value;
  if (value.includes("@")) {
    // alert("email is correct");
    valid++;
  }
  // else {
  //   alert("email is wrong");
  // }
}
function validPhone() {
  const phoneNumber = number.value;
  for (let i = 0; i < alphabet.length; i++) {
    if (phoneNumber.includes(alphabet[i])) {
      num++;
    }
  }
  if (num == 0 && phoneNumber.length == 8) {
    // alert("phone number is correct");
    valid++;
  }
  // else {
  //   alert("phone number is wrong");
  // }
}
function validPass() {
  const passwordValue = password.value;
  let num1 = 0;
  if (passwordValue.length >= 8) {
    num1++;
  }
  for (let i = 0; i < alphabet.length; i++) {
    if (passwordValue.includes(alphabet[i])) {
      num1++;
      break;
    }
  }
  for (let j = 0; j < too.length; j++) {
    if (passwordValue.includes(too[j])) {
      num1++;
      break;
    }
  }
  if (num1 === 3) {
    // alert("password is correct");
    valid++;
  }
  // else {
  //   alert("password is wrong");
  // }
}
console.log(valid);
function workk() {
  validName();
  validEmail();
  validPhone();
  validPass();
  if (valid == 4) {
    localStorage.setItem("name", userName.value);
    window.location.href = "todo.html";
  }
  valid = 0;
}

submit.addEventListener("click", function () {
  workk();
});
let numberPass = 0;
function pass() {
  if (numberPass % 2 == 0) {
    password.type = "password";
  } else {
    password.type = "text";
  }
  numberPass++;
}
eye.onclick = pass;
