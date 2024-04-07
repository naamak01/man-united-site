import './style.css';

// This function will used to target the hamburger menu
// when you click, it expands to show you it contents.
// When you click again, its collapse
const hamburgerMenu = document.querySelector('.hamburger-icon');
const navMenu = document.querySelector('.nav-menu');

hamburgerMenu.addEventListener('click', () => {
	hamburgerMenu.classList.toggle('active');
	navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-links').forEach((n) =>
	n.addEventListener('click', () => {
		hamburgerMenu.classList.remove('active'); // Only remove 'active' from navMenu
		navMenu.classList.remove('active'); // Only remove 'active' from navMenu
	})
);

// Code is connecting the two button in the player button to the men and
// women div. Botton 1 to men, and botton 2 to women.
// Initially hides div 2 content which the the womens until its it clicked

document.addEventListener('DOMContentLoaded', () => {
	// function to toggle visibilty
	const toggleVisibility = (showClass, hideClass) => {
		document.querySelector(showClass).style.display = 'block';
		document.querySelector(hideClass).style.display = 'none';
	};

	// // function targeting when button is active to add css properties
	const toggleActiveClass = (activeButton) => {
		// Remove the active class from all buttons
		document.querySelectorAll('.btn-div button').forEach((button) => {
			button.classList.remove('btn-div-active');
		});

		// Add the active class to the clicked button
		document.getElementById(activeButton).classList.add('btn-div-active');
	};

	// Add event listener to buttons
	// Add event listener to buttons
	document.getElementById('btn-1').addEventListener('click', () => {
		toggleVisibility('.men-players', '.women-players');
		// Scroll to the top of the second container
		document.querySelector('.men-players').scrollIntoView();

		toggleActiveClass('btn-1', 'btn-2');
	});

	document.getElementById('btn-2').addEventListener('click', () => {
		toggleVisibility('.women-players', '.men-players');
		// Scroll to the top of the second container
		document.querySelector('.women-players').scrollIntoView();
		toggleActiveClass('btn-2', 'btn-1');
	});
});
