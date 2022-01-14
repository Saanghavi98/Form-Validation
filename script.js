function validate(){


const mobile = document.getElementById('mobile').value;
const username = document.getElementById('username').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const confirmPassword = document.getElementById('confirmPassword').value;

const mobileError = document.getElementById('mobileError');
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');


const mobileHide = document.getElementById('mobileHide');
const usernameHide = document.getElementById('usernameHide');
const emailHide = document.getElementById('emailHide');
const passwordHide = document.getElementById('passwordHide');
const confirmPasswordHide = document.getElementById('confirmPasswordHide');

// MOBILE NUMBER VALIDATION
const mobileExp = /^[789]\d{9}$/

if(mobileExp.test(mobile)){
    mobileError.innerHTML = " ";
    mobileHide.style.display = "none";
   
} else{
    mobileError.innerHTML = "Invalid mobile number";
    mobileHide.style.display = "none";
    return false;
}


// USERNAME VALIDATION
let usernameExp = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[@-_])[a-zA-Z0-9@-_\S]{5,20}$/

if(usernameExp.test(username)){
    usernameError.innerHTML = " ";
    usernameHide.style.display = "none";
    
} else{
    usernameError.innerHTML = "Invalid username";
    usernameHide.style.display = "none";
    return false
}


// EMAIL VALIDATION
let emailExp = /^\w{4,}@{1}\w{2,}\.{1}[A-Za-z]{2,5}$/;

if(emailExp.test(email)){
    emailError.innerHTML =" ";
    emailHide.style.display = "none";
}else{
    emailError.innerHTML ="Invalid email ";
    emailHide.style.display = "none";
    return false;
}


// PASSWORD VALIDATION
let passwordExp = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@.$&])[a-zA-Z0-9!@.$&\S]{5,20}$/

if(passwordExp.test(password)){
    passwordError.innerHTML = " ";
    passwordHide.style.display = "none";
}else{
    passwordError.innerHTML = "Invalid Password";
    passwordHide.style.display = "none";
    return false
}

// CONFIRM PASSWORD VALIDATION
if(confirmPassword.match(password)){
    confirmPasswordError.innerHTML = " ";
    confirmPasswordHide.style.display = "none";
}else{
    confirmPasswordError.innerHTML = "Password does not match";
    confirmPasswordHide.style.display = "none";
    return false
}



}



