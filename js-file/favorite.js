let favorite = JSON.parse(localStorage.getItem("favorite-close"));
let contant_box = document.querySelector(".contant-box");
let count = document.querySelector(".count");
let countcart = document.querySelector(".countcart");



function show(){
    favorite.map((item)=>{
        contant_box.innerHTML +=`
        
        
        <div class="product_favorite">
            <img class="img_favorite"  src="${item.img}" alt="">
            <p  class="title">${item.name}</p>
            <span   class="price ">${item.price}</span>
            <button onclick = "add_cart(this.parentElement)"  class="add-cart">add to cart</button>
            <i  onclick = "remove(this.parentElement)" class="fa-solid fa-heart remove"></i>
        </div>
        
        `
        
    })

    count.innerHTML = favorite.length;
}

show();

//****************************************************************   remove section */
function remove(parent){
    let title = parent.querySelector(".title").innerHTML;
    favorite = favorite.filter((item)=>item.name !== title)
    parent.remove();
    favorite.splice(1 , parent.remove());
    localStorage.setItem("favorite-close" , JSON.stringify(favorite))
}

//**************************************************************   search section */

function search(id){
    
    let search_value = document.querySelector("#search").value.toUpperCase();
    let search_input = document.querySelector("#search-input").value.toUpperCase();
    let product_favorite = document.querySelectorAll(".product_favorite");
    let title = document.querySelectorAll(".title");
    
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


// *************************************************************

let array_item_cart = JSON.parse(localStorage.getItem("add_cart"));

function add_cart(parent){
    let price = parent.querySelector(".price").innerHTML;
    let name = parent.querySelector(".title").innerHTML;
    let img = parent.querySelector(".img_favorite").src;

    
    let proitem_cart = {price , name , img};
    if(array_item_cart.find((item) => item.name === proitem_cart.name)){
        confirm("the product alredy been");
    }
    else{
        array_item_cart.push(proitem_cart)
    }
    localStorage.setItem("add_cart" , JSON.stringify(array_item_cart))
    
}

countcart.innerHTML = array_item_cart.length;


// *************************************************************** section add to cart

// *********************************************************************************************

let btn_link = document.querySelector(".span")
let link = document.querySelector(".contant-link")
btn_link.addEventListener("click" , function(e){
    e.preventDefault();
    link.classList.toggle("hide")
})