var s = document.createElement('script');
// Need to add script to web_accessible_resources in manifest.json
s.src = chrome.extension.getURL('messageManager.js');
s.onload = function() {
  this.remove();
};
(document.head || document.documentElement).appendChild(s);

