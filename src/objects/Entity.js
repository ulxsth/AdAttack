import { GameObject } from "./GameObject.js";
import { GameState } from "../states/GameState.js";

const gameState = GameState.getInstance();

export class Entity extends GameObject {
  constructor(x, y, width, height, color, hp, direction, speed) {
    super(x, y, width, height, color, direction);
    this.hp = hp;
    this.speed = speed;
  }

  damage(damage) {
    this.hp -= damage;
    if (this.hp <= 0) {
      gameState.removeObject(this);
    }
  }
}
