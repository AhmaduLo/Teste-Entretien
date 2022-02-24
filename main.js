const menuBurger = document.querySelector('.menu_burger')
const btn_buy = document.querySelector('.btn_buy')
const module_activation = document.querySelector('.module')
const remove_module = document.querySelector('.remove_module')

menuBurger.addEventListener('click', () => {
  menuBurger.classList.toggle('menu-anim')
})

btn_buy.addEventListener('click', () => {
  module_activation.classList.toggle('active_module')
})

remove_module.addEventListener('click', () =>{
  module_activation.classList.toggle('active_module')
})
