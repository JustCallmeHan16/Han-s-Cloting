import { badges, bag, total ,itemsRow} from "../main";
import { productsData } from "./data";

function itemCount(){
  badges.forEach( (badge) => {
    badge.innerHTML++;
  })
}

function decCount(){
  badges.forEach( (badge) => {
    badge.innerHTML -= 1;
  })
}

let totalCost = function (itemPrice){
  let currentPrice = document.querySelectorAll("#item-price");
  let result = [...currentPrice].reduce( (pv,cv) => pv+parseFloat(cv.innerHTML),0).toFixed(1);
  total.innerHTML = result;
}

window.del = function(event,price){
  let currentItemCard = event.target.closest(".item-in-bag");
  currentItemCard.classList.add("animate__fadeOutLeft");
  let itemPrice = currentItemCard.querySelector("#item-price");
  currentItemCard.addEventListener("animationend",function(){
    currentItemCard.remove();
    let cost = (itemPrice.innerHTML -=price).toFixed(1)
    itemPrice.innerHTML = cost;
    totalCost(cost);
    decCount();
  })
}

window.inc = function(event,price){
  let currentItemCard = event.target.closest(".item-in-bag");
  let itemQuantity = currentItemCard.querySelector("#item-q");
  let itemPrice = currentItemCard.querySelector("#item-price");
  itemQuantity.valueAsNumber += 1;
  itemPrice.innerText = (itemQuantity.valueAsNumber * price).toFixed(1); 
  totalCost();
}

window.dec = function(event,price){
  let currentItemCard = event.target.closest(".item-in-bag");
  let itemQuantity = currentItemCard.querySelector("#item-q");
  let itemPrice = currentItemCard.querySelector("#item-price");
  if(itemPrice.innerHTML > price){
    itemQuantity.valueAsNumber -= 1;
    let cost = (itemPrice.innerHTML -=price).toFixed(1)
    itemPrice.innerHTML = cost;
    totalCost(cost);
  }
  else if(itemQuantity.valueAsNumber = 1){
    currentItemCard.classList.add("animate__fadeOutLeft")
    currentItemCard.addEventListener("animationend",function(){
      currentItemCard.remove();
      let cost = (itemPrice.innerHTML -=price).toFixed(1)
      itemPrice.innerHTML = cost;
      totalCost(cost);
      decCount();
    })
  }
 
}

let addToCart = function({id,name,price,img}){
let div = document.createElement("div");
div.classList.add("p-3","rounded-3","item-in-bag","d-flex","justify-content-evenly","border","mt-2","animate__animated","align-items-center");
div.innerHTML = `<div class="row">
                  <div class="item-bag col-6 d-flex justify-content-center" item-id="${id}">
                    <img src="${img}" class="img-bag" alt="">
                  </div>
                  <div class="col-6 d-flex flex-column justify-content-evenly">
                    <p class="mb-0 text-primary fs-5 fw-bold text-truncate">${name}</p>
                    <p class="fs-4 mb-3 mt-3">$ <span id="item-price">${price}</span></p>
                  <div class="input-group input-group-sm mb-3">
                      <button class="btn btn-primary decBtn" onclick="dec(event,${price})">
                        <i class="bi bi-dash pe-none" ></i>
                      </button>
                      <input type="number" value="1" id="item-q" class="text-end w-25">
                      <button class="btn btn-primary decBtn" id="plus" onclick="inc(event,${price})">
                        <i class="bi bi-plus pe-none"></i>
                      </button>
                  </div>
                  <button class="btn btn-outline-primary mb-3" onclick="del(event,${price})">
                    <i class="bi bi-trash pe-none"></i>
                  </button>
                </div>`;
bag.appendChild(div);
itemCount();
totalCost();
}

export let addToBag = function(e){
    let currentItemCard = e.target.closest(".card-item");
    let itemId = currentItemCard.getAttribute("item-id");
    let itemDetail = productsData.find( pd => pd.id === parseInt(itemId));

    swal({
        title: "Are you sure to add this product?",
        text: "If u cancel this product, it can't be in the shop bag",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Thanks for purchased", {
            icon: "success",
          });
          addToCart(itemDetail);
          }
        else {
          swal("You didn't add to cart");
        }
      });

}