import { gameStatus } from "../constants/GameStatus.js";

export class GameState {
  constructor() {
    this.objects = [];
    this.gameStatus = gameStatus.playing;
  }

  update() {
    this.objects.forEach(object => {
      object.update();
    });
  }
}
