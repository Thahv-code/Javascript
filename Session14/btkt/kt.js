document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    const user = {
      email: emailValue,
      password: passwordValue,
    };

    console.log("User :", user);
  });
});