import { LeftEnemyHead } from "./enemies/LeftEnemyHead.js";
import { RightEnemyHead } from "./enemies/RightEnemyHead.js";
import { EnemyPart } from "./EnemyPart.js";

export class EnemyFactory {
  constructor(gameState, amount, interval, sleep) {
    this.gameState = gameState;
    this.amount = amount;
    this.interval = interval;
    this.summonIntervalId = null;
  }

  createSummonInterval = () => {
    this.summonIntervalId = setInterval(() => {
      for (let i = 0; i < this.amount; i++) {
        this.createEnemy();
      }
    }, this.interval);
  }

  createEnemy = () => {
    const { width: canvasWidth, height: canvasHeight } = this.gameState.etCanvasSize();
    const direction = Math.random() > 0.5 ? 'left' : 'right';
    const y = Math.random() * canvasHeight;

    if (direction === 'left') {
      const targetX = canvasWidth / 5;
      const enemyHead = new LeftEnemyHead(y, targetX, 1);
      const enemyBody = new EnemyPart(50, 50, "red", 100, 0, 15, 0, 0);
      const enemyCloseBtn = new EnemyPart(10, 10, "black", 100, 0, 15, 45, -5);
      enemyHead.registerChild(enemyBody);
      enemyHead.registerChild(enemyCloseBtn);
      this.gameState.registerObject(enemyHead);
      this.gameState.registerObject(enemyBody);
      this.gameState.registerObject(enemyCloseBtn);
    } else {
      const targetX = canvasWidth * 4 / 5;
      const enemyHead = new RightEnemyHead(y, targetX, 1);
      const enemyBody = new EnemyPart(50, 50, "red", 100, 0, 15, 0, 0);
      const enemyCloseBtn = new EnemyPart(10, 10, "black", 100, 0, 15, 45, -5);
      enemyHead.registerChild(enemyBody);
      enemyHead.registerChild(enemyCloseBtn);
      this.gameState.registerObject(enemyHead);
      this.gameState.registerObject(enemyBody);
      this.gameState.registerObject(enemyCloseBtn);
    }
  };
}
