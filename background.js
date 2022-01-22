chrome.webNavigation.onHistoryStateUpdated.addListener(function (details) {
	if(!details.url.includes('upwork.com')) return

  chrome.tabs.executeScript(null, { file: "inject.js" });
});
