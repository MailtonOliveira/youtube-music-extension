// Variável para armazenar as informações da música
let currentMusicInfo: null = null;

// Escuta mensagens do content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.musicInfo) {
       
        // Armazena as informações da música
        currentMusicInfo = message.musicInfo;

        // Atualiza a popup com as informações da música
        chrome.action.setPopup({ popup: "popup.html" });

        // Atualiza o ícone de badge para indicar que há informações da música disponíveis
        chrome.action.setBadgeText({ text: "♪" });
        chrome.action.setBadgeBackgroundColor({ color: "#ff0000" });
    }
});

// Listener para receber mensagens do popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.popupOpened && currentMusicInfo) {
        // Envia as informações da música para o popup
        chrome.runtime.sendMessage({ musicInfo: currentMusicInfo });
    }
});
