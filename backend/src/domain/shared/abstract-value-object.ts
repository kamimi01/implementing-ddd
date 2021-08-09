export abstract class AbstractValueObject<T> {
  protected readonly _value: T;

  protected constructor(_value: T) {
    // Object.freezeにすることで変更不可能にする
    this._value = Object.freeze(_value);
  }

  equals(vo?: AbstractValueObject<T>): boolean {
    if (vo == null) {
      return false;
    }
    return this.shallowEqual(this._value, vo._value);
  }

  // shallow-equal-objectのコードを参考
  private shallowEqual = (objectA: any, objectB: any): boolean => {
    // 厳密等価
    if (objectA === objectB) {
      return true;
    }

    // objectAがobjectではないまたはnullの場合
    if (typeof objectA !== 'object' || objectA === null) {
      return false;
    }

    // objectBがobjectではないまたはnullの場合
    if (typeof objectB !== 'object' || objectB === null) {
      return false;
    }

    const keysA = Object.keys(objectA);
    const keysB = Object.keys(objectB);

    // キーの数が異なる場合
    if (keysA.length !== keysB.length) {
      return false;
    }

    // 属性値がそれぞれ等しいかを検証する
    for (let i = 0; i < keysA.length; i++) {
      const key = keysA[i];

      if (
        !this.hasOwn.call(objectB, key) ||
        !this.isEqual(objectA[key], objectB[key])
      ) {
        return false;
      }
    }

    return true;
  };

  // 特定のプロパティを保持しているか確認
  private hasOwn = Object.prototype.hasOwnProperty;

  // ここは何をしているのか？？
  private isEqual = (x: any, y: any): boolean => {
    if (x === y) {
      return x !== 0 || y !== 0 || 1 / x === 1 / y;
    }
    return x !== x && y !== y;
  };
}
