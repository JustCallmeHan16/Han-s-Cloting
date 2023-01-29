import { removeLoader, showLoader } from './js/loader';
import './node_modules/bootstrap/dist/js/bootstrap.bundle';
import './style.scss';
import Typed from 'typed.js';
import { hoodies, jackets, mens, pants, productsData, sweaters, wmJk, wmPants, wmSw, women } from './js/data';
import { clothingForMen, createHoodies, JKwm, menClothing, menJackets, menPants, menSweaters, swWm, wmPant, womenClothing } from './js/item';
import './node_modules/waypoints/lib/noframework.waypoints'
import { addToBag } from './js/add-to-bag';
import swal from 'sweetalert';
import { addToFavList } from './js/add-to-fav';

let items = [];
let pageParent = document.querySelector("#page-parent");
export let eye = document.querySelector("#eye")
export let itemsRow = document.querySelector(".items-row");
export let badges = document.querySelectorAll(".badge")
export const page = document.querySelector(".page")
export const men = document.querySelector("#men");
export let menHoodie = document.querySelector("#hoodie");
export let menSweater = document.querySelector("#sweater");
export let menJacket = document.querySelector("#jacket");
export let menPant = document.querySelector("#pant");
export let wm = document.querySelector("#women");
export let sweaterWm = document.querySelector("#womenSw");
export let JacketWm = document.querySelector("#womenJacket");
export let womenPant = document.querySelector("#womenPant");
export let bag = document.querySelector("#bag");
export let fav = document.querySelector("#fav-bg");
export let total = document.querySelector("#total");
export let removeBtn = document.querySelector("#remove-btn");
showLoader();

fetch('https://api.escuelajs.co/api/v1/products')
            .then(res=>res.json())
            .then(json=>{
                items = json;
                items.forEach( (item) => {
                    item
                });
                mens.forEach( (product) => {
                    clothingForMen(product)
                })
                removeLoader();
            });

            let options = {
                strings: ['ARRIVALS'],
                typeSpeed: 70,
                loop : true,
                backSpeed : 100,
                showCursor : false
              };
              
              let typed = new Typed('.element', options);
        

            //clothing
            men.addEventListener("click",function(){
                mens.forEach( (pd) => {
                    menClothing(pd)
                })
                let hoodies = document.querySelectorAll(".hoodie");
                for(let hoodie of hoodies){
                    hoodie.remove();
                }
                let sweaters = document.querySelectorAll(".sweater");
                for(let sw of sweaters){
                    sw.remove();
                }
                let jackets = document.querySelectorAll(".jacket");
                for(let jk of jackets){
                    jk.remove();
                }
                let pants = document.querySelectorAll(".pant");
                for(let pt of pants){
                    pt.remove();
                }
                let wms = document.querySelectorAll(".wm")
                for(let woman of wms){
                    woman.remove();
                }
                let wmSWS = document.querySelectorAll(".woman-sweater")
                for(let sws of wmSWS){
                    sws.remove()
                }
                let jks = document.querySelectorAll(".woman-jacket")
                for(let jk of jks){
                    jk.remove();
                }
                let wmPts = document.querySelectorAll(".woman-pant")
                for(let pt of wmPts){
                    pt.remove();
                }
                womenPant.classList.remove("active")
                JacketWm.classList.remove("active");
                sweaterWm.classList.remove("active");
                wm.classList.remove("active");
                menPant.classList.remove("active");
                menJacket.classList.remove("active")
                men.classList.add("active");
                menHoodie.classList.remove("active");
                menSweater.classList.remove("active");
            })

            //hoodie
            menHoodie.addEventListener("click",function(){
                    hoodies.forEach( hoodie => {
                        createHoodies(hoodie); 
                  })
                  let clothing = document.querySelectorAll(".clothing");
                  for(let cloth of clothing){
                      cloth.remove();
                  }
                  let sweaters = document.querySelectorAll(".sweater");
                  for(let sw of sweaters){
                      sw.remove();
                  }
                  let jackets = document.querySelectorAll(".jacket");
                  for(let jk of jackets){
                      jk.remove();
                  }
                  let pants = document.querySelectorAll(".pant");
                  for(let pt of pants){
                      pt.remove();
                  }
                  let wms = document.querySelectorAll(".wm")
                  for(let woman of wms){
                      woman.remove();
                  }
                  let wmSWS = document.querySelectorAll(".woman-sweater")
                  for(let sws of wmSWS){
                      sws.remove()
                  }
                  let jks = document.querySelectorAll(".woman-jacket")
                  for(let jk of jks){
                      jk.remove();
                  }
                  let wmPts = document.querySelectorAll(".woman-pant")
                  for(let pt of wmPts){
                      pt.remove();
                  }
                  womenPant.classList.remove("active")
                  JacketWm.classList.remove("active");
                  sweaterWm.classList.remove("active");
                  wm.classList.remove("active");
                  menPant.classList.remove("active");
                  menJacket.classList.remove("active")
                  men.classList.remove("active");
                  menHoodie.classList.add("active");
                  menSweater.classList.remove("active");
            })
            
            //sweater
            menSweater.addEventListener("click",function(){
                  sweaters.forEach( (sw) => {
                      menSweaters(sw);
                  })
                  let hoodies = document.querySelectorAll(".hoodie");
                  for(let hoodie of hoodies){
                      hoodie.remove();
                  }
                let clothing = document.querySelectorAll(".clothing");
                for(let cloth of clothing){
                    cloth.remove();
                }
                let jackets = document.querySelectorAll(".jacket");
                for(let jk of jackets){
                    jk.remove();
                }
                let pants = document.querySelectorAll(".pant");
                for(let pt of pants){
                    pt.remove();
                }
                let wms = document.querySelectorAll(".wm")
                for(let woman of wms){
                    woman.remove();
                }
                let wmSWS = document.querySelectorAll(".woman-sweater")
                for(let sws of wmSWS){
                    sws.remove()
                }
                let jks = document.querySelectorAll(".woman-jacket")
                for(let jk of jks){
                    jk.remove();
                }
                let wmPts = document.querySelectorAll(".woman-pant")
                for(let pt of wmPts){
                    pt.remove();
                }
                womenPant.classList.remove("active")
                JacketWm.classList.remove("active");
                sweaterWm.classList.remove("active");
                wm.classList.remove("active");
                menPant.classList.remove("active");
                menJacket.classList.remove("active")
                men.classList.remove("active");
                menHoodie.classList.remove("active");
                menSweater.classList.add("active");
            })

            //jacket
            menJacket.addEventListener("click",function(){
                jackets.forEach((jk) => {
                    menJackets(jk);
                });
                let hoodies = document.querySelectorAll(".hoodie");
                for(let hoodie of hoodies){
                    hoodie.remove();
                }
                let clothing = document.querySelectorAll(".clothing");
                for(let cloth of clothing){
                    cloth.remove();
                }
                let sweaters = document.querySelectorAll(".sweater");
                for(let sw of sweaters){
                    sw.remove();
                }
                let pants = document.querySelectorAll(".pant");
                for(let pt of pants){
                    pt.remove();
                }
                let wms = document.querySelectorAll(".wm")
                for(let woman of wms){
                    woman.remove();
                }
                let wmSWS = document.querySelectorAll(".woman-sweater")
                for(let sws of wmSWS){
                    sws.remove()
                }
                let jks = document.querySelectorAll(".woman-jacket")
                for(let jk of jks){
                    jk.remove();
                }
                let wmPts = document.querySelectorAll(".woman-pant")
                for(let pt of wmPts){
                    pt.remove();
                }
                womenPant.classList.remove("active")
                JacketWm.classList.remove("active");
                sweaterWm.classList.remove("active");
                wm.classList.remove("active");
                menPant.classList.remove("active");
                men.classList.remove("active");
                menHoodie.classList.remove("active");
                menSweater.classList.remove("active");
                menJacket.classList.add("active")
            })

            //pant
            menPant.addEventListener("click",function(){
                pants.forEach( (pt) => {
                    menPants(pt);
                })
                let hoodies = document.querySelectorAll(".hoodie");
                for(let hoodie of hoodies){
                    hoodie.remove();
                }
                let clothing = document.querySelectorAll(".clothing");
                for(let cloth of clothing){
                    cloth.remove();
                }
                let sweaters = document.querySelectorAll(".sweater");
                for(let sw of sweaters){
                    sw.remove();
                }
                let jackets = document.querySelectorAll(".jacket");
                for(let jk of jackets){
                    jk.remove();
                }
                let wms = document.querySelectorAll(".wm")
                for(let woman of wms){
                    woman.remove();
                }
                let wmSWS = document.querySelectorAll(".woman-sweater")
                for(let sws of wmSWS){
                    sws.remove()
                }
                let jks = document.querySelectorAll(".woman-jacket")
                for(let jk of jks){
                    jk.remove();
                }
                let wmPts = document.querySelectorAll(".woman-pant")
                for(let pt of wmPts){
                    pt.remove();
                }
                womenPant.classList.remove("active")
                JacketWm.classList.remove("active");
                sweaterWm.classList.remove("active");
                wm.classList.remove("active");
                menJacket.classList.remove("active");
                men.classList.remove("active");
                menHoodie.classList.remove("active");
                menSweater.classList.remove("active");
                menPant.classList.add("active");
            })

            //women
            wm.addEventListener("click",function(){
                women.forEach( (pt) => {
                    womenClothing(pt);
                })
                let pants = document.querySelectorAll(".pant");
                for(let pt of pants){
                    pt.remove();
                }
                let hoodies = document.querySelectorAll(".hoodie");
                for(let hoodie of hoodies){
                    hoodie.remove();
                }
                let clothing = document.querySelectorAll(".clothing");
                for(let cloth of clothing){
                    cloth.remove();
                }
                let sweaters = document.querySelectorAll(".sweater");
                for(let sw of sweaters){
                    sw.remove();
                }
                let jackets = document.querySelectorAll(".jacket");
                for(let jk of jackets){
                    jk.remove();
                }
                let wmSWS = document.querySelectorAll(".woman-sweater")
                for(let sws of wmSWS){
                    sws.remove()
                }
                let jks = document.querySelectorAll(".woman-jacket")
                for(let jk of jks){
                    jk.remove();
                }
                let wmPts = document.querySelectorAll(".woman-pant")
                for(let pt of wmPts){
                    pt.remove();
                }
                womenPant.classList.remove("active")
                JacketWm.classList.remove("active");
                sweaterWm.classList.remove("active");
                menPant.classList.remove("active");
                menJacket.classList.remove("active");
                men.classList.remove("active");
                menHoodie.classList.remove("active");
                menSweater.classList.remove("active");
                menPant.classList.remove("active");
                wm.classList.add("active");
            })

            //wm sws
            sweaterWm.addEventListener("click",function(){
                wmSw.forEach( (sw) => {
                    swWm(sw);
                })
                let pants = document.querySelectorAll(".pant");
                for(let pt of pants){
                    pt.remove();
                }
                let hoodies = document.querySelectorAll(".hoodie");
                for(let hoodie of hoodies){
                    hoodie.remove();
                }
                let clothing = document.querySelectorAll(".clothing");
                for(let cloth of clothing){
                    cloth.remove();
                }
                let sweaters = document.querySelectorAll(".sweater");
                for(let sw of sweaters){
                    sw.remove();
                }
                let jackets = document.querySelectorAll(".jacket");
                for(let jk of jackets){
                    jk.remove();
                }
                let wms = document.querySelectorAll(".wm")
                for(let woman of wms){
                    woman.remove();
                }
                let jks = document.querySelectorAll(".woman-jacket")
                for(let jk of jks){
                    jk.remove();
                }
                let wmPts = document.querySelectorAll(".woman-pant")
                for(let pt of wmPts){
                    pt.remove();
                }
                womenPant.classList.remove("active")
                JacketWm.classList.remove("active");
                menPant.classList.remove("active");
                menJacket.classList.remove("active");
                men.classList.remove("active");
                menHoodie.classList.remove("active");
                menSweater.classList.remove("active");
                menPant.classList.remove("active");
                wm.classList.remove("active");
                sweaterWm.classList.add("active");
            })

            //wm-jks
            JacketWm.addEventListener("click",function(){
                wmJk.forEach( (jk) => {
                    JKwm(jk);
                })
                let wmSWS = document.querySelectorAll(".woman-sweater")
                for(let sws of wmSWS){
                    sws.remove()
                }
                let pants = document.querySelectorAll(".pant");
                for(let pt of pants){
                    pt.remove();
                }
                let hoodies = document.querySelectorAll(".hoodie");
                for(let hoodie of hoodies){
                    hoodie.remove();
                }
                let clothing = document.querySelectorAll(".clothing");
                for(let cloth of clothing){
                    cloth.remove();
                }
                let sweaters = document.querySelectorAll(".sweater");
                for(let sw of sweaters){
                    sw.remove();
                }
                let jackets = document.querySelectorAll(".jacket");
                for(let jk of jackets){
                    jk.remove();
                }
                let wms = document.querySelectorAll(".wm")
                for(let woman of wms){
                    woman.remove();
                }
                let wmPts = document.querySelectorAll(".woman-pant")
                for(let pt of wmPts){
                    pt.remove();
                }
                womenPant.classList.remove("active")
                menPant.classList.remove("active");
                menJacket.classList.remove("active");
                men.classList.remove("active");
                menHoodie.classList.remove("active");
                menSweater.classList.remove("active");
                menPant.classList.remove("active");
                wm.classList.remove("active");
                sweaterWm.classList.remove("active");
                JacketWm.classList.add("active");
            })

            //wm pants
            womenPant.addEventListener("click",function(){
                wmPants.forEach( (pt) => {
                    wmPant(pt)
                })
                let wmSWS = document.querySelectorAll(".woman-sweater")
                for(let sws of wmSWS){
                    sws.remove()
                }
                let pants = document.querySelectorAll(".pant");
                for(let pt of pants){
                    pt.remove();
                }
                let hoodies = document.querySelectorAll(".hoodie");
                for(let hoodie of hoodies){
                    hoodie.remove();
                }
                let clothing = document.querySelectorAll(".clothing");
                for(let cloth of clothing){
                    cloth.remove();
                }
                let sweaters = document.querySelectorAll(".sweater");
                for(let sw of sweaters){
                    sw.remove();
                }
                let jackets = document.querySelectorAll(".jacket");
                for(let jk of jackets){
                    jk.remove();
                }
                let wms = document.querySelectorAll(".wm")
                for(let woman of wms){
                    woman.remove();
                }
                let jks = document.querySelectorAll(".woman-jacket")
                for(let jk of jks){
                    jk.remove();
                }
                menPant.classList.remove("active");
                menJacket.classList.remove("active");
                men.classList.remove("active");
                menHoodie.classList.remove("active");
                menSweater.classList.remove("active");
                menPant.classList.remove("active");
                wm.classList.remove("active");
                sweaterWm.classList.remove("active");
                JacketWm.classList.remove("active");
                womenPant.classList.add("active")
            })

            //scroll spy
            let section = document.querySelectorAll("section");
            let navLinks = document.querySelectorAll(".navbar-nav li a");

            window.onscroll = () => {

                section.forEach( (sec) => {
                    let top = window.scrollY;
                    let offset = sec.offsetTop - 150;
                    let offsetHeiht = sec.offsetHeight;
                    let id = sec.getAttribute("id");

                    if( top >= offset && top <offset + offsetHeiht){
                        navLinks.forEach( (link) => {
                            link.classList.remove("link-active");
                            document.querySelector('a[href*='+ id +']').classList.add("link-active");
                        });
                    };
                });

            };

            itemsRow.addEventListener("click",function(e){
                if(e.target.classList.contains("btn")){
                    addToBag(e);
                }
                else if(e.target.classList.contains("bi-heart")){
                    addToFavList(e);
                }
            })

            let password = document.querySelector("#password");

            eye.addEventListener("click",function(){
                if(eye.classList.contains("bi-eye-slash")){
                    eye.classList.replace("bi-eye-slash","bi-eye");
                    password.setAttribute("type","text");
                }
                else if(eye.classList.contains("bi-eye")){
                    eye.classList.replace("bi-eye","bi-eye-slash");
                    password.setAttribute("type","password");
                }
            })

            let signIn = document.querySelectorAll("#sign-in");
            let logIn = document.querySelector("#login-form")
            signIn.forEach( (sign) => {
                sign.addEventListener("click", function(){
                        pageParent.classList.add("d-none")
                        logIn.classList.replace("d-none","d-block")
                        logIn.classList.add("animate__fadeInDown")
                })
            })

            let backHome = document.querySelector("#back-home");
            backHome.addEventListener("click",function(){
                logIn.classList.replace("d-block","d-none")
                pageParent.classList.replace("d-none","d-block");
            })