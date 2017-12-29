// background.js

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.create({ 'url': "https://wwww.reddit.com/r/programming" });
    chrome.tabs.create({ 'url': "https://wwww.reddit.com/r/cscareerquestions" });
    chrome.tabs.create({ 'url': "https://wwww.reddit.com/r/videos" });
    chrome.tabs.create({ 'url': "https://wwww.reddit.com/" });
    chrome.tabs.create({ 'url': "https://www.youtube.com/" });
});