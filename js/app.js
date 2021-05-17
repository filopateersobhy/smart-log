const email = document.querySelector(".email");
const password = document.querySelector(".password");
const login = document.querySelector(".log");
const warning = document.querySelector(".warning");
var index;
var registration;

if (JSON.parse(localStorage.getItem("userInformation") != null)) {
  registration = JSON.parse(localStorage.getItem("userInformation"));
}

let validate = () => {
  
  if (email.value === "" || password.value === "") {
    warning.innerHTML = "All Inputs Are Required";
    warning.style.color = "red";
  }else if (registration == undefined){
    warning.innerHTML = "Invalid Email or Password";
    warning.style.color = "red";
  }
  else {
    for (let i = 0; i < registration.length; i++) {
     if (
        registration[i].userEmail == email.value &&
        registration[i].userPassword == password.value
      ) {
        index = i;
        sessionStorage.setItem("index", index);
        location.href = "home/home.html";
      } else if (
        registration[i].userEmail === email.value &&
        registration[i].userPassword !== password.value
      ) {
        warning.innerText = "Invalid password";
        warning.style.color = "red";
      } else if (
        registration[i].userEmail !== email.value &&
        registration[i].userPassword !== password.value
      ) {
        warning.innerHTML = "This Email Does Not Exist";
        warning.style.color = "red";
      }
    }
  }
};

login.addEventListener("click", getUserInfo);

function getUserInfo() {
  validate();
}
