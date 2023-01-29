import { fav } from "../main";
import { productsData } from "./data";


window.removeFav = function(event){
    let card = event.target.closest(".fav-item");
    card.classList.add("animate__fadeOutLeft");
    card.addEventListener("animationend", function(){
        card.remove();
    })
}

export const addFav = function({id,price,name,img}){
    let div = document.createElement("div");
    div.classList.add("fav-item","p-3","mb-3","border","rounded-3","animate__animated");
    div.innerHTML = `     <div class="row d-flex align-items-center justify-content-evenly" itemId="${id}">
                                <div class="col-6 d-flex justify-content-center">
                                    <img class="img-bag" src="${img}" alt="">
                                </div>
                                <div class="col-6">
                                    <div class="d-flex flex-column">
                                    <div>
                                        <p class="mb-0 text-primary fs-4 fw-bold text-truncate">${name}</p>
                                        <p class="fs-4 mb-3 mt-3">$ <span id="">${price}</span></p>
                                    </div>
                                    <button class="btn btn-outline-primary mb-3" onclick="removeFav(event)">
                                        <i class="bi bi-trash pe-none"></i>
                                    </button>
                                    </div>
                                </div>
                            </div>`
    fav.append(div);
}

export const addToFavList = function(e){
    let card = e.target.closest(".card-item");
    let itemId = card.getAttribute("item-id");
    let itemDetail = productsData.find( pd => pd.id === parseInt(itemId));

    swal({
        title: "Are you sure to add this product?",
        text: "If u cancel this product, it can't be in the Fav List",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("You Add This Item In Fav List", {
            icon: "success",
          });
          addFav(itemDetail);
          }
        else {
          swal("You didn't add to Fav List");
        }
      });
}

