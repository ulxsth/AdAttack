import { Game } from "../../../Game.js";
import { EnemyHead } from "../EnemyHead.js";
import { PlayerShip } from "../PlayerShip.js";


export class RightEnemyHead extends EnemyHead {
  constructor(y, targetX, speed) {
    super(0, y, speed);
    const { width: canvasWidth } = this.game.getCanvasSize();
    this.x = canvasWidth;
    this.targetX = targetX;
    this.speed = speed;
  }

  update() {
    const { x: playerX, y: playerY } = this.gameState.getObjectByClass(PlayerShip);
    this.updateChildren();
    this.faceTo(playerX, playerY);
    if (this.x > this.targetX) {
      this.x -= this.speed;
    }
  }
}
