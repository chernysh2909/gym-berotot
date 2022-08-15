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