chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.musicInfo) {
                
      const musicInfoElement = document.getElementById("musicInfo");
      if (musicInfoElement) {
        musicInfoElement.innerHTML = `
          <p>Music: ${message.musicInfo.title}</p>
          <p>Artist: ${message.musicInfo.artist}</p>
        `;
      }
    }
  });
  