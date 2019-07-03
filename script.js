
document.addEventListener('DOMContentLoaded', function() {
	var hamburger = document.querySelector(".button-hamb")
	var closeButton = document.querySelector(".btn-close");
	var mobileMenu = document.querySelector(".mobile-menu-wrapper");

	hamburger.addEventListener('click', function(){
		mobileMenu.classList.add('active')
	});

	closeButton.addEventListener('click', function(){
		mobileMenu.classList.remove('active')
	});


});