const textbox = document.querySelector('.textbox');
const definitionButton = document.getElementById('definition-button');
const summarizeButton = document.getElementById('summarize-button');
const saveButton = document.getElementById('save-button');

// Listen for text selection events
textbox.addEventListener('mouseup', () => {
	const selectedText = window.getSelection().toString().trim();
	if (selectedText.length > 1) {
		// Enable buttons when text is selected
		definitionButton.disabled = false;
		summarizeButton.disabled = false;
		saveButton.disabled = false;
	} else {
		// Disable buttons when no text is selected
		definitionButton.disabled = true;
		summarizeButton.disabled = true;
		saveButton.disabled = true;
	}
});
