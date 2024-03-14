// ************************************************************** change password

let new_password = document.querySelector(".new-password");
let confirm_password = document.querySelector(".confirm-password-change");
let old_password = document.querySelector(".old-password");
let save_btn = document.querySelector("#save_password");



save_btn.addEventListener("click" , function(e){
    e.preventDefault();
    let password = JSON.parse(localStorage.getItem("password"));
    if(old_password.value !== password){
        confirm("Please Enter correct old Password");
    }
    else if(confirm_password.value !== new_password.value){
        confirm("The confirm password is not correct")
    }
    else{
        localStorage.setItem("password" , JSON.stringify(new_password.value));
        confirm("password is change thank you");
        new_password.value = "";
        old_password.value = "";
        confirm_password.value = "";
    }
})

// ********************************************************** show function dashboard and contant

let contant_dashboard = document.querySelector(".contant-dashboard");
let contant_update_profile = document.querySelector(".contant-update_profile");
let contant_order = document.querySelector(".contant-order");
let contant_password = document.querySelector(".contant-password-change");
let contant_address = document.querySelector(".contant-address");

let dashboard = document.querySelector("#dashboard").parentElement;
let order = document.querySelector("#order").parentElement;
let address = document.querySelector("#address").parentElement;
let update_profile = document.querySelector("#update_profile").parentElement;
let password_change = document.querySelector("#password_change").parentElement;

contant_dashboard.style.display = "block";
dashboard.style.background = "rgb(9, 91, 91)";
dashboard.style.color = "#fff";

// **********************************************************


function show(id){
    if(id === "dashboard"){
        contant_dashboard.style.display = "block";
        contant_update_profile.style.display = "none";
        contant_password .style.display = "none";
        contant_order.style.display = "none";
        contant_address.style.display = "none";
        // *************************************
        document.getElementById(id).parentElement.style.background = "rgb(9, 91, 91)";
        document.getElementById(id).parentElement.style.color = "#fff";

        password_change.style.background = "#fff";
        password_change.style.color = "#000";

        update_profile .style.background = "#fff";
        update_profile .style.color = "#000";

        address.style.background = "#fff";
        address.style.color = "#000";

        order.style.background = "#fff";
        order.style.color = "#000";
    }
    else if(id === "order"){
        contant_order.style.display = "block";
        contant_dashboard.style.display = "none";
        contant_update_profile.style.display = "none";
        contant_password.style.display = "none";
        contant_address.style.display = "none";
        // *************************************
        document.getElementById(id).parentElement.style.background = "rgb(9, 91, 91)";
        document.getElementById(id).parentElement.style.color = "#fff";

        password_change.style.background = "#fff";
        password_change.style.color = "#000";

        update_profile.style.background = "#fff";
        update_profile.style.color = "#000";

        address.style.background = "#fff";
        address.style.color = "#000";

        dashboard.style.background = "#fff";
        dashboard.style.color = "#000";
    }
    else if(id === "address"){
        contant_address.style.display = "block";
        contant_order.style.display = "none";
        contant_dashboard.style.display = "none";
        contant_update_profile.style.display = "none";
        contant_password .style.display = "none";
        // *************************************
        document.getElementById(id).parentElement.style.background = "rgb(9, 91, 91)";
        document.getElementById(id).parentElement.style.color = "#fff";

        password_change.style.background = "#fff";
        password_change.style.color = "#000";

        update_profile.style.background = "#fff";
        update_profile.style.color = "#000";


        dashboard.style.background = "#fff";
        dashboard.style.color = "#000";

        order.style.background = "#fff";
        order.style.color = "#000";
    }
    else if(id === "update_profile"){
        contant_update_profile.style.display = "block"
        contant_password .style.display = "none";
        contant_dashboard.style.display = "none";
        contant_order.style.display = "none";
        contant_address.style.display = "none";

        // *************************************
        document.getElementById(id).parentElement.style.background = "rgb(9, 91, 91)";
        document.getElementById(id).parentElement.style.color = "#fff";

        password_change.style.background = "#fff";
        password_change.style.color = "#000";

        dashboard.style.background = "#fff";
        dashboard.style.color = "#000";

        address.style.background = "#fff";
        address.style.color = "#000";

        order.style.background = "#fff";
        order.style.color = "#000";
        
    }
    else if(id === "password_change"){
        contant_password .style.display = "block"
        contant_update_profile.style.display = "none";
        contant_dashboard.style.display = "none";
        contant_order.style.display = "none";
        contant_address.style.display = "none";

        // ***********************************************************

        document.getElementById(id).parentElement.style.background = "rgb(9, 91, 91)";
        document.getElementById(id).parentElement.style.color = "#fff";

        update_profile.style.background = "#fff";
        update_profile.style.color = "#000";

        dashboard.style.background = "#fff";
        dashboard.style.color = "#000";

        address.style.background = "#fff";
        address.style.color = "#000";

        order.style.background = "#fff";
        order.style.color = "#000";
        
    }
    
}

// ********************************************************************************* update username

let update_username = document.querySelector(".update_username")
let savebtn_username = document.querySelector("#save_username")

savebtn_username.addEventListener("click", function(e){
    e.preventDefault();
    if(update_username.value === ""){
        confirm("Please Enter username");
    }
    else{
        localStorage.setItem("username" , update_username.value);
        confirm("username is change thank you");
        update_username.value = "";
    }
    get_user();
})

// ********************************************************************************* log_out btn

let logout_btn = document.querySelector("#logout");

logout_btn.addEventListener("click" , function(e){
    e.preventDefault();
    logout_btn.parentElement.style.background = "rgb(9, 91, 91)";
    logout_btn.parentElement.style.color = "#fff";
    localStorage.clear();
    setTimeout(()=>{
        window.location = "login.html";
    },1500)
})

// ********************************************************************** edit address
try{
    let edit_btn = document.querySelector(".edit");
    let array_item = [];

    edit_btn.addEventListener("click" , function(e){
        e.preventDefault();
        for(let i = 1 ; i <= 5 ; i++){
            array_item[i] = document.querySelector(".span_address" + i).value;
        }
        localStorage.setItem("addres" , JSON.stringify(array_item));
        confirm("Your Addres Is Change Thank You")
    })
    let addres = JSON.parse(localStorage.getItem("addres"));
    for(let i = 1 ; i <= 5 ; i++){
        document.querySelector(".span_address" + i).value = addres[i];
    }
}
catch{
    console.log("error addres")
}

// ************************************************************************

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

// ********************************************************************************************
function get_user(){
    let name = document.querySelector(".username");
        let username = localStorage.getItem("username");
        name.innerHTML = `hello ${username}`

}
get_user();