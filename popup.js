document.getElementById('summarizeBtn').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: summarizePage
    });
  });
});

async function summarizePage() {
  const response = await fetch('https://api.gemini.com/v1/summarize', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `ENTER YOUR KEY`
    },
    body: JSON.stringify({
      text: document.body.innerText,
      length: 'medium'
    })
  });

  const result = await response.json();
  document.getElementById('summaryContainer').innerText = result.summary;
}
