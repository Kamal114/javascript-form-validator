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

form.addEventListener("submit", function(e) {
  e.preventDefault();
  if (username.value === "") {
    showerror(username, "Username is required");
  } else {
    showsuccess(username);
  }

  if (email.value === "") {
    showerror(email, "Email is required");
  } else {
    showsuccess(email);
  }

  if (password.value === "") {
    showerror(password, "Password is required");
  } else {
    showsuccess(password);
  }

  if (password2.value === "") {
    showerror(password2, "Password2 is required");
  } else {
    showsuccess(password2);
  }
});
