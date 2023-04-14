const apiKey = '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'; // Replace with your ChatGPT API key

function defineWord(highlightedText) {
  const corsProxyUrl = 'https://api.allorigins.win/get?url=';
  const apiUrl = 'https://api.chatgpt.com/summarize'; // Replace with the appropriate API endpoint for defining text
  const requestData = {
    text: highlightedText,
    mode: 'define',
  };
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
  };

  // Make API request using fetch() and AllOrigins proxy server
  fetch(corsProxyUrl + encodeURIComponent(apiUrl) + '&callback=?', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(requestData),
  })
  .then(response => response.json())
  .then(data => {
    // Parse response data and display defined word to user
    const definedWord = data.contents.result;
    alert(`Defined word: ${definedWord}`);
  })
  .catch(error => {
    // Handle error if API request fails
    console.error('Error:', error);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const defineButton = document.querySelector('#definition-button');
  const summarizeButton = document.querySelector('#summarize-button');
  const textBox = document.querySelector('.textbox');

  textBox.addEventListener('mouseup', () => {
    if (textBox.selectionStart !== textBox.selectionEnd) {
      defineButton.disabled = false;
      summarizeButton.disabled = false;
    } else {
      defineButton.disabled = true;
      summarizeButton.disabled = true;
    }
  });

  defineButton.addEventListener('click', () => {
    const highlightedText = textBox.value.substring(textBox.selectionStart, textBox.selectionEnd);
    defineWord(highlightedText);
  });

  summarizeButton.addEventListener('click', () => {
    const highlightedText = textBox.value.substring(textBox.selectionStart, textBox.selectionEnd);
    summarizeText(highlightedText);
  });
});
