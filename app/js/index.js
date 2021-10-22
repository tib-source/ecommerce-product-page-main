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
let imageList = document.querySelectorAll('.carousel img')
let images = document.querySelector('.images')

let slider = 0;
let size = imageList[0].clientWidth
console.log(size)
let current = 0
cLeft.addEventListener('click', () => {
  slider--
  current = slider * size
  console.log(`slider : ${slider} \n size: ${size} \n current: ${current}`)
  images.style.transform = `translateX(-${current - size}px)`
  if (slider <= 0) {
    slider = 4
  }
})

cRight.addEventListener('click', () => {
  slider++
  current = slider * size
  console.log(`slider : ${slider} \n size: ${size} \n current: ${current}`)
  images.style.transform = `translateX(-${current - size}px)`
  if (slider >= imageList.length - 1) {
    slider = 1
  }
})