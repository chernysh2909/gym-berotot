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

//change bg header

const scrollHeader = ()=>{
  const header = document.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

//calculate

const calculateFrom = document.getElementById("calculate-form"),
    calculateCm = document.getElementById('calculate-cm'),
    calculateKg = document.getElementById('calculate-kg'),
    calculateMessage = document.getElementById('calculate-message')

const calculateBmi = (e)=>{
  e.preventDefault()
  if(calculateCm.value === '' || calculateKg === ''){
    calculateMessage.classList.remove('color-green')
    calculateMessage.classList.add('color-red')

    calculateMessage.textContent = 'FIll in the height and wight'

    setTimeout(()=>{
      calculateMessage.textContent = ''
    }, 3000)

  } else{
    const cm = calculateCm.value / 100,
        kg = calculateKg.value ,
        bmi = Math.round(kg/(cm*cm))

    if(bmi < 18.5){
      calculateMessage.classList.add("color-green")
      calculateMessage.textContent = `you bmi ${bmi} skinny`
    } else if(bmi<25){
      calculateMessage.classList.add("color-green")
      calculateMessage.textContent = `you bmi ${bmi} healthy`
    } else{
      calculateMessage.classList.add("color-green")
      calculateMessage.textContent = `you bmi ${bmi} overwight`
    }

    calculateCm.value = ''
    calculateKg.value = ''

    setTimeout(()=>{
      calculateMessage.textContent = ''
    }, 4000)
  }
}

calculateFrom.addEventListener('submit', calculateBmi)

//scroll section
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
  const scrollY = window.scrollY

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      sectionsClass.classList.add('active-link')
    }else{
      sectionsClass.classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)

//scroll up
const scrollUp = ()=>{
  const scrollUp  = document.getElementById('scroll-up')

  this.scrollY >=350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

//scroll reveal animation
const sr= ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})
sr.reveal(`.home__data, .footer__container, .footer__group`)
sr.reveal(`.home__img`, {delay: 700, origin: 'bottom'})
sr.reveal(`.logos__img, .program__card, .pricing__card`, {interval: 100})
sr.reveal(`.choose__img, .calculate__content`, {origin: 'left'})
sr.reveal(`.choose__content, .calculate__img`, {origin: 'right'})