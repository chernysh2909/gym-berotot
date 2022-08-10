// show menu
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

if(navToggle) {
  navToggle.addEventListener("click", ()=>{
    navMenu.classList.add("show-menu")
  })
}
if(navClose){
  navClose.addEventListener('click', ()=>{
    navMenu.classList.remove('show-menu')
  })
}

//hide mobi menu  when click link
const navLink = document.querySelectorAll('.nav__link')
const linkAction = ()=>{
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n=> n.addEventListener('click', linkAction))