!function(t){var e={};function n(r){if(e[r])return e[r].exports;var c=e[r]={i:r,l:!1,exports:{}};return t[r].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)n.d(r,c,function(e){return t[e]}.bind(null,c));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var r=()=>{const t=document.createElement("div");t.setAttribute("class","title-container fluid-container d-flex");const e=document.createElement("div");e.setAttribute("class","col-4");const n=document.createElement("div");n.setAttribute("class","title_box d-flex");const r=document.createElement("button");r.setAttribute("class","btn menu-btn");const c=document.createElement("i");c.setAttribute("class","fas fa-bars"),r.appendChild(c);const o=document.createElement("button");o.setAttribute("class","btn add-btn");const s=document.createElement("i");s.setAttribute("class","fas fa-plus"),o.appendChild(s);const a=document.createElement("h1");a.setAttribute("class","logo"),a.innerHTML="TodoList",n.appendChild(r),n.appendChild(o),n.appendChild(a),e.appendChild(n);const l=document.createElement("div");l.setAttribute("class","col-8");const d=document.createElement("div");d.setAttribute("class","date-title d-flex align-items-center");const i=document.createElement("h3");i.setAttribute("class","task-title"),i.innerHTML="Take a shower";const u=document.createElement("h6");u.setAttribute("class","task-date"),u.innerHTML="8/4/2020";const p=document.createElement("button");p.setAttribute("class","btn edit-btn");const b=document.createElement("i");b.setAttribute("class","fas fa-edit"),p.appendChild(b);const m=document.createElement("button");m.setAttribute("class","btn remove-btn");const f=document.createElement("i");return f.setAttribute("class","fas fa-trash-alt"),m.appendChild(f),d.appendChild(i),d.appendChild(u),d.appendChild(p),d.appendChild(m),l.appendChild(d),t.appendChild(e),t.appendChild(l),t};const c=document.querySelector("#content"),o=r();c.appendChild(o);document.querySelector(".add-btn").addEventListener("click",t=>{console.log(t)})}]);