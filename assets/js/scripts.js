// OWL CAROUSEL
$(document).ready(function () {
	$('.owl-carousel').owlCarousel({
		loop: false,
		margin: 6,
		autoWidth: false,
		nav: true,
		items: 2,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			705: {
				items: 1,
				nav: true
			},
			706: {
				items: 2,
				nav: true
			}
		}
	})
})

// MENU HAMBURGER
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')

hamburger.addEventListener('click', mobileMenu)

function mobileMenu() {
	hamburger.classList.toggle('active')
	navMenu.classList.toggle('active')
}
