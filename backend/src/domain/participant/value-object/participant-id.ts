import { Entity } from 'src/domain/shared/Entity';
import { UniqueEntityID } from 'src/domain/shared/UniqueEntityID';

export class ParticipantId extends UniqueEntityID {
  // private readonly _id: string;

  private constructor(id: string) {
    super(id);
    // this._id = id;
  }

  public static create(id?): ParticipantId {
    return new ParticipantId(id);
  }

  get id(): string {
    return this._value;
  }
}