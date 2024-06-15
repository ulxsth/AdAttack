//
//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//
//
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//                     永無BUG大仏
//


// ゲームを起動する
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "start") {
    (async () => {
      const { Game } = await import(chrome.runtime.getURL('src/Game.js'));
      const game = Game.getInstance();
      game.init();

      const canvas = document.getElementById('game');
      await registerAllEvent(canvas);
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

const registerAllEvent = async (canvas) => {
  const { handleKeyDown } = await import(chrome.runtime.getURL('src/events/handleKeyDown.js'));
  const { handleKeyUp } = await import(chrome.runtime.getURL('src/events/handleKeyUp.js'));
  const { handleCanvasClick } = await import(chrome.runtime.getURL('src/events/handleCanvasClick.js'));
  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('keyup', handleKeyUp);
  canvas.addEventListener('click', handleCanvasClick);
}

const unregisterAllEvent = (canvas) => {
  window.removeEventListener('keydown', handleKeyDown);
  window.removeEventListener('keyup', handleKeyUp);
  canvas.removeEventListener('click', handleCanvasClick);
}
