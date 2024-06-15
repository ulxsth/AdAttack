import { PlayerBullet } from "../objects/bullets/PlayerBullet.js"
import { GameState } from "../states/GameState.js";

const gameState = GameState.getInstance();

export const handleClick = (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  const playerBullet = new PlayerBullet(mouseX, mouseY, 500);
  gameState.registerObject(playerBullet);
}
