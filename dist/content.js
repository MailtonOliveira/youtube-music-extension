"use strict";
// content.ts
// Função para extrair as informações da música
function extractMusicInfo() {
    const titleElement = document.querySelector('.title.style-scope.ytmusic-player-bar');
    const artistElement = document.querySelector('.byline.style-scope.ytmusic-player-bar.complex-string');
    const albumCoverElement = document.querySelector('#thumbnail img');
    if (titleElement && artistElement && albumCoverElement) {
        const title = titleElement.textContent?.trim() || '';
        const artist = artistElement.querySelector('a')?.textContent?.trim() || '';
        const albumCoverUrl = albumCoverElement.getAttribute('src') || '';
        return { title, artist, albumCoverUrl };
    }
    return { title: '', artist: '', albumCoverUrl: '' };
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
