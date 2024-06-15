export class GameObject {
  constructor(x, y, width, height, color, direction) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.direction = direction;
  }

  update() {}

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

  destroy() {}
}
