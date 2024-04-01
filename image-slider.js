// Imports to allow JS file use the css attributes
import './style.css';

// Setting a counter for the slider
let counter = 1;

// Functions checks everytime the image is cheked it slides to that image
// It goes through all 6 images and reverts back to the first and repeats process
setInterval(() => {
	document.getElementById('radio' + counter).checked = true;
	counter++;

	if (counter > 8) {
		counter = 1;
	}
}, 6000);
