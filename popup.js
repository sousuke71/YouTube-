document.getElementById('download').addEventListener('click', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.scripting.executeScript({
      target: {tabId: tabs[0].id},
      function: downloadVideo
    });
  });
});

function downloadVideo() {
  // ダウンロードロジックをここに記述
  alert('Downloading video...');
}
