import { UniqueEntityID } from './UniqueEntityID';

// isEntityがtrueの場合、vはEntity型として推論される
// https://qiita.com/ryo2132/items/ce9e13899e45dcfaff9b
const isEntity = (v: any): v is Entity<any> => {
  // オブジェクトがどのコンストラクタから生成されたかを判定する
  // https://webtechdays.com/?p=299
  return v instanceof Entity;
};

export abstract class Entity<T> {
  // JavaScriptでは、全てのクラスメンバーはpublicのため、privateなプロパティにはアンダースコアをつける
  // https://stackoverflow.com/questions/40587873/naming-convention-for-class-properties-in-typescript?rq=1
  protected readonly _id: UniqueEntityID;
  public readonly props: T;

  constructor(props: T, id?: UniqueEntityID) {
    // idが存在しなければ、UniqueEntityIDインスタンスを生成する
    this._id = id ? id : new UniqueEntityID();
    this.props = props;
  }

  public equals(object?: Entity<T>): boolean {
    if (object == null || object == undefined) {
      return false;
    }

    if (this === object) {
      return true;
    }

    if (!isEntity(object)) {
      return false;
    }

    return this._id.equals(object._id);
  }
}
