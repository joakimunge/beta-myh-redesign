document.querySelector('.masthead__burger').addEventListener('click', function() {
	this.classList.toggle('active');
});


/*
	Sidenav
*/

// retrieve all ul's with a class that contains "sidenav__list-lv"
const subMenus = document.querySelectorAll('ul[class*="sidenav__list-lv"]');

if (subMenus) {

	// run a function for each submenu
	subMenus.forEach(function(subMenu) { 	

		// add a listener for clicks to the previous sibling element
		// in this case the a.sidenav__link
		subMenu.previousElementSibling.addEventListener('click', function(e) {

			// prevent browser default behaviour
			e.preventDefault();

			// toggle class to the submenu's parent which in this case is the li
			subMenu.parentNode.classList.toggle('sidenav__item--is-active');
			
		});

	});

}