const subMenus = document.querySelectorAll('.list-menu--submenu');

subMenus.forEach(function(subMenu) { 
  
  subMenu.previousElementSibling.addEventListener('click', function(e) {
    e.preventDefault();
    
    subMenu.previousElementSibling.classList.toggle('list-menu-item--link__active');
    
    subMenu.style.maxHeight 
    ? subMenu.style.maxHeight = null 
    : subMenu.style.maxHeight = subMenu.scrollHeight + "px";
  });
  
})