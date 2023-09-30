chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.musicInfo) {
      const albumCoverElement = document.getElementById("albumCover");
      const titleElement = document.getElementById("title");
      const artistElement = document.getElementById("artist");
      
      if (albumCoverElement) {
          albumCoverElement.style.backgroundImage = `url(${message.musicInfo.albumCoverUrl})`;
      }
      
      if (titleElement) {
          titleElement.textContent = message.musicInfo.title;
      }
      
      if (artistElement) {
          artistElement.textContent = message.musicInfo.artist;
      }
  }
});
