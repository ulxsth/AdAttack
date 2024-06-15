export class Game {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.canvas.id = 'game';
    this.canvas.style.backgroundColor = 'transparent';

    this.context = this.canvas.getContext('2d');
  }

  init() {
    console.log("loaded!");
    document.body.appendChild(this.canvas);

    this._render();
  }

  _draw() {
    this.canvas.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this._render();
  }

  _render() {
    window.requestAnimationFrame(this._draw.bind(this));
  }
}
