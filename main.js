const menu = document.getElementsByClassName('menu');
const menuItem = document.getElementsByClassName('menu-item');


menu.getEventListener('click', function () {
    menuItem.classList.add('display')
});