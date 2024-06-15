(async () => {
  const { Game } = await import(chrome.runtime.getURL('src/Game.js'));
  const game = new Game();
  game.init();
})()

