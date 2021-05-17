// global variables
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const warning = document.querySelector(".warning");
const signup = document.querySelector(".signup");
const uname = document.querySelector(".name");
var emailRgx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var Pass = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);
var checkName = "";
var checkEmail = "";
var checkPass = "";
// check local storage
if (localStorage.getItem("userInformation") == null) {
  var registration = [];
} else {
  var registration = JSON.parse(localStorage.getItem("userInformation"));
}

// functions
// looping
function loopOverLocalStorage() {
    for (let i = 0; i < registration.length; i++) {
        checkName += registration[i].userName;
        checkEmail += registration[i].userEmail;
        checkPass += registration[i].userPassword;
      }
  }
  
// clearing inputs
let clear = () => {
    uname.value = "";
    email.value = "";
    password.value = "";
  };
  // create info
let createInfo = () => {
    loopOverLocalStorage();
  // validate information
  switch (true) {
    case email.value === "":
    case password.value === "":
    case uname.value === "":
      warning.innerText = "All Input Are Required";
      warning.style.color = "red";
      break;
    case checkName.includes(uname.value):
      warning.innerHTML = "This name already exist";
      warning.style.color = "red";
      break;
    case checkEmail.includes(email.value):
      warning.innerHTML = "This email already exist";
      warning.style.color = "red";
      break;
    case emailRgx.test(email.value) === false:
        warning.innerHTML = "Enter A Valid Email Address";
        warning.style.color = "red";
      break;
      case Pass.test(password.value) === false:
        warning.innerHTML = "Your passowrd length should not be less than 8 and include uppercase letter, numbers, Special Character";
        warning.style.color = "red";
        warning.style.fontSize = "16px";
        break;
    default:
      warning.innerHTML = "You Have Created An Account";
      warning.style.color = "green";
      const userInfo = {
        userEmail: email.value,
        userPassword: password.value,
        userName: uname.value,
      };
      // saving user info in registration array
      registration.push(userInfo);
      //setting localstorage
      localStorage.setItem("userInformation", JSON.stringify(registration));
      clear();
  }
};


// adding event listener 
signup.addEventListener('click', createInfo);
