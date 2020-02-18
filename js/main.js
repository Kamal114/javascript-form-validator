const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("confirm-password");

function showerror(input, message) {
  const form_control = input.parentElement;
  form_control.classList = "form-control error";
  const small = form_control.querySelector("small");
  small.innerText = message;
}

function showsuccess(input) {
  const form_control = input.parentElement;
  form_control.classList = "form-control success";
}

function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showsuccess(input);
  } else {
    showerror(input, "Email is not valid");
  }
}

function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
    if (input.value.trim() === "") {
      showerror(input, `${getFiledName(input)} is required`);
    } else {
      showsuccess(input);
    }
  });
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showerror(
      input,
      `${getFiledName(input)} must be at least ${min} chatacters long`
    );
  } else if (input.value.length > max) {
    showerror(input, `${input} must be less than ${max} characters long`);
  } else {
    showsuccess(input);
  }
}

function getFiledName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener("submit", function(e) {
  e.preventDefault();
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
});
