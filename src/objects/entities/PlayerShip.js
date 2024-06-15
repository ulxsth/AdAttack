import { Entity } from "../Entity.js";
import { Game } from "../../Game.js";
import { InteractionState } from "../../states/InteractionState.js";

const game = Game.getInstance();
const interactionState = InteractionState.getInstance();

export class PlayerShip extends Entity {
  constructor(x, y, width, height, color, hp, direction) {
    super(x, y, width, height, color, hp, direction);
  }

  update() {
    const { width: canvasWidth, height: canvasHeight } = game.getCenterOfCanvas();
    const flags = interactionState.getAllFlags();

    // 移動
    if (!this.isFocusing) {
      if (flags.up && this.y - PLAYER_SPEED >= 0) {
        this.y -= PLAYER_SPEED;
      }
      if (flags.left && this.x - PLAYER_SPEED >= 0) {
        this.x -= PLAYER_SPEED;
      }
      if (flags.down && this.y + PLAYER_SPEED + PLAYER_SHIP_HEIGHT <= canvasHeight) {
        this.y += PLAYER_SPEED;
      }
      if (flags.right && this.x + PLAYER_SPEED + PLAYER_SHIP_WIDTH <= canvasWidth) {
        this.x += PLAYER_SPEED;
      }
    }
  }
}
