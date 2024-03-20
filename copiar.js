function copiarTexto() {
  // Get the text to be copied
  const texto = document.querySelector('.texto-criptografado p').innerText;

  // Create a new text area element
  const textArea = document.createElement('textarea');

  // Set the value of the text area to the text to be copied
  textArea.value = texto;

  // Add the text area to the document
  document.body.appendChild(textArea);

  // Select the text in the text area
  textArea.select();

  // Copy the text
  document.execCommand('copy');

  // Remove the text area from the document
  document.body.removeChild(textArea);

  // Show the copied message
  const copiedMessage = document.querySelector('#copied-message');
  copiedMessage.classList.remove('d-none');

  // Hide the message after 1 second
  setTimeout(() => {
    copiedMessage.classList.add('d-none');
  }, 1000);
}