import './style.css';

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
	document.getElementById('btn-1').addEventListener('click', () => {
		toggleVisibility('.men-players', '.women-players');
		toggleActiveClass('btn-1', 'btn-2');
	});

	document.getElementById('btn-2').addEventListener('click', () => {
		toggleVisibility('.women-players', '.men-players');
		toggleActiveClass('btn-2', 'btn-1');
	});
});
