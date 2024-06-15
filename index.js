
// ゲームを起動する
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "start") {
    (async () => {
      const { Game } = await import(chrome.runtime.getURL('src/Game.js'));
      const game = Game.getInstance();
      await registerAllEvent();
      game.init();
    })()
  }
});

// ゲームを停止する（canvasの削除）
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "stop") {
    const element = document.getElementById('game');
    if (element) {
      element.remove();
    }

    unregisterAllEvent();
  }
});

const registerAllEvent = async () => {
  const { handleKeyDown } = await import(chrome.runtime.getURL('src/events/handleKeyDown.js'));
  const { handleKeyUp } = await import(chrome.runtime.getURL('src/events/handleKeyUp.js'));
  const { handleClick } = await import(chrome.runtime.getURL('src/events/handleClick.js'));
  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('keyup', handleKeyUp);
  window.addEventListener('click', handleClick);
}

const unregisterAllEvent = () => {
  window.removeEventListener('keydown', handleKeyDown);
  window.removeEventListener('keyup', handleKeyUp);
  window.removeEventListener('click', handleClick);
}
