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
let images = document.querySelector('.carousel')
let slider = 0


cLeft.addEventListener('click', () => {
  let current = (slider * 100)
  if (slider >= 3) {
    slider = 0
  } else {
    slider++
  }
  console.log(images)
  images.style.transform = `translateX(-${current}%)`
  console.log(images.style.transform, current)
})