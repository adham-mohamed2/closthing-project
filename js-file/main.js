// *********************************************** start section scroll from category
function scrolll() {
    var left = document.querySelector(".main-section-category")
    left.scrollBy(350, 0);
}
function scrollr() {
    var right = document.querySelector(".main-section-category")
    right.scrollBy(-350, 0);
}

// ********************************************* start section scroll new-arrived
function scrollll() {
    var left = document.querySelector(".product-new-arrived")
    left.scrollBy(350, 0);
}
function scrollrr() {
    var right = document.querySelector(".product-new-arrived")
    right.scrollBy(-350, 0);
}



// *********************************************** start section  features

    let popular = document.querySelector("#popular");
    let new_added = document.querySelector("#newadded");
    let feature = document.querySelector("#feature");


feature.addEventListener("click" , (e)=>{
    e.preventDefault();
    showfeature()
    popular.style.color = "#000";
    popular.style.background = "whitesmoke";
    new_added.style.color = "#000";
    new_added.style.background = "whitesmoke";
    feature.style.color = "darkgreen";
    feature.style.background = "burlywood";
})
popular.addEventListener("click" , (e)=>{
    e.preventDefault();
    showpopular();
    popular.style.color = "darkgreen";
    popular.style.background = "burlywood";
    new_added.style.color = "#000";
    new_added.style.background = "whitesmoke";
    feature.style.color = "#000";
    feature.style.background = "whitesmoke";
})
new_added.addEventListener("click" , (e)=>{
    e.preventDefault();
    shownewadded();
    new_added.style.color = "darkgreen";
    new_added.style.background = "burlywood";
    feature.style.color = "#000";
    feature.style.background = "whitesmoke";
    popular.style.color = "#000";
    popular.style.background = "whitesmoke";
})




function showfeature() {
    let popular = document.querySelector(".popular");
    let new_added = document.querySelector(".new-added");
    let feature = document.querySelector(".feature");
    feature.classList.remove("active-tab");
    popular.classList.add("active-tab");
    new_added.classList.add("active-tab");
    
}
function showpopular(){
    let popular = document.querySelector(".popular");
    let new_added = document.querySelector(".new-added");
    let feature = document.querySelector(".feature");
    popular.classList.remove("active-tab");
    new_added.classList.add("active-tab");
    feature.classList.add("active-tab")

}
function shownewadded(){
    let popular = document.querySelector(".popular");
    let new_added = document.querySelector(".new-added");
    let feature = document.querySelector(".feature");
    popular.classList.add("active-tab");
    new_added.classList.remove("active-tab");
    feature.classList.add("active-tab")

}

// ************************************************************************** end section show item links

/////////////////////////////////////////////////////////// details section

let imgs = document.querySelectorAll(".img-box-item");
imgs.forEach(item=>{
    item.addEventListener("click" , click_img);
})

function click_img(e){
    e.preventDefault();

        let parent = this.parentElement;
        let parent2 = parent.parentElement;
        let img = parent2.querySelector(".img-box-item").src;
        let priceel = parent2.querySelector(".price-product");
        let price = parseFloat(priceel.innerHTML.replace("$" , ""));
        let name = parent2.querySelector(".name-box-item").innerHTML;

        let prodetails = {img , price , name};
        let array_details = [];
        array_details.push(prodetails);
        localStorage.setItem("product_details" , JSON.stringify(array_details))
        window.location = "details.html"
    
}

// ********************************************************* add favorite section
let count = document.querySelector(".count");
let favrite = document.querySelectorAll(".fa-heart");
favrite.forEach(item=>{
    item.addEventListener("click" , addfavorite)
})

let array_item;

if(localStorage.getItem("favorite-close")){
    array_item = JSON.parse(localStorage.getItem("favorite-close"));
    count.innerHTML = array_item.length;
}
else{
    array_item = [];
}



function addfavorite(){
    let parent = this.parentElement;
    parent.querySelector(".fa-heart").style.color = "red";
    let price = parent.querySelector(".price-product").innerHTML;
    let name = parent.querySelector(".name-box-item").innerHTML;
    let img = this.parentElement.querySelector(".img-box-item").src;


    let proitem = {img , price , name};
    if(array_item.find((item) => item.name === proitem.name)){
        confirm("the product alredy been");
    }
    else{
        array_item.push(proitem)
    }
    localStorage.setItem("favorite-close" , JSON.stringify(array_item))

    count.innerHTML = array_item.length;
}

// ********************************************************* section search


function search(id){

    let search_value = document.querySelector("#search").value.toUpperCase();
    let search_input = document.querySelector("#search-input").value.toUpperCase();
    let box_item = document.querySelectorAll(".box-item");
    let title = document.querySelectorAll(".name-box-item");
    
    
    if(id === "search"){
        for(let i = 0 ; i < title.length ; i++){
            if(title[i].innerHTML.toUpperCase().indexOf(search_value) >= 0){
                box_item[i].style.display = "";
            }
            else{
                box_item[i].style.display = "none";
            }
        }
    }
    
    else if(id === "search-input"){
        for(let i = 0 ; i < title.length ; i++){
            if(title[i].innerHTML.toUpperCase().indexOf(search_input) >= 0){
                box_item[i].style.display = "";
            }
            else{
                box_item[i].style.display = "none";
            }
        }
    }
}

// *************************************************************** section add to cart

let add_cart = document.querySelectorAll(".fa-cart-plus");
let countcart = document.querySelector(".countcart");

add_cart.forEach(item=>{
    item.addEventListener("click" , addcart)
})

let array_item_cart ;

if(localStorage.getItem("add_cart")){
    array_item_cart = JSON.parse(localStorage.getItem("add_cart"));
    countcart.innerHTML = array_item_cart.length;
}
else{
    array_item_cart = [];
}




function addcart(){
    let parent = this.parentElement;
    let parent2 = parent.parentElement;
    let parent3 = parent2.parentElement;
    
    let price = parent3.querySelector(".price-product").innerHTML;
    let name = parent3.querySelector(".name-box-item").innerHTML;
    let img = parent3.querySelector(".img-box-item").src;
    let qnt_value = 1;
    
    let proitem_cart = {price , name , img , qnt_value};

    if(array_item_cart.find((item) => item.name === proitem_cart.name)){
        confirm("the product alredy been");
    }
    else{
        array_item_cart.push(proitem_cart)
    }
    localStorage.setItem("add_cart" , JSON.stringify(array_item_cart))

    countcart.innerHTML = array_item_cart.length;

    

}

// *********************************************************************************************

let btn_link = document.querySelector(".span")
let link = document.querySelector(".contant-link")
btn_link.addEventListener("click" , function(e){
    e.preventDefault();
    link.classList.toggle("hide")
})