import "./style.css";
const element = document.createElement("header");

element.innerHTML = "this is webpack demo";
element.classList.add('info')
document.body.appendChild(element);

// nooo

import photo from './img.png'
const img = document.createElement("img");
img.src=photo;

 element.appendChild(img);


  