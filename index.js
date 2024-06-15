(async () => {
  const { Game } = await import(chrome.runtime.getURL('src/Game.js'));
  const game = new Game();
  game.init();
})()

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "stop") {
    var element = document.getElementById('game');
    if (element) {
      element.style.display = 'none';
    }
  }
  console.log("test");
});
