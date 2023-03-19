var email_placeholder = document.querySelectorAll(".email span");
var pass_placeholder = document.querySelectorAll(".password span");

function placeHolderDelay(placeHolder) {
  for (var i = 0; i < placeHolder.length; i++) {
    placeHolder[i].style.transitionDelay = `${i * (placeHolder.length / 200)}s`;
  }
}

placeHolderDelay(email_placeholder);
placeHolderDelay(pass_placeholder);

var email = document.getElementsByName("email")[0];
var password = document.getElementsByName("password")[0];
var emailInputGroup = document.querySelector(".email-group");
var passInputGroup = document.querySelector(".password-group");

function placeHolderAnim(inputField, placeHolder, inputGroup) {
  inputField.addEventListener("focusin", function () {
    placeHolder.forEach(function (element) {
      element.classList.add("active");
      inputGroup.classList.add("active");
    });
  });
  inputField.addEventListener("focusout", function () {
    placeHolder.forEach(function (element) {
      if (inputField.value != "") {
        element.classList.add("active");
        inputGroup.classList.add("active");
      } else {
        element.classList.remove("active");
        inputGroup.classList.remove("active");
      }
    });
  });
}

placeHolderAnim(email, email_placeholder, emailInputGroup);
placeHolderAnim(password, pass_placeholder, passInputGroup);
