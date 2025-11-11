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
    // console.log(galleryArray);

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

  // The POP UP BOTON
document.querySelectorAll('.purchasePopup').forEach(openBtn => {
  
  const popupOverlay = openBtn.nextElementSibling; 
  const closeBtn = popupOverlay.querySelector('.close-btn');
  const purchaseBtn = popupOverlay.querySelector('#purchaseButon');
  const itemButtons = popupOverlay.querySelectorAll('.item-list-button');
  let selectedLink = null;

  openBtn.addEventListener('click', () => {
    popupOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });

  
  function closePopup() {
    popupOverlay.style.display = 'none';
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closePopup);

  popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) closePopup();
  });

  itemButtons.forEach(button => {
    button.addEventListener('click', () => {
      selectedLink = button.getAttribute('data-link');
      itemButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });

  purchaseBtn.addEventListener('click', () => {
    if (selectedLink) {
      window.location.href = selectedLink;
    } else {
      alert('Por favor, selecciona una versión antes de descargar.');
    }
  });
});

//Scrolling with Arrows 

const scrollSection = document.querySelector('.scroll__person__sec');
const scrollContainer = document.querySelector('.scroll__container');
const btnLeft = document.getElementById('scroll-left');
const btnRight = document.getElementById('scroll-right');

let isManuallyPaused = false;
let isUserScrolling = false;
let scrollInterval;

scrollSection.innerHTML += scrollSection.innerHTML;


const pauseScroll = () => scrollSection.style.animationPlayState = 'paused';
const resumeScroll = () => {
  if (!isManuallyPaused && !isUserScrolling)
    scrollSection.style.animationPlayState = 'running';
};

scrollSection.addEventListener('mouseenter', pauseScroll);
scrollSection.addEventListener('mouseleave', resumeScroll);


scrollSection.addEventListener('click', e => {
  if (e.target.closest('.card')) {
    isManuallyPaused = !isManuallyPaused;
    scrollSection.style.animationPlayState = isManuallyPaused ? 'paused' : 'running';
  }
});


function startScroll(direction) {
  isUserScrolling = true;
  pauseScroll();
  scrollInterval = setInterval(() => {
    scrollContainer.scrollLeft += direction * 10;
  }, 30);
}

function stopScroll() {
  clearInterval(scrollInterval);
  isUserScrolling = false;
  resumeScroll();
}

btnLeft.addEventListener('mousedown', () => startScroll(-1));
btnRight.addEventListener('mousedown', () => startScroll(1));
['mouseup', 'mouseleave'].forEach(evt => document.addEventListener(evt, stopScroll));

//display characters( i did not want to rethink it for pages)
document.querySelectorAll(".knowChar").forEach(function(boton) {
    boton.addEventListener('click', function() {
        var extraClick = boton.nextElementSibling;
        if (extraClick.style.display === 'none' || extraClick.style.display === '') {
            extraClick.style.display = 'block';
            
        } else {
            extraClick.style.display = 'none';
 
        }
    });
});