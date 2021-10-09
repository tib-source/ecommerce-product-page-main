const closeIcon = document.querySelector('#close')
const menuIcon = document.querySelector('#menu')
const menuItems = document.querySelector('#menuItems')
menuItems.style.display = "none"


menuIcon.addEventListener('click', () => {
  curr = menuItems.style.display = "none"
  if (curr == 'none') {
    return menuItems.style.display = 'flex'
  }
})
closeIcon.addEventListener('click', () => {
  curr = menuItems.style.display = "none"
  if (curr == 'flex') {
    return menuItems.style.display = 'none'
  }
})


