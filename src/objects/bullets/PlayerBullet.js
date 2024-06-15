import { Bullet } from "../Bullet.js";

export class PlayerBullet extends Bullet {
  constructor(x, y, damage) {
    super(x, y, 1, 1, "blue", 0, damage, 0);
    this.existTime = 3;
  }

  update() {
    this.existTime--;
    if (this.existTime <= 0) {
      this.gameState.removeObject(this);
    }
  }
}
