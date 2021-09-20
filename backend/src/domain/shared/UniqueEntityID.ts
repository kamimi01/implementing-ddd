import { v4 } from 'uuid';
import { Identifier } from './Identifier';

export class UniqueEntityID extends Identifier<string | number> {

  constructor(id?: string | number) {
    // idが存在しなければ、uuidで一意なIDを生成する
    super(id ? id : v4());
  }
}
