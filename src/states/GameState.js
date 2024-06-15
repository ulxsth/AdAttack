import { gameStatus } from "../constants/GameStatus.js";

export class GameState {
  constructor() {
    this.objects = [];
    this.gameStatus = gameStatus.playing;
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

  update() {
    this.objects.forEach(object => {
      object.update();
    });
  }
}
