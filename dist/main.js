!function(t){var e={};function n(d){if(e[d])return e[d].exports;var c=e[d]={i:d,l:!1,exports:{}};return t[d].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=t,n.c=e,n.d=function(t,e,d){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:d})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var d=Object.create(null);if(n.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)n.d(d,c,function(e){return t[e]}.bind(null,c));return d},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var d=()=>{let t=[],e=[];const n=(t,e,n,d,c,s,r)=>({title:t,desc:e,note:n,date:d,start:c,end:s,priority:r,check:!1,id:Date.now()}),d=function(n,d,c,s,r,i,a){const o={title:void 0,desc:void 0,note:void 0,date:void 0,start:void 0,end:void 0,priority:void 0,check:!1,id:Date.now()};t.push(o),e.push(o)}();return{todoItems_project:t,todoItems_date:e,getObj:n,getTask:t=>{for(let n of e)if(n.id===t)return n},getObj:n,add_task:d,print_hiya:()=>{console.log("print hiya")},show_project:()=>t}};var c=()=>{const t=document.createElement("div");t.setAttribute("class","task-container d-flex align-items-center justify-content-center col-8");let e=new Date;const n=document.createElement("div");n.setAttribute("class","today-date d-flex");const d=document.createElement("h6");d.setAttribute("class","text-day pr-2"),d.innerHTML=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()];const c=document.createElement("h6");c.setAttribute("class","text-date"),c.innerHTML=e.toLocaleString(),n.appendChild(d),n.appendChild(c);const s=document.createElement("ul");s.setAttribute("class","todo-list col-8");const r=document.createElement("div");r.setAttribute("class","empty-state");const i=document.createElement("div");i.setAttribute("class","btn-div text-center");const a=document.createElement("button");a.setAttribute("class","btn add-task-btn");const o=document.createElement("i");o.setAttribute("class","fas fa-calendar-plus fa-3x"),a.appendChild(o),i.appendChild(a);const l=document.createElement("h2");l.setAttribute("class","add-text"),l.innerHTML="Add your first todo";const u=document.createElement("p");return u.innerHTML="What do you want to get done today?",r.appendChild(i),r.appendChild(l),r.appendChild(u),t.appendChild(n),t.appendChild(s),t.appendChild(r),t};var s=t=>{t.addEventListener("click",e=>{t.classList.add("no-display")})};var r=t=>{const e=document.querySelector(".todo-list"),n=document.createElement("li");n.setAttribute("id",""+t.id),n.setAttribute("class","d-flex justify-content-between align-items-center py-3");const d=document.createElement("input");d.setAttribute("type","checkbox"),d.setAttribute("id",""+t.id),d.setAttribute("class","check-box no-display");const c=document.createElement("label");c.setAttribute("id",""+t.id),c.setAttribute("class","tick");const s=document.createElement("div");s.setAttribute("class","text-div w-100 text-center");const r=document.createElement("h3");r.setAttribute("class","text-title"),r.innerHTML=t.title;const i=document.createElement("p");i.innerHTML=t.desc;const a=document.createElement("div");a.setAttribute("class","start-end-div d-flex justify-content-center");const o=document.createElement("p");o.innerHTML="Start: "+t.start;const l=document.createElement("p");l.setAttribute("class","end-text px-2"),l.innerHTML="End: "+t.end,a.appendChild(o),a.appendChild(l),s.appendChild(r),s.appendChild(i),s.appendChild(a);const u=document.createElement("button");u.setAttribute("class","btn delete-btn float-right");const p=document.createElement("i");p.setAttribute("class","fas fa-trash-alt"),u.appendChild(p),n.appendChild(d),n.appendChild(c),n.appendChild(s),n.appendChild(u),e.appendChild(n)};var i=()=>{const t=document.createElement("form");t.setAttribute("class","form");const e=document.createElement("div");e.setAttribute("class","overlay"),e.classList.contains("no-display")&&e.classList.remove("no-display");const n=document.createElement("div");n.setAttribute("class","modal-box col-12 col-sm-9 col-lg-6");const c=document.createElement("div");c.setAttribute("class","title-div col-12 p-3");const i=document.createElement("input");i.setAttribute("class","title-box w-100 border"),i.setAttribute("type","text"),i.setAttribute("placeholder","Title"),i.required=!0,c.appendChild(i);const a=document.createElement("div");a.setAttribute("class","dscr-div col-12 p-3");const o=document.createElement("textarea");o.setAttribute("class","dscr-box w-100 border"),o.setAttribute("type","text"),o.setAttribute("placeholder","Description"),o.required=!0,a.appendChild(o);const l=document.createElement("div");l.setAttribute("class","note-div col-12 p-3");const u=document.createElement("input");u.setAttribute("class","note-box w-100 border"),u.setAttribute("placeholder","Note"),u.setAttribute("type","text"),u.required=!0,l.appendChild(u);const p=document.createElement("div");p.setAttribute("class","date-div p-3");const m=document.createElement("p");m.setAttribute("class","form-text date-text"),m.innerHTML="Date: ";const b=document.createElement("input");b.setAttribute("class","date-box border"),b.setAttribute("type","date"),p.appendChild(m),p.appendChild(b);const h=document.createElement("div");h.setAttribute("class","start-end-prio_div d-flex");const v=document.createElement("div");v.setAttribute("class","start_div d-flex px-3");const A=document.createElement("p");A.setAttribute("class","form-text pr-3 start-text"),A.innerHTML="Start: ";const E=document.createElement("input");E.setAttribute("class","start-box border"),E.setAttribute("type","number"),E.setAttribute("min","1"),E.setAttribute("max","12"),v.appendChild(A),v.appendChild(E);const f=document.createElement("div");f.setAttribute("class","end_div d-flex px-3");const C=document.createElement("p");C.setAttribute("class","form-text pr-3 end-text"),C.innerHTML="End: ";const y=document.createElement("input");y.setAttribute("class","end-box border"),y.setAttribute("type","number"),y.setAttribute("min","1"),y.setAttribute("max","12"),f.appendChild(C),f.appendChild(y);const x=document.createElement("div");x.setAttribute("class","end_div d-flex px-3");const L=document.createElement("p");L.setAttribute("class","form-text pr-3 priority-text"),L.innerHTML="Priority: ";const g=document.createElement("select");g.setAttribute("class","priority-box border");const T=document.createElement("option");T.setAttribute("value","high"),T.innerHTML="high",g.appendChild(T),x.appendChild(L),x.appendChild(g),h.appendChild(v),h.appendChild(f),h.appendChild(x);const M=document.createElement("div");M.setAttribute("class","add-cancel-div d-flex p-3");const H=document.createElement("div");H.setAttribute("class","add-div pr-5");const j=document.createElement("button");j.setAttribute("class","add-box border"),j.innerHTML="Add",j.type="submit",H.appendChild(j);const _=document.createElement("div");_.setAttribute("class","cancel-div pl-5");const k=document.createElement("button");return k.setAttribute("class","cancel-box border"),k.innerHTML="Cancel",_.appendChild(k),M.appendChild(H),M.appendChild(_),n.appendChild(c),n.appendChild(a),n.appendChild(l),n.appendChild(p),n.appendChild(h),n.appendChild(M),e.appendChild(n),t.appendChild(e),t.addEventListener("submit",t=>{console.log("submit"),t.preventDefault();let e=d().getObj(i.value.trim(),o.value.trim(),u.value.trim(),b.value,E.value,y.value,g.value);r(e)}),k.addEventListener("click",t=>{s(e)}),H.addEventListener("click",t=>{s(e)}),t};var a=()=>{console.log("folder called");const t=document.createElement("div");t.setAttribute("class","overlay"),t.classList.contains("no-display")&&t.classList.remove("no-display");const e=document.createElement("div");e.setAttribute("class","folder-cotainer h-100 bg-light col-5");const n=document.createElement("button");n.setAttribute("class","remove_btn mt-4");const d=document.createElement("i");d.setAttribute("class","fas fa-times"),n.appendChild(d);const c=document.createElement("div");c.setAttribute("class","project-div py-3");const r=document.createElement("h1");r.setAttribute("class","folder-heder"),r.innerHTML="Project";const i=document.createElement("button");i.setAttribute("class","project-add-btn");const a=document.createElement("h3");a.setAttribute("class","today-text"),a.innerHTML="Today";const o=document.createElement("h3");o.setAttribute("class","test-text"),o.innerHTML="test1";const l=document.createElement("h3");return l.setAttribute("class","test-text"),l.innerHTML="test2",c.appendChild(r),c.appendChild(i),c.appendChild(a),c.appendChild(o),c.appendChild(l),e.appendChild(n),e.appendChild(c),t.appendChild(e),n.addEventListener("click",e=>{s(t)}),t};var o=()=>{const t=document.createElement("div");t.setAttribute("class","menu-cotainer col-4 border-r");const e=document.createElement("div");e.setAttribute("class","nav d-flex justify-content-between align-items-center");const n=document.createElement("div");n.setAttribute("class","title-div");const d=document.createElement("h1");d.setAttribute("class","logo"),d.innerHTML="TodoList",n.appendChild(d);const c=document.createElement("div");c.setAttribute("class","menu-add-div");const s=document.createElement("button");s.setAttribute("class","btn menu-btn");const r=document.createElement("i");r.setAttribute("class","fas fa-bars"),s.appendChild(r);const i=document.createElement("button");i.setAttribute("class","btn add-btn");const a=document.createElement("i");return a.setAttribute("class","fas fa-plus"),i.appendChild(a),c.appendChild(s),c.appendChild(i),e.appendChild(n),e.appendChild(c),t.appendChild(e),t};const l=document.querySelector("#content");l.setAttribute("class","h-100 fluid-container d-flex");const u=o(),p=c();l.appendChild(u),l.appendChild(p);const m=document.querySelector(".add-btn"),b=document.querySelector(".menu-btn");document.querySelector("cancel_box");m.addEventListener("click",t=>{const e=i();l.appendChild(e)}),b.addEventListener("click",t=>{const e=a();console.log(t.target),console.log("open folder"),l.appendChild(e)})}]);