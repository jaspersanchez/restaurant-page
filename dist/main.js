(()=>{"use strict";function e(e){const t=document.createElement("h2");return t.textContent=e,t}const t=function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");return t.classList.add("home"),t.appendChild(e("Heavyweight Ramen Champ in Shibuya")),t.appendChild(e("World Class Ingredients")),t.appendChild(function(e){const t=document.createElement("button");return t.classList.add("home-btn"),t.textContent="BOOK NOW",t}()),t}())};function n(e,t){const n=document.createElement("div");n.classList.add("menu-item");const a=document.createElement("h2");a.textContent=e;const o=document.createElement("p");return o.textContent=t,n.appendChild(a),n.appendChild(o),n}function a(e){const a=document.createElement("button");return a.classList.add("nav-btn"),a.textContent=e,a.addEventListener("click",(c=>{if(!c.target.classList.contains("btn-active"))switch(o(a),e){case"Home":console.log(e),t();break;case"Menu":console.log(e),function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");return e.classList.add("menu"),e.appendChild(n("Gyoza","50 Pieces Gyoza, Gyoza sauce")),e.appendChild(n("Chicken Karaage","20 Pieces Marinated Chicken Karage Breading")),e.appendChild(n("Chashu Rice","Chashu Bits, Chashu Sauce")),e.appendChild(n("Butao King","Tonkotsu Soup, Ramen Noodles, Pork Chashu")),e.appendChild(n("Red King","Tonkotsu Soup, Ramen Noodles, Pork Chashu, Red Minced Pork")),e.appendChild(n("Black King","Tonkotsu Soup, Ramen Noodles, Pork Chashu, Black Minced Pork")),e.appendChild(n("Green King","Tonkotsu Soup, Ramen Noodles, Pork Chashu, Green Oil, Vegetables")),e}())}();break;case"Contact":console.log(e),function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("contact");const t=document.createElement("h3");t.textContent="Contact Number: 0912-345-6789";const n=document.createElement("h3");return n.textContent="Address: 2 Chome-2-1 Dogenzaka, Shibuya 150-0043 Tokyo Prefecture",e.appendChild(t),e.appendChild(n),e}())}()}})),a}function o(e){document.querySelectorAll(".nav-btn").forEach((e=>{e!==this&&e.classList.remove("btn-active")})),e.classList.add("btn-active")}!function(){const e=document.getElementById("content");e.appendChild(function(){const e=document.createElement("header");e.classList.add("header");const t=document.createElement("h1");return t.classList.add("header-title"),t.textContent="Shibuya Ramen",e.appendChild(t),e.appendChild(function(){const e=document.createElement("nav");e.classList.add("header-nav");const t=a("Home"),n=a("Menu"),o=a("Contact");return e.appendChild(t),e.appendChild(n),e.appendChild(o),e}()),e}()),e.appendChild(function(){const e=document.createElement("main");return e.classList.add("main-content"),e.setAttribute("id","main"),e}()),e.appendChild(function(){const e=document.createElement("footer");e.classList.add("footer");const t=document.createElement("h2");t.textContent="© Jasper Sanchez 2022 ";const n=document.createElement("i");return n.classList.add("fab"),n.classList.add("fa-github"),e.appendChild(t),t.appendChild(n),e}()),o(document.querySelector(".nav-btn")),t()}()})();