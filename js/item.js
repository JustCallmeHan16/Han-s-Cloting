import { itemsRow, men} from "../main";

export let clothingForMen = function ({id,name,price,img}){
    let div = document.createElement("div");
    div.classList.add("col-lg-3","col-md-4","clothing","animate__animated","animate__fadeIn","col-sm-6");
    div.innerHTML = `     <div item-id="${id}" class="p-4 card-item rounded-3">
                                <img class="w-100 rounded-3" src="${img}" alt="">
                                <div class="d-flex justify-content-between align-items-center pd-info mt-1">
                                    <p class="text-primary mb-0 fs-4 text-truncate">${name}</p>
                                    <i class="bi bi-heart fs-4 text-primary"></i>
                                </div>
                                <p class="text-primary fs-4">$ <span class="price">${price}</span></p>
                                <button class="btn btn-primary w-100"><i class="bi bi-cart pe-none"></i></button>
                            </div>`
    men.classList.add("active")
    itemsRow.append(div)
}
export let createHoodies = function ({id,name,price,img}){
    let div = document.createElement("div");
    div.classList.add("col-lg-3","col-md-4","hoodie","animate__animated","animate__fadeIn","col-sm-6");
    div.innerHTML = `     <div item-id="${id}" class="p-4 card-item rounded-3">
                                <img class="w-100 rounded-3" src="${img}" alt="">
                                <div class="d-flex justify-content-between align-items-center pd-info mt-1">
                                <p class="text-primary mb-0 fs-4 text-truncate">${name}</p>
                                <i class="bi bi-heart fs-4 text-primary"></i>
                                </div>
                                <p class="text-primary fs-4">$ <span class="price">${price}</span></p>
                                <button class="btn btn-primary w-100"><i class="bi bi-cart pe-none"></i></button>
                            </div>`
    men.classList.add("active")
    itemsRow.append(div)
}

export let menClothing = function ({id,name,price,img}){
    let div = document.createElement("div");
    div.classList.add("col-lg-3","col-md-4","clothing","animate__animated","animate__fadeIn","col-sm-6");
    div.innerHTML = `     <div item-id="${id}" class="p-4 card-item rounded-3">
                                <img class="w-100 rounded-3" src="${img}" alt="">
                                <div class="d-flex justify-content-between align-items-center pd-info mt-1">
                                <p class="text-primary mb-0 fs-4 text-truncate">${name}</p>
                                <i class="bi bi-heart fs-4 text-primary"></i>
                                </div>
                                <p class="text-primary fs-4">$ <span class="price">${price}</span></p>
                                <button class="btn btn-primary w-100"><i class="bi bi-cart pe-none"></i></button>
                            </div>`
    men.classList.add("active")
    itemsRow.append(div)
}

export let menSweaters = function ({id,name,price,img}){
    let div = document.createElement("div");
    div.classList.add("col-lg-3","col-md-4","sweater","animate__animated","animate__fadeIn","col-sm-6");
    div.innerHTML = `     <div item-id="${id}" class="p-4 card-item rounded-3">
                                <img class="w-100 rounded-3" src="${img}" alt="">
                                <div class="d-flex justify-content-between align-items-center pd-info mt-1">
                                <p class="text-primary mb-0 fs-4 text-truncate">${name}</p>
                                <i class="bi bi-heart fs-4 text-primary"></i>
                                </div>
                                <p class="text-primary fs-4">$ <span class="price">${price}</span></p>
                                <button class="btn btn-primary w-100"><i class="bi bi-cart pe-none"></i></button>
                            </div>`
    men.classList.add("active")
    itemsRow.append(div)
}

export let menJackets = function ({id,name,price,img}){
    let div = document.createElement("div");
    div.classList.add("col-lg-3","col-md-4","jacket","animate__animated","animate__fadeIn","col-sm-6");
    div.innerHTML = `     <div item-id="${id}" class="p-4 card-item rounded-3">
                                <img class="w-100 rounded-3" src="${img}" alt="">
                                <div class="d-flex justify-content-between align-items-center pd-info mt-1">
                                <p class="text-primary mb-0 fs-4 text-truncate">${name}</p>
                                <i class="bi bi-heart fs-4 text-primary"></i>
                                </div>
                                <p class="text-primary fs-4">$ <span class="price">${price}</span></p>
                                <button class="btn btn-primary w-100"><i class="bi bi-cart pe-none"></i></button>
                            </div>`
    men.classList.add("active")
    itemsRow.append(div)
}

export let menPants = function ({id,name,price,img}){
    let div = document.createElement("div");
    div.classList.add("col-lg-3","col-md-4","pant","animate__animated","animate__fadeIn","col-sm-6");
    div.innerHTML = `     <div item-id="${id}" class="p-4 card-item rounded-3">
                                <img class="w-100 rounded-3" src="${img}" alt="">
                                <div class="d-flex justify-content-between align-items-center pd-info mt-1">
                                <p class="text-primary mb-0 fs-4 text-truncate">${name}</p>
                                <i class="bi bi-heart fs-4 text-primary"></i>
                                </div>
                                <p class="text-primary fs-4">$ <span class="price">${price}</span></p>
                                <button class="btn btn-primary w-100"><i class="bi bi-cart pe-none"></i></button>
                            </div>`
    men.classList.add("active")
    itemsRow.append(div)
}

export let womenClothing = function ({id,name,price,img}){
    let div = document.createElement("div");
    div.classList.add("col-lg-3","col-md-4","wm","animate__animated","animate__fadeIn","col-sm-6");
    div.innerHTML = `     <div item-id="${id}" class="p-4 card-item rounded-3">
                                <img class="w-100 rounded-3" src="${img}" alt="">
                                <div class="d-flex justify-content-between align-items-center pd-info mt-1">
                                <p class="text-primary mb-0 fs-4 text-truncate">${name}</p>
                                <i class="bi bi-heart fs-4 text-primary"></i>
                                </div>
                                <p class="text-primary fs-4">$ <span class="price">${price}</span></p>
                                <button class="btn btn-primary w-100"><i class="bi bi-cart pe-none"></i></button>
                            </div>`
    men.classList.add("active")
    itemsRow.append(div)
}

export let swWm = function ({id,name,price,img}){
    let div = document.createElement("div");
    div.classList.add("col-lg-3","col-md-4","woman-sweater","animate__animated","animate__fadeIn","col-sm-6");
    div.innerHTML = `     <div item-id="${id}" class="p-4 card-item rounded-3">
                                <img class="w-100 rounded-3" src="${img}" alt="">
                                <div class="d-flex justify-content-between align-items-center pd-info mt-1">
                                <p class="text-primary mb-0 fs-4 text-truncate">${name}</p>
                                <i class="bi bi-heart fs-4 text-primary"></i>
                                </div>
                                <p class="text-primary fs-4">$ <span class="price">${price}</span></p>
                                <button class="btn btn-primary w-100"><i class="bi bi-cart pe-none"></i></button>
                            </div>`
    men.classList.add("active")
    itemsRow.append(div)
}

export let JKwm = function ({id,name,price,img}){
    let div = document.createElement("div");
    div.classList.add("col-lg-3","col-md-4","woman-jacket","animate__animated","animate__fadeIn","col-sm-6");
    div.innerHTML = `     <div item-id="${id}" class="p-4 card-item rounded-3">
                                <img class="w-100 rounded-3" src="${img}" alt="">
                                <div class="d-flex justify-content-between align-items-center pd-info mt-1">
                                <p class="text-primary mb-0 fs-4 text-truncate">${name}</p>
                                <i class="bi bi-heart fs-4 text-primary"></i>
                                </div>
                                <p class="text-primary fs-4">$ <span class="price">${price}</span></p>
                                <button class="btn btn-primary w-100"><i class="bi bi-cart pe-none"></i></button>
                            </div>`
    men.classList.add("active")
    itemsRow.append(div)
}

export let wmPant = function ({id,name,price,img}){
    let div = document.createElement("div");
    div.classList.add("col-lg-3","col-md-4","woman-pant","animate__animated","animate__fadeIn","col-sm-6");
    div.innerHTML = `     <div item-id="${id}" class="p-4 card-item rounded-3">
                                <img class="w-100 rounded-3" src="${img}" alt="">
                                <div class="d-flex justify-content-between align-items-center pd-info mt-1">
                                <p class="text-primary mb-0 fs-4 text-truncate">${name}</p>
                                <i class="bi bi-heart fs-4 text-primary"></i>
                                </div>
                                <p class="text-primary fs-4">$ <span class="price">${price}</span></p>
                                <button class="btn btn-primary w-100"><i class="bi bi-cart pe-none"></i></button>
                            </div>`
    men.classList.add("active")
    itemsRow.append(div)
}