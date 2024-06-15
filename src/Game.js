import { GameState } from "./states/GameState.js";
import { InteractionState } from "./states/InteractionState.js";
import { PlayerShip } from "./objects/entities/PlayerShip.js";

export class Game {
  // TODO: private にしたい
  constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.canvas.id = 'game';
    this.canvas.style.backgroundColor = 'transparent';

    this.context = this.canvas.getContext('2d');

    this.gameState = GameState.getInstance();
    this.interactionState = InteractionState.getInstance();
  }

  static getInstance() {
    if (!Game.instance) {
      Game.instance = new Game();
    }
    return Game.instance;
  }

  init() {
    console.log("loaded!");
    document.body.appendChild(this.canvas);

    this.gameState.registerObject(new PlayerShip(100, 100, 10, 10, 'blue', 100, 0));

    this.#render();
  }

  #draw() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // for debug
    this.context.font = "20px Arial";
    this.context.fillText(this.gameState.gameStatus, 20, 20);
    this.context.fillText("FPS: " + this.#calculateFPS(), 20, 40);

    if(this.gameState.gameStatus === "playing") {
      this.gameState.getAllObjects().forEach(object => {
        // 更新処理
        object.update();

        // 描画処理
        this.context.fillStyle = object.color;
        this.context.fillRect(object.x, object.y, object.width, object.height);
      });
    }

    this.#render();
  }


  #calculateFPS = () => {
    let fps = 0;
    const now = performance.now();
    if (this.lastTime) {
      const delta = (now - this.lastTime) / 1000;
      fps = 1 / delta;
    }
    this.lastTime = now;
    return Math.floor(fps * 10) / 10;
  };

  #render() {
    window.requestAnimationFrame(this.#draw.bind(this));
  }
}
