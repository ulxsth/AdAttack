import { Entity } from "../Entity.js";

export class EnemyPart extends Entity {
  /**
   * @param {number} offsetX 親の座標に対する相対座標
   * @param {number} offsetY 親の座標に対する相対座標
   */
  constructor(width, height, color, hp, direction, speed, offsetX, offsetY) {
    super(0, 0, width, height, color, hp, direction, speed);
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    this.shootIntervalId = null;
  }

  updatePosition(parentX, parentY) {
    this.x = parentX + this.offsetX;
    this.y = parentY + this.offsetY;
  }
}
