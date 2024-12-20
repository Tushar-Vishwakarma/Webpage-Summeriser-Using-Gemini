chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "summarizePage",
    title: "Summarize this page",
    contexts: ["page"]
  });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === "summarizePage") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: summarizePage
    });
  }
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
      length: 'medium' // Adjust length here as needed
    })
  });
  
  const result = await response.json();
  alert(result.summary);
}
