
// ゲームを起動する
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "start") {
    (async () => {
      const element = document.getElementById('game');
      if (element) {
        element.style.display = 'block';
      }

      const { Game } = await import(chrome.runtime.getURL('src/Game.js'));
      const game = Game.getInstance();
      game.init();
    })()
  }
});

// ゲームを停止する（canvasの削除）
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "stop") {
    const element = document.getElementById('game');
    if (element) {
      element.style.display = 'none';
    }
  }
});
