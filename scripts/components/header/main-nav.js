window.addEventListener('DOMContentLoaded', event => {
  const menu = document.querySelector('.nav-mobile-main__menu');
  const x = document.querySelector('.nav-mobile-main__x');
  
  const openedMenu = document.querySelector('.nav-mobile--menu-opened');

  menu.addEventListener('click', event => {
    menu.classList.toggle('hide'); //classList did not have hide
    x.classList.toggle('show'); //classList did not have show
    openedMenu.classList.toggle('show-flex'); //classList did not have show
  })
  x.addEventListener('click', event => {
    menu.classList.toggle('hide'); //classList had hide
    x.classList.toggle('show'); //classList had show
    openedMenu.classList.toggle('show-flex'); //classList had show
  })
})
