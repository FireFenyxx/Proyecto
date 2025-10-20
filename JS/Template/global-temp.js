import { MENU } from "./nav.js";
import {FOOT} from "./foot.js" ;


// document.body.innerHTML = MENU + FOOT;

// const display = 
// document.createElement(MENU);
const NAV = document.createElement(`span`);
NAV.innerHTML= `${MENU}`;
document.getElementById("nav").appendChild(NAV);

console.log(NAV);

const FOOTE = document.createElement(`footer`);
FOOTE.innerHTML= `${FOOT}`;
document.getElementById("foot").appendChild(FOOTE);
// console.log(FOOT);
// console.log("hey")
console.log("holaa");