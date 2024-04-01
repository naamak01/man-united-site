import './style.css';

export function setupCounter(element) {
	let counter = 0; // Initialize a counter variable to 0
	const setCounter = (count) => {
		// Define a function to update the counter and the element's innerHTML
		counter = count;
		element.innerHTML = `count is ${counter}`; // Update the element's innerHTML to display the current count
	};

	// Add a click event listener to the element that increments the
	// counter by 1 eachtime the element is clicked
	element.addEventListener('click', () => setCounter(counter + 1));
	setCounter(0); // Initially set the counter to 0 by calling setCounter
}
