export class GameState {
  constructor() {
    this.objects = [];
    this.gameStatus = "playing";
  }

  update() {
    this.objects.forEach(object => {
      object.update();
    });
  }
}
