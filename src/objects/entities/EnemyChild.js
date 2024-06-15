import { Entity } from "../Entity.js";

export class EnemyChild extends Entity {
  constructor(x, y, width, height, color, hp, direction, speed) {
    super(x, y, width, height, color, hp, direction, speed);
    // this.update = movePattern;
  }
}
