export class InteractionState {
  constructor() {
    // TODO: ビットフラグ形式にリファクタ
    this.interactFlags = {
      up: false,
      down: false,
      left: false,
      right: false,
      leftClick: false,
      rightClick: false,
    };
  }

  static getInstance() {
    if (!InteractionState.instance) {
      InteractionState.instance = new InteractionState();
    }
    return InteractionState.instance;
  }

  /**
   * 特定のフラグが立っているかどうかを取得する。
   * @param {string} name フラグ名
   * @returns {boolean} フラグの値
   */
  isFlag(name) {
    if (this.interactFlags.hasOwnProperty(name)) {
      return this.interactFlags[name];
    } else {
      throw new Error(`Invalid flag name: ${name}`);
    }
  }

  /**
   * すべてのフラグを取得する。
   * @returns {Object} フラグの値
   */
  getAllFlags() {
    return this.interactFlags;
  }

  /**
   * フラグを更新する。
   * @param {string} flag フラグ名
   * @param {boolean} value フラグの値
   */
  setFlag(flag, value) {
    if (this.interactFlags.hasOwnProperty(flag)) {
      this.interactFlags[flag] = value;
      console.log(`${flag}: ${value}`);
    } else {
      throw new Error(`Invalid flag name: ${flag}`);
    }
  }
}
