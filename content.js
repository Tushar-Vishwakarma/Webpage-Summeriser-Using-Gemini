function extractMainContent() {
  // Try to extract the main content from common page elements
  const bodyText = document.body.innerText;
  return bodyText;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "extractContent") {
    sendResponse(extractMainContent());
  }
});
