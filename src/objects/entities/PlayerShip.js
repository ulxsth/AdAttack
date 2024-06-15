import { Entity } from "../Entity.js";

export class PlayerShip extends Entity {
  constructor(x, y, width, height, color, hp, direction) {
    super(x, y, width, height, color, hp, direction);
  }
}
