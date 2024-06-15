import { gameStatus } from "../constants/GameStatus.js";

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

  destroyObject(object) {
    // TODO: 各オブジェクトのdestroyメソッドを呼び出す
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

  update() {
    this.objects.forEach(object => {
      object.update();
    });
  }
}
