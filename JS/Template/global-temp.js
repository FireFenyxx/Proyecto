import { MENU } from "./nav.js";
import { FOOT } from "./foot.js";

// Metemos el nav y el footer --------------------------------


const NAV = document.createElement(`span`);
NAV.innerHTML = `${MENU}`;
document.getElementById("nav").appendChild(NAV);

// console.log(NAV);

const FOOTE = document.createElement(`footer`);
FOOTE.innerHTML = `${FOOT}`;
document.getElementById("foot").appendChild(FOOTE);
// console.log(FOOT);

// Boton de Know more --------------------

const lessContent = `<img src="Imagenes/Minus.png" alt="Minus"> Show Less`
const moreContent = `<img src="Imagenes/Plus.png" alt="plus"> Know More`

document.querySelectorAll(".know").forEach(function(boton) {
    boton.addEventListener('click', function() {
        var extraClick = boton.closest('span').previousElementSibling;
        if (extraClick.style.display === 'none' || extraClick.style.display === '') {
            extraClick.style.display = 'block';
            boton.innerHTML = `${lessContent}`
        } else {
            extraClick.style.display = 'none';
            boton.innerHTML =`${moreContent}`; 
        }
    });
});

// JSON

fetch('./JS/Template/Data/Gallery.json')
  .then(response => response.json())
  .then(galleryArray => {
    console.log(galleryArray);

    const galleryContainer = document.getElementById("galeria");
 
    galleryArray.forEach(item => {
      const figure = document.createElement("figure");
      figure.innerHTML = `
        <img src="${item.src}" alt="${item.alt}">
        <figcaption>${item.figcaption}</figcaption>
      `;
      galleryContainer.appendChild(figure);
    });
  })
  .catch(error => {
    console.error('Error loading JSON:', error);
  });

