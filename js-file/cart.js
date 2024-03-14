

let count = document.querySelector(".count")
let favorite = JSON.parse(localStorage.getItem("favorite-close"));

count.innerHTML = favorite.length;


// *********************************************************************

let cart_product = JSON.parse(localStorage.getItem("add_cart"))
let countcart = document.querySelector(".countcart");

let contant_box  = document.querySelector(".contant-box");
function show_cart(){
    cart_product.map((item)=>{
        contant_box.innerHTML +=`
    
            <div class="product_favorite">
                <img  src="${item.img}" alt="">
                <p  class="title-cart">${item.name}</p>
                <span  class="price-cart ">${item.price}</span>
                <input class="qnty" type="number" value = "${item.qnt_value}">
                <span class="subtotal">${item.price}</span>
                <i onclick = "remove(this.parentElement)"  class="fa-solid fa-heart remove"></i>
            </div>
            
    
            `
    })
    countcart.innerHTML = cart_product.length;
}

show_cart();



// *********************************** get quantity

try{

    document.addEventListener('DOMContentLoaded',loadfood);

    function loadfood(){
        loadcontent();
    };

    function loadcontent(){

        // ***********************************************

        let qtyElement = document.querySelectorAll('.qnty');
            qtyElement.forEach(input=>{
                input.addEventListener('change' , ChangeQty);
            });

        // **********************************************

        update_total();
    }

    function ChangeQty(){
        let parent = this.parentElement;
        if(isNaN(this.value) || this.value < 1){
            this.value = 1;
        }
        update_total(parent , this.value)
    }



    function update_total(parent , value){
        
        
            let subtotal = parent.querySelector(".subtotal");
            let priceelment = parent.querySelector(".price-cart");
            let price = parseFloat(priceelment.innerHTML.replace("$" , ""));
            let qnt_value = Number(value)
            let total = price * qnt_value;
            subtotal.innerHTML = total;
        
        
    }
}
catch{
    console.log("error")
}

// **************************************** section remove

function remove(parent){
    let title = parent.querySelector(".title-cart").innerHTML;
    cart_product = cart_product.filter(item => item.name !== title);
    parent.remove();
    cart_product.splice(1 , parent.remove() );
    localStorage.setItem("add_cart" , JSON.stringify(cart_product))
}

// /*////////////////////////////////////// section search

    
function search(id){
    
    let search_value = document.querySelector("#search").value.toUpperCase();
    let search_input = document.querySelector("#search-input").value.toUpperCase();
    let product_favorite = document.querySelectorAll(".product_favorite");
    let title = document.querySelectorAll(".title-cart");
    
    if(id === "search"){
        for(let i = 0 ; i < title.length ; i++){
            if(title[i].innerHTML.toUpperCase().indexOf(search_value) >= 0){
                product_favorite[i].style.display = "";
            }
            else{
                product_favorite[i].style.display = "none";
            }
        }
    }
    
    else if(id === "search-input"){
        for(let i = 0 ; i < title.length ; i++){
            if(title[i].innerHTML.toUpperCase().indexOf(search_input) >= 0){
                product_favorite[i].style.display = "";
            }
            else{
                product_favorite[i].style.display = "none";
            }
        }
    }

}



// *********************************************************************************************

let btn_link = document.querySelector(".span")
let link = document.querySelector(".contant-link")
btn_link.addEventListener("click" , function(e){
    e.preventDefault();
    link.classList.toggle("hide")
})
