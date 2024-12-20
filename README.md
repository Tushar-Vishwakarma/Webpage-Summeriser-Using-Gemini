# Webpage-Summeriser-Using-Gemini (CHROME EXTENSION)

**Overview**
The Web Page Summarizer is a Chrome extension that allows users to summarize the main content of the active webpage using the Gemini API. With customizable summary lengths and an easy-to-use floating button or popup interface, this tool provides quick insights into webpage content.


**Features**
- Summarizes the main content of the active tab.
- Customizable summary length (default: medium).
- Trigger summaries via a popup button or a floating icon on the webpage.
- Utilizes the Gemini API for accurate text summarization.


**Installation**
- Clone the repository or download the ZIP file
- Open Chrome and navigate to chrome://extensions/.
- Enable Developer Mode (toggle in the top-right corner).
- Click Load unpacked and select the folder containing the project files.
- The extension will now be installed and appear in your extensions toolbar.


**Usage**
Option 1: Using the Popup
- Click the extension icon in the toolbar.
- In the popup window, click the Summarize button.
- View the generated summary in the popup.

Option 2: Using the Floating Button
- Navigate to any webpage.
- Click the floating "S" button in the bottom-right corner of the page.
- An alert with the summary will appear.

**Project Structure**
web-page-summarizer/
├── manifest.json      # Chrome extension metadata and permissions
├── background.js      # Handles background tasks like API requests
├── content.js         # Extracts main webpage content
├── popup.html         # HTML structure for the popup interface
├── popup.js           # JavaScript for popup interactions
├── styles.css         # Styles for the popup and floating button
├── utils.js           # Utility functions for content extraction
└── images/            # Icon images for the extension


**Configuration**
- Gemini API Key
- To use the Gemini API for summarization, replace YOUR_GEMINI_API_KEY in background.js and popup.js with your actual Gemini API key:
- Authorization: `ENTER GEMINI KEY`


**Permissions**
The extension requires the following permissions:
- activeTab: To access the content of the active tab.
- contextMenus: To add context menu options for summarization.


**Known Issues**
- The summarization may fail if the API key is incorrect or if the API rate limit is exceeded.
- Content extraction relies on the document.body.innerText and may include extraneous text from the webpage.


**Contributing**
Contributions are welcome! If you encounter issues or have ideas for new features, feel free to open an issue or submit a pull request.



**Acknowledgments**
- Gemini API for the summarization functionality.
- Chrome Extensions API for the framework to build this tool.



