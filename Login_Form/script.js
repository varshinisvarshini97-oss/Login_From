const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const message = document.getElementById("message");
const toggle = document.getElementById("togglePassword");

toggle.addEventListener("click", () => {

if(password.type==="password"){
password.type="text";
toggle.textContent="🙈";
}
else{
password.type="password";
toggle.textContent="👁️";
}

});

form.addEventListener("submit",function(e){

e.preventDefault();

let user=username.value.trim();
let pass=password.value.trim();

let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let mobilePattern=/^[6-9]\d{9}$/;

if(user==""){
message.style.color="red";
message.innerHTML="Enter Email or Mobile Number";
return;
}

if(!(emailPattern.test(user)||mobilePattern.test(user))){
message.style.color="red";
message.innerHTML="Enter Valid Email or Mobile Number";
return;
}

if(pass==""){
message.style.color="red";
message.innerHTML="Enter Password";
return;
}

if(pass.length<8){
message.style.color="red";
message.innerHTML="Password must contain at least 8 characters";
return;
}

// Save user name
localStorage.setItem("user",user);

message.style.color="green";
message.innerHTML="Login Successful...";

// Redirect after 1 second
setTimeout(() => {
    window.location.href = "welcome.html";
}, 1000);
});