const welcome = document.querySelector('.welcome');

var registration;

registration = JSON.parse(localStorage.getItem("userInformation"));
var index = sessionStorage.getItem('index');
if(index == null){
    location.href = "../index.html"
}else{
    welcome.innerHTML = `Welcome ${registration[index].userName}`;
}



