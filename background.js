// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
	// No tabs or host permissions needed!
	chrome.tabs.executeScript({
		code: 'document.getElementById("player-api").style.position="fixed"'
	});
	chrome.tabs.executeScript({
		code: 'document.getElementById("player-api").style.zIndex="999"'
	});
});