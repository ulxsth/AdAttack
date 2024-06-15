import { GameObject } from "../GameObject.js";
import { EnemyBullet } from "../bullets/EnemyBullet.js";

export class EnemyHead extends GameObject {
  constructor(x, y) {
    super(x, y, 0, 0, "transparent", 0);
    this.children = [];
    this.shootIntervalId = setInterval(() => {
      this.shoot();
    }, 200);
  }

  /**
   * 子要素を追加する。
   * @param {EnemyChild} child
   */
  registerChild(child) {
    this.children.push(child);
  }

  /**
   * 子要素を破壊する。
   * @param {EnemyChild} child
   */
  destroyChild(child) {
    this.children = this.children.filter((c) => c !== child);
    child.destroy();
  }

  /**
   * 子要素をすべて破壊する。
   */
  destroyChildren() {
    this.children.forEach((child) => {
      this.destroyChild(child);
    });
  }

  /**
   * 弾を発射する。
   */
  shoot() {
    const bullet = new EnemyBullet(this.x, this.y, this.direction, 1);
    this.gameState.registerObject(bullet);
  }

  update() {
    this.children.forEach((child) => {
      child.updatePosition(this.x, this.y);
    });
  }

  destroy() {
    clearInterval(this.shootIntervalId);
    this.destroyChildren();
    this.gameState.destroyObject(this);
  }
}
