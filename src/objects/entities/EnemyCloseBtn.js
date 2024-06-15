import { EnemyHead } from "./EnemyHead.js";
import { EnemyPart } from "./EnemyPart.js";

export class EnemyCloseBtn extends EnemyPart {
  constructor(offsetX, offsetY) {
    super(0, 0, 10, 10, "black", 1, "right", 0, offsetX, offsetY);
  }

  handleClick() {
    this.destroy();
  }

  destroy() {
    // 親オブジェクトのdestroyを呼び出す
    const parent = this.gameState.getObjectByClass(EnemyHead)
      .filter((head) => head.children.includes(this));
    parent.destroy();
  }
}
