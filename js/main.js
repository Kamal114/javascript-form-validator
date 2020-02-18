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

function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
    if (input.value.trim() === "") {
      showerror(input, `${getFiledName(input)} is required`);
    } else {
      showsuccess(input);
    }
  });
}

function getFiledName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener("submit", function(e) {
  e.preventDefault();
  checkRequired([username, email, password, password2]);
});
