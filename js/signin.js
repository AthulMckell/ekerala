let names = document.getElementsByClassName("name");
let nameErr = document.getElementById("nameErr");
let unameErr = document.getElementById("unameErr");
let email = document.getElementById("inputEmail4");
let emailError = document.getElementById("emailError");
let pwd = document.getElementsByClassName("pwd");
let pwderr = document.getElementsByClassName("pwderr");
let pwdconf = document.getElementsByClassName("pwdconf");
let pwdconferr = document.getElementsByClassName("pwdconferr");

function validate(){
    let name_regexp = /^[A-Za-z]+$/;
    let email_regexp = /^([\w\-.]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})$/;
    let number_regexp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let strong_regexp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,}$/;
    let medium_regexp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    let poor_regexp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;


    if (name_regexp.test(names[0].value)) {
        names[0].style.border = "2px green solid";
        nameErr.innerHTML = "";
    }
    else {
        names[0].style.border = "2px red solid";
        nameErr.innerHTML = "Name should only contain alphabets";
    }
    if (name_regexp.test(names[1].value)) {
        names[1].style.border = "2px green solid"
        unameErr.innerHTML = ""
    }
    else {
        names[1].style.border = "2px red solid";
        unameErr.innerHTML = "Name should only contain alphabets";
    }
    if (email_regexp.test(email.value)) {
        email.style.border = "2px green solid";
        emailError.innerHTML = "";
    }
    else {
        email.style.border = "2px red solid";
        emailError.innerHTML = "Email is invalid";
    }
    if (strong_regexp.test(pwd.value)) {
        pwd.style.border = "2px green solid";
        pwderr.innerHTML = "Strong password!";
        pwderr.style.color = "green";
    }
    else if (medium_regexp.test(pwd.value)) {
        pwd.style.border = "2px orange solid";
        pwderr.innerHTML = "Medium password. Increase the length to 10 to make it strong!";
        pwderr.style.color = "orange";
    }
    else if (poor_regexp.test(pwd.value)) {
        pwd.style.border = "2px red solid";
        pwderr.innerHTML = "Poor password. Use symbols and increase the length to make it strong!";
        pwderr.style.color = "red";
    }
    else {
        pwd.style.border = "2px red solid";
        pwderr.innerHTML = "Invalid. Minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number ";
        pwderr.style.color = "red";
    }
    if ( pwdconf.value != pwd.value ) {
        pwdconf.style.border = "2px red solid";
        pwdconferr.innerHTML = "Passwords do not match!";
        pwdconf.style.color = "red";
    }
    else {
        pwdconf.style.border = "2px green solid";
        pwdconferr.innerHTML = "Passwords match!";
        pwdconf.style.color = "green";
    }
    
}