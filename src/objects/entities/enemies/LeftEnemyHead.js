import { EnemyHead } from "../EnemyHead.js";

export class LeftEnemyHead extends EnemyHead {
  constructor(y, targetX, speed) {
    super(0, y, speed);
    this.targetX = targetX;
    this.speed = speed;
  }

  update() {
    this.updateChildren();
    if (this.x < this.targetX) {
      this.x += this.speed;
    }
  }
}
