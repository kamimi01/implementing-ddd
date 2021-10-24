import { v4 } from 'uuid';
import { AbstractValueObject } from './abstract-value-object';

export class UniqueEntityID extends AbstractValueObject<string> {
  constructor(id?: string) {
    // idが存在しなければ、uuidで一意なIDを生成する
    super(id ? id : v4());
  }
}
