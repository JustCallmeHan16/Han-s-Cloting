import { page } from "../main";

export const showLoader = function (){
    page.classList.add("d-none")
    let loaderBox = document.createElement("div");
    loaderBox.classList.add("loader-box","animate__animated","animate__fadeIn","fixed-top");
    loaderBox.innerHTML = `<div class="loader">
                                <div></div>
                                <div></div>
                            <div>`
    document.body.append(loaderBox)
}

export const removeLoader = function (){
    let currentLoaderBox = document.querySelector(".loader-box");
    currentLoaderBox.classList.replace("animate__fadeIn","animate__fadeOut");
    currentLoaderBox.addEventListener("animationend",() => {
        currentLoaderBox.remove();
        page.classList.replace("d-none","d-block")
        page.classList.add("animate__fadeIn")
    })
}