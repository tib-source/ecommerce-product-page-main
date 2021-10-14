const closeIcon = document.querySelector('#close')
const menuIcon = document.querySelector('#menu')
const menuItems = document.querySelector('#menuItems')
menuItems.style.display = "none"


menuIcon.addEventListener('click', () => {
  curr = menuItems.style.display
  if (curr == 'none') {
    return menuItems.style.display = 'flex'
  }
})
closeIcon.addEventListener('click', () => {
  curr = menuItems.style.display
  if (curr == 'flex') {
    menuItems.id = 'reversed'
    setTimeout(() => {
      menuItems.style.display = 'none'
      menuItems.id = ''
      return null
    }, 300)


    console.log("hello")
  }
})


let cLeft = document.getElementById('left')
let cRight = document.getElementById('right')
let carousel = document.querySelector('.carousel')
let images = document.querySelectorAll('.carousel img')

let slider = 1;
let size = images[0].clientWidth;
console.log(size)



cRight.addEventListener('click', () => {
  if (slider >= (images.length - 1)) return;
  carousel.style.transition = 'transform 0.4s ease-in-out';
  slider++
  carousel.style.transform = `translateX(${-size * slider}px)`;

})

cLeft.addEventListener('click', () => {
  if (slider <= 0) return;
  carousel.style.transition = 'transform 0.4s ease-in-out';
  slider--
  carousel.style.transform = `translateX(${-size * slider}px)`;
})
