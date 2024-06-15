import { GameObject } from "./GameObject.js";
import { GameState } from "../states/GameState.js";

const gameState = GameState.getInstance();

export class Bullet extends GameObject {
  constructor(x, y, width, height, color, direction, damage, speed) {
    super(x, y, width, height, color, direction);
    this.damage = damage;
    this.speed = speed;
  }

  update() {
    this.x += this.speed * Math.cos(this.direction);
    this.y += this.speed * Math.sin(this.direction);
  }
}
