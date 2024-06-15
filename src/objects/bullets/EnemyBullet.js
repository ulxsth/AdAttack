import { Bullet } from "../Bullet.js";
import { PlayerShip } from "../entities/PlayerShip.js";

export class EnemyBullet extends Bullet {
  constructor(x, y, direction, damage) {
    super(x, y, 10, 10, "red", direction, damage, 5);
  }

  update() {
    const player = this.gameState.getObjectByClass(PlayerShip);
    if (this.isCollidingWith(player)) {
      player.damage(this.damage);
      this.destroy();
    }

    this.x += this.speed * Math.cos(this.direction);
    this.y += this.speed * Math.sin(this.direction);
  }

  destroy() {
    this.gameState.destroyObject(this);
  }
}
