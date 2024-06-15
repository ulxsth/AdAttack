import { Game } from "../../Game.js";
import { GameState } from "../../states/GameState.js";
import { LeftEnemyHead } from "./enemies/LeftEnemyHead.js";
import { RightEnemyHead } from "./enemies/RightEnemyHead.js";
import { EnemyPart } from "./EnemyPart.js";
import { EnemyCloseBtn } from "./EnemyCloseBtn.js";

export class EnemySummoner {
  constructor() {
    this.summonIntervalId = null;
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new EnemySummoner();
    }
    return this.instance;
  }

  createSummonInterval = (amount, interval) => {
    this.summonIntervalId = setInterval(() => {
      for (let i = 0; i < amount; i++) {
        this.createEnemy();
      }
    }, interval);
  }

  createEnemy = () => {
    const game = Game.getInstance();
    const gameState = GameState.getInstance();
    const { width: canvasWidth, height: canvasHeight } = game.getCanvasSize();
    const direction = Math.random() > 0.5 ? 'left' : 'right';
    const y = Math.random() * canvasHeight;

    if (direction === 'left') {
      const targetX = canvasWidth / 5;
      const enemyHead = new LeftEnemyHead(y, targetX, 1);
      const enemyBody = new EnemyPart(50, 50, "red", 100, 0, 15, 0, 0);
      const enemyCloseBtn = new EnemyCloseBtn(45, -5);
      enemyHead.registerChild(enemyBody);
      enemyHead.registerChild(enemyCloseBtn);
      gameState.registerObject(enemyHead);
      gameState.registerObject(enemyBody);
      gameState.registerObject(enemyCloseBtn);
    } else {
      const targetX = canvasWidth * 4 / 5;
      const enemyHead = new RightEnemyHead(y, targetX, 1);
      const enemyBody = new EnemyPart(50, 50, "red", 100, 0, 15, 0, 0);
      const enemyCloseBtn = new EnemyCloseBtn(45, -5);
      enemyHead.registerChild(enemyBody);
      enemyHead.registerChild(enemyCloseBtn);
      gameState.registerObject(enemyHead);
      gameState.registerObject(enemyBody);
      gameState.registerObject(enemyCloseBtn);
    }
  };

  deleteSummonInterval = () => {
    clearInterval(this.summonIntervalId);
  }
}
