let username_register = document.querySelector(".user_name");
let email_register = document.querySelector(".register-email");
let password_register = document.querySelector(".register-password");
let confirm_password = document.querySelector(".confirm-password");
let register = document.querySelector(".register");

register.addEventListener("click" , function(e){
    e.preventDefault();
    if(username_register.value === "" || email_register.value === "" || password_register.value === ""){
        confirm("please Fill All Data")
    }
    else if(password_register.value !== confirm_password.value){
        confirm("your password is not same");
    }
    else{
        localStorage.setItem("username" , username_register.value);
        localStorage.setItem("email" , email_register.value);
        localStorage.setItem("password" , JSON.stringify(password_register.value));

        username_register.value = "";
        email_register.value = "";
        password_register.value = "";
        confirm_password.value = "";
        window.onload();
    }
})

// ************************************************************ login section
let login_btn = document.querySelector(".login");
let email_login = document.querySelector(".login-email");
let password_login = document.querySelector(".login-password");


login_btn.addEventListener("click" , function(e){
    e.preventDefault();
    let email = localStorage.getItem("email");
    let password = JSON.parse(localStorage.getItem("password"));
    if(email_login.value === "" || password_login.value === ""){
        confirm("please Fill All Data");
    }
    else if(email_login.value !== email){
        confirm("please Enter the correct email");
    }
    else if(password_login.value !== password){
        confirm("Please Enter the correct password");
    }
    else{
        confirm("Now You Have An Account Thank You")
        email_login.value ="";
        password_login.value ="";
        setTimeout(()=>{
            window.location = "index.html";
        },1500)
    }
    
    
})

// ************************************************************************************

let count = document.querySelector(".count")
let favorite = JSON.parse(localStorage.getItem("favorite-close"));

count.innerHTML = favorite.length;

// ************************************************************************************

let countcart = document.querySelector(".countcart")
let product_cart = JSON.parse(localStorage.getItem("add_cart"));

countcart.innerHTML = product_cart.length;


// *********************************************************************************************

let btn_link = document.querySelector(".span")
let link = document.querySelector(".contant-link")
btn_link.addEventListener("click" , function(e){
    e.preventDefault();
    link.classList.toggle("hide")
})