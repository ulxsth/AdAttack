import { GameObject } from "./GameObject.js";

export class Entity extends GameObject {
  constructor(x, y, width, height, color, hp, direction, speed) {
    super(x, y, width, height, color, direction);
    this.hp = hp;
    this.speed = speed;
  }

  damage(damage) {
    this.hp -= damage;
    if (this.hp <= 0) {
      this.destroy();
    }

    console.log(`${this.constructor.name} damaged: ${damage} (${this.hp} left)`);
  }

  destroy() {
    this.gameState.removeObject(this);
  }
}
