import { gameStatus } from "./constants/GameStatus.js";
import { EnemySummoner } from "./objects/entities/EnemySummoner.js";
import { PlayerShip } from "./objects/entities/PlayerShip.js";
import { GameState } from "./states/GameState.js";
import { InteractionState } from "./states/InteractionState.js";

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
    const center = this.getCenterOfCanvas();
    this.gameState.registerObject(
      new PlayerShip(center.x, center.y, 30, 30, 100, 0, 15)
    );

    const enemySummoner = EnemySummoner.getInstance();
    enemySummoner.createSummonInterval(3, 3000);
    this.#render();
  }

  #draw() {
    if (this.gameState.gameStatus === gameStatus.gameover) {
      const enemySummoner = EnemySummoner.getInstance();
      enemySummoner.deleteSummonInterval();

      const center = this.getCenterOfCanvas();
      this.context.font = "120px serif";
      this.context.textAlign = "center";
      this.context.fillStyle = "red";
      this.context.fillText("Game Over", center.x, center.y);
      return;
    }

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // for debug
    this.context.font = "20px Arial";
    this.context.fillText(this.gameState.gameStatus, 20, 20);
    this.context.fillText("FPS: " + this.#calculateFPS(), 20, 40);

    if (this.gameState.gameStatus === "playing") {
      this.gameState.getAllObjects().forEach(object => {
        // 更新処理
        object.update();

        // 描画処理
        // this.context.fillStyle = object.color;
        // this.context.fillRect(object.x, object.y, object.width, object.height);
        if (object.img) {
          this.context.drawImage(object.img, object.x, object.y, object.width, object.height);
        }
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

  getCanvasSize() {
    return {
      width: this.canvas.width,
      height: this.canvas.height
    };
  }

  getCenterOfCanvas() {
    return {
      x: this.canvas.width / 2,
      y: this.canvas.height / 2
    };
  }

  #render() {
    window.requestAnimationFrame(this.#draw.bind(this));
  }
}
