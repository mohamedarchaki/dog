let links =document.getElementById("links");
let menu =document.getElementById("menu");
let spn = document.querySelectorAll(".span")

menu.onclick= function(){
    links.classList.toggle("is-active");
    spn[0].classList.toggle("is-active");
    spn[1].classList.toggle("is-active");
    spn[2].classList.toggle("is-active");
}