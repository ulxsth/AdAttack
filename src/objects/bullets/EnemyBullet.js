import { Bullet } from "../Bullet.js";

export class EnemyBullet extends Bullet {
  constructor(x, y, direction, damage) {
    super(x, y, 10, 10, "red", direction, damage, 10);
  }
}
