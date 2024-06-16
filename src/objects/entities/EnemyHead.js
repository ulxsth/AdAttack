import { Entity } from "../Entity.js";
import { EnemyBullet } from "../bullets/EnemyBullet.js";
import { EnemyCloseBtn } from "./EnemyCloseBtn.js";

export class EnemyHead extends Entity {
  constructor(x, y, speed) {
    super(x, y, 0, 0, "transparent", 0, 0, speed);
    this.children = [];
    this.shootIntervalId = setInterval(() => {
      this.shoot();
    }, 300);
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
    const spread = Math.random() / Math.PI;
    const direction = this.direction + spread;
    const bullet = new EnemyBullet(this.x, this.y, direction, 10);
    this.gameState.registerObject(bullet);
  }

  async update() {
    await super.update();

    // 閉じるボタンがすべて消されていたら自分を消す
    const closeBtns = this.children.filter((child) => child instanceof EnemyCloseBtn);
    if (closeBtns.length === 0) {
      this.destroy();
      return;
    }

    this.updateChildren();
    const playerPos = this.gameState.getPlayerPosition();
    this.faceTo(playerPos.x, playerPos.y);
  }

  updateChildren() {
    this.children.forEach((child) => {
      child.updatePosition(this.x, this.y);
    });
  }

  faceTo(x, y) {
    this.direction = Math.atan2(y - this.y, x - this.x);
  }

  destroy() {
    clearInterval(this.shootIntervalId);
    this.destroyChildren();
    this.gameState.removeObject(this);
  }
}
