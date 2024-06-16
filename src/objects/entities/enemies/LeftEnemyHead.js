import { EnemyHead } from "../EnemyHead.js";
import { EnemyCloseBtn } from "../EnemyCloseBtn.js";

export class LeftEnemyHead extends EnemyHead {
  constructor(y, targetX, speed) {
    super(0, y, speed);
    this.targetX = targetX;
    this.speed = speed;
  }

  async update() {
    await super.update();
    const closeBtns = this.children.filter((child) => child instanceof EnemyCloseBtn);
    console.log(closeBtns);
    if (closeBtns.length === 0) {
      this.destroy();
      return;
    }

    this.updateChildren();
    if (this.x < this.targetX) {
      this.x += this.speed;
    }
  }
}
