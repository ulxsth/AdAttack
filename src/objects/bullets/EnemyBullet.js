import { Bullet } from "../Bullet.js";
import { PlayerShip } from "../entities/PlayerShip.js";

export class EnemyBullet extends Bullet {
  constructor(x, y, direction, damage) {
    super(x, y, 10, 10, "enemyBullet.png", direction, damage, 5);
  }

  async update() {
    await super.update();
    const player = this.gameState.getObjectByClass(PlayerShip);
    if (this.isCollidingWith(player)) {
      player.damage(this.damage);
      this.destroy();
    }
  }

  destroy() {
    this.gameState.removeObject(this);
  }
}
