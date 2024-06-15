import { GameObject } from "../GameObject.js";

export class EnemyHead extends GameObject {
  constructor() {
    super(0, 0, 0, 0, "transparent", 0);
    this.children = [];
  }

  /**
   * 子要素を追加する。
   * @param {EnemyChild} child
   */
  registerChild(child) {
    this.children.push(child);
  }

  /**
   * 子要素を破壊する。
   * @param {EnemyChild} child
   */
  destroyChild(child) {
    this.children = this.children.filter((c) => c !== child);
  }
}
