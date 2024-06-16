import { Game } from "../Game.js";
import { GameState } from "../states/GameState.js";
import { InteractionState } from "../states/InteractionState.js";
import { ImageLoader } from "../utils/ImageLoader.js";

export class GameObject {
  constructor(x, y, width, height, imgPath, direction) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.img = null;
    this.imgPath = imgPath;
    this.direction = direction;

    // 各インスタンスへの参照を保持
    this.game = Game.getInstance();
    this.gameState = GameState.getInstance();
    this.interactionState = InteractionState.getInstance();
  }

  async update() {
    if (this.img === null) {
      this.img = await ImageLoader.load(this.imgPath);
    }
  }

  /**
   * 重なっている部分があるかを検査する。
   * @param {Object} obj
   * @returns {boolean}
   */
  isCollidingWith = (obj) => {
    // 長方形を (x..x+w), (y..y+h) のふたつの範囲として捉え、
    // 2つのオブジェクトのそれぞれの範囲が重なっているかを考える

    const isXOverlapped = this.x < (obj.x + obj.width) &&
      (this.x + this.width) > obj.x ||
      obj.x < (this.x + this.width) &&
      (obj.x + obj.width) > this.x;

    const isYOverlapped = this.y < (obj.y + obj.height) &&
      (this.y + this.height) > obj.y ||
      obj.y < (this.y + this.height) &&
      (obj.y + obj.height) > this.y;

    return isXOverlapped && isYOverlapped;
  };

  /**
   * オブジェクトが画面外に出ているかを検査する。
   * @returns {boolean}
   */
  isOutOfScreen = () => {
    const canvasWidth = this.game.canvas.width;
    const canvasHeight = this.game.canvas.height;
    return this.isCollidingWith({ x: 0, y: 0, width: canvasWidth, height: canvasHeight });
  };

  destroy() { }
}
