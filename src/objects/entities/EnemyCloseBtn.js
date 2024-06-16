import { PlayerBullet } from "../bullets/PlayerBullet.js";
import { EnemyHead } from "./EnemyHead.js";
import { EnemyPart } from "./EnemyPart.js";
import { GameState } from "../../states/GameState.js";

export class EnemyCloseBtn extends EnemyPart {
  constructor(offsetX, offsetY) {
    super(10, 10, "black", 1, "right", 0, offsetX, offsetY);
  }

  async update() {
    await super.update();
    const gameState = GameState.getInstance();
    const playerBullets = gameState.getObjectsByClass(PlayerBullet);
    if (!playerBullets) return;
    playerBullets.forEach((bullet) => {
      if (this.isCollidingWith(bullet)) {
        this.destroyFromParent();
        this.gameState.removeObject(this);
      }
    });
  }

  destroyFromParent() {
    const parent = this.gameState.getObjectsByClass(EnemyHead)
      .find((head) => head.children.includes(this));
    console.log(parent);
    parent.destroyChild(this);
  }
}
