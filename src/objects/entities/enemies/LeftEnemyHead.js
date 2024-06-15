import { EnemyHead } from "../EnemyHead.js";

export class LeftEnemyHead extends EnemyHead {
  constructor(y, targetX, speed) {
    super(0, y, speed);
    this.targetX = targetX;
  }

  update() {
    if (this.x < this.targetX) {
      this.x += this.speed;
    }
  }
}
