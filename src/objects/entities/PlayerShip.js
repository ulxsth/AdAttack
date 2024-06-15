import { gameStatus } from "../../constants/GameStatus.js";
import { Entity } from "../Entity.js";


export class PlayerShip extends Entity {
  constructor(x, y, width, height, color, hp, direction, speed) {
    super(x, y, width, height, color, hp, direction, speed);
  }

  update() {
    const { width: canvasWidth, height: canvasHeight } = this.game.getCanvasSize();
    const flags = this.interactionState.getAllFlags();

    // 移動
    if (flags.up && this.y - this.speed >= 0) {
      this.y -= this.speed;
    }
    if (flags.left && this.x - this.speed >= 0) {
      this.x -= this.speed;
    }
    if (flags.down && this.y + this.speed + this.height <= canvasHeight) {
      this.y += this.speed;
    }
    if (flags.right && this.x + this.speed + this.width <= canvasWidth) {
      this.x += this.speed;
    }
  }

  destroy() {
    this.gameState.gameStatus = gameStatus.gameover;
  }
}
