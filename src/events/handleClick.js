import { PlayerBullet } from "../objects/bullets/PlayerBullet.js"
import { Game } from "../Game.js";

const game = Game.getInstance();

export const handleClick = (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  const playerBullet = new PlayerBullet(mouseX, mouseY, 500);
  game.gameState.registerObject(playerBullet);
  console.log("aaa");
}
