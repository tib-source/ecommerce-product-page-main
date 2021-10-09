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


