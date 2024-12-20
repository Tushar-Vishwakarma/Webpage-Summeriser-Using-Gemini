// Function to extract main content from the page (could be improved based on more advanced algorithms)
function extractMainContent() {
  const bodyText = document.body.innerText;
  return bodyText;
}

// Floating button for summary
const floatingButton = document.createElement('div');
floatingButton.id = 'floatingBtn';
floatingButton.innerText = 'S';
document.body.appendChild(floatingButton);

floatingButton.addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'summarizePage' });
});
