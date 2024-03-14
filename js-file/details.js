
let contant = document.querySelector(".contant");


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

// *********************************************************************************


let product_details = JSON.parse(localStorage.getItem("product_details"))


function show_product(){

        product_details.map((item)=>{

            contant.innerHTML = `

        <div class="contant-details">
                <div class="box-imag">
                    <img class="main-img-box" src="${item.img}" alt="">
                    <div class="img-transation">
                        <img onclick="show(this.src)" id="img1" src="img/category-1.jpg" alt="">
                        <img onclick="show(this.src)" id="img2" src="img/product-11-1.jpg" alt="">
                        <img onclick="show(this.src)" id="img3" src="img/showcase-img-3.jpg" alt="">
                    </div>
                </div>
                <div class="box-text">
                    <h2 class="title">${item.name}</h2>
                    <span class="brand">Brandis : adidas</span>
                    <div class="price">
                        <span class="new-price"> $ ${item.price} </span>
                        <span class="old-price">$200.00</span>
                        <span class="offer">25%off</span>
                    </div>
                    <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio alias optio fugiat! Impedit saepe corporis obcaecati nobis vero aperiam facilis dicta mollitia commodi ipsa, incidunt accusamus neque dolores veniam est.</p>
                    <div class="section-size">
                        <span class="name">size</span>
                        <div class="size">
                            <button  class="btn-size" onclick = "size(this.id)" id = "M" >M</button>
                            <button  class="btn-size" onclick = "size(this.id)" id = "L" >L</button>
                            <button  class="btn-size" onclick = "size(this.id)" id = "XL" >XL</button>
                            <button  class="btn-size" onclick = "size(this.id)" id = "XXL" >XXL</button>
                        </div>
                    </div>
                    <div class="quantity-and-button">
                        <input class="qnt" type="number" value="1">
                        <button onclick = "addcart(this.parentElement)"  class="addcart">Add To Cart</button>
                        <i onclick = "addfavorite(this.parentElement)" class="fa-regular fa-heart favorite"></i>
                    </div>
                    <div class="data-product">
                        <span>sku : fwm15vkt</span>
                        <span>tag cloth,women dress</span>
                        <span>Available, 8items in stock</span>
                    </div>
                </div>
            </div>
        
        `
        })
    
}

show_product();

// ****************************************************************


let main_img_box = document.querySelector(".main-img-box");

function show(src){
    main_img_box.src = src;
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
// ******************************************************************

// ********************************************************* add favorite section

let count = document.querySelector(".count");
let favrite = document.querySelectorAll(".fa-heart");
let array_item = JSON.parse(localStorage.getItem("favorite-close"));
count.innerHTML = array_item.length;



function addfavorite(parent){
    let parent2 = parent.parentElement;
    let parent3 = parent2.parentElement;
    parent3.querySelector(".fa-heart").style.color = "red";
    let price = parent3.querySelector(".new-price").innerHTML;
    let name = parent3.querySelector(".title").innerHTML;
    let img = parent3.querySelector(".main-img-box").src;


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

// *************************************************************** section add to cart


let countcart = document.querySelector(".countcart");
let array_cart = JSON.parse(localStorage.getItem("add_cart"));
countcart.innerHTML = array_cart.length;



function addcart(parent){
    let parent2 = parent.parentElement;
    let parent3 = parent2.parentElement;
    let price = parent3.querySelector(".new-price").innerHTML;
    let name = parent3.querySelector(".title").innerHTML;
    let img = parent3.querySelector(".main-img-box").src;
    let qnt_value = parent3.querySelector(".qnt").value;


    let proitem = {img , price , name , qnt_value};
    
    if(array_cart.find((item) => item.name === proitem.name)){
        confirm("the product alredy been");
    }
    else{
        array_cart.push(proitem)
    }
    localStorage.setItem("add_cart" , JSON.stringify(array_cart))

    count.innerHTML = array_cart.length;
}

// *************************************************************** section size

let pricee = document.querySelector(".new-price");
let price = parseFloat(pricee.innerHTML.replace("$" , ""))

function size(id){
    

    if(id === "M"){
        pricee.innerHTML = Number(price) - 60;
    }
    else if(id === "L"){
        pricee.innerHTML = Number(price) - 40;
    }
    else if(id === "XL"){
        pricee.innerHTML = Number(price) - 20;
    }
    else if(id === "XXL"){
        pricee.innerHTML = Number(price);
    }
    
    
}

// ============================================================== quantity section




document.addEventListener('DOMContentLoaded',loadfood);

function loadfood(){
    loadcontent();
};

function loadcontent(){

    // ***********************************************

    let qtyElement = document.querySelectorAll('.qnt');
        qtyElement.forEach(input=>{
            input.addEventListener('change' , ChangeQty);
        });

    // **********************************************

    update_total();
}

function ChangeQty(){
    let parent = this.parentElement;
    let parent2 = parent.parentElement;
    if(isNaN(this.value) || this.value < 1){
        this.value = 1;
    }
    update_total(parent2 , this.value)
}



function update_total(parent2 , value){
    let subtotal = parent2.querySelector(".new-price");
    let priceelment = parent2.querySelector(".new-price");
    let price = parseFloat(priceelment.innerHTML.replace("$" , ""));
    let qnt_value = Number(value);
    let total = price * qnt_value;  
    subtotal.innerHTML = total;
}


// ***********************************************************************************

// *********************************************************************************************

let btn_link = document.querySelector(".span")
let link = document.querySelector(".contant-link")
btn_link.addEventListener("click" , function(e){
    e.preventDefault();
    link.classList.toggle("hide")
})