import { PlayerBullet } from "../objects/bullets/PlayerBullet.js"
import { GameState } from "../states/GameState.js";

const gameState = GameState.getInstance();

export const handleCanvasClick = (event) => {
  // fix: クリック部分がずれてる
  var rect = event.target.getBoundingClientRect();
  const mouseX = event.clientX - Math.floor(rect.left);
  const mouseY = event.clientY - Math.floor(rect.top);

  const playerBullet = new PlayerBullet(mouseX, mouseY, 500);
  gameState.registerObject(playerBullet);
}
