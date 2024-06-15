import { gameStatus } from "../constants/GameStatus.js";
import { PlayerShip } from "../objects/entities/PlayerShip.js";

export class GameState {
  constructor() {
    this.objects = [];
    this.gameStatus = gameStatus.playing;
  }

  static getInstance() {
    if (!GameState.instance) {
      GameState.instance = new GameState();
    }
    return GameState.instance;
  }

  getObjectByClass(cls) {
    return this.objects.find(object => object instanceof cls);
  }

  getAllObjects() {
    return this.objects;
  }

  registerObject(object) {
    this.objects.push(object);
  }

  removeObject(object) {
    this.objects = this.objects.filter(obj => obj !== object);
  }

  get gameStatus() {
    return this._gameStatus;
  }

  set gameStatus(status) {
    if (!Object.values(gameStatus).includes(status)) {
      throw new Error("Invalid game status");
    }

    this._gameStatus = status;
  }

  getPlayerPosition() {
    const player = this.getObjectByClass(PlayerShip);
    return {
      x: player.x,
      y: player.y
    };
  }

  update() {
    this.objects.forEach(object => {
      object.update();
    });
  }
}
