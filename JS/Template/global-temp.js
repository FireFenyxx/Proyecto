import { MENU } from "./nav.js";
import {FOOT} from "./foot.js" ;

//Metemos el nav y el footer
// const NAV = document.createElement(`span`);
// NAV.innerHTML= `${MENU}`;
// document.getElementById("nav").appendChild(NAV);

// console.log(NAV);

// const FOOTE = document.createElement(`footer`);
// FOOTE.innerHTML= `${FOOT}`;
// document.getElementById("foot").appendChild(FOOTE);
// console.log(FOOT);

// Boton de Know more
    // let basicText = document.getElementsByClassName("cheat");
    // let moreText = document.getElementsByClassName("know_more");
    // let botonText = document.getElementsByClassName("know");
 let basicText = document.getElementsByClassName("cheat")
    let moreText = document.getElementsByClassName("know_more");
    let botonText = document.getElementsByClassName("know");


function know() {
   
if 
(basicText.style.display ==="none"){
    basicText.style.display ="inline"
    botonText.innerHTML="Know More";
    moreText.style.display = "none";
}
else {
    botonText.innerHTML="Show Less";
    moreText.style.display = "inline";
    basicText.style.display ="none"

}
}
console.log(basicText)
console.log(botonText)
console.log(moreText)
