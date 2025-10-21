import { MENU } from "./nav.js";
import { FOOT } from "./foot.js";

// Metemos el nav y el footer --------------------------------


const NAV = document.createElement(`span`);
NAV.innerHTML = `${MENU}`;
document.getElementById("nav").appendChild(NAV);

console.log(NAV);

const FOOTE = document.createElement(`footer`);
FOOTE.innerHTML = `${FOOT}`;
document.getElementById("foot").appendChild(FOOTE);
console.log(FOOT);

// Boton de Know more --------------------

//     let moreText = document.getElementsByClassName("know_more");
//     let botonText = document.getElementsByClassName("know");


// let moreText = document.querySelectorAll("know_more");
// let botonText = document.querySelectorAll("know");

const lessContent = `<img src="Imagenes/Minus.png" alt="Minus"> Show Less`
const moreContent = `<img src="Imagenes/Plus.png" alt="plus"> Know More`

    document.querySelectorAll(".know").forEach(boton => {
        boton.addEventListener(`click`, () => {
            const extraClick = boton.previousElementSibling
            if (extraClick.style.display === 'none' || extraClick.style.display === '') {
                extraClick.style.display = 'inline-flex';
                boton.innerHTML = `${lessContent}`;
            } else {
                extraClick.style.display = 'none';
                boton.innerHTML = `${moreContent}`;
            }
        });
    });







// console.log(botonText)
// console.log(moreText)
