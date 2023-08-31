// content.ts

interface MusicInfo {
  title: string;
  artist: string;
}

// Função para extrair as informações da música
function extractMusicInfo(): MusicInfo {
  const titleElement = document.querySelector('.title.style-scope.ytmusic-player-bar');
  const artistElement = document.querySelector('.byline.style-scope.ytmusic-player-bar.complex-string');

  if (titleElement && artistElement) {
    const title = titleElement.textContent?.trim() || '';
    const artist = artistElement.querySelector('a')?.textContent?.trim() || '';

    return { title, artist };
  }

  return { title: '', artist: '' };
}


// Função para executar a extração e envio das informações periodicamente
function executePeriodically() {
  const musicInfo = extractMusicInfo();  
  chrome.runtime.sendMessage({ musicInfo });
}

// Espera até que a página e todos os recursos estejam completamente carregados
window.addEventListener('load', () => {
  executePeriodically();
  setInterval(() => {
    executePeriodically();
  }, 1000);
});