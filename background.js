chrome.runtime.onInstalled.addListener(() => {
  console.log('YouTube Downloader extension installed');
});

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    function: downloadVideo
  });
});

function downloadVideo() {
  // ダウンロードロジックをここに記述
  alert('Downloading video...');
}
