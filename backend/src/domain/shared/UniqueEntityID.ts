import { v4 } from 'uuid';
import { AbstractValueObject } from './abstract-value-object';

export class UniqueEntityID extends AbstractValueObject<string> {
  protected readonly _value: string;

  constructor(id?: string) {
    // idが存在しなければ、uuidで一意なIDを生成する
    const existingOrNewId = id ? id : v4();
    super(existingOrNewId);
    this._value = existingOrNewId;
  }

  get id(): string {
    return this._value;
  }
}
