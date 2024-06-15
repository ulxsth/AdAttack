import { GameState } from "./states/GameState.js";
import { InteractionState } from "./states/InteractionState.js";

export class Game {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.canvas.id = 'game';
    this.canvas.style.backgroundColor = 'transparent';

    this.context = this.canvas.getContext('2d');

    this.gameState = new GameState();
    this.interactionState = new InteractionState();
  }

  init() {
    console.log("loaded!");
    document.body.appendChild(this.canvas);

    this._render();
  }

  _draw() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // for debug
    this.context.font = "20px Arial";
    this.context.fillStyle = "white";
    this.context.fillText(this.gameState.gameStatus, 20, 20);

    this._render();
  }

  _render() {
    window.requestAnimationFrame(this._draw.bind(this));
  }
}
