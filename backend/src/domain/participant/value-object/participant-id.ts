import { Entity } from 'src/domain/shared/Entity';
import { UniqueEntityID } from 'src/domain/shared/UniqueEntityID';

export class ParticipantId extends Entity<any> {

  private constructor(id?: UniqueEntityID) {
    super(null, id);
  }

  public static create(id?: UniqueEntityID): ParticipantId {
    return new ParticipantId(id)
  }

  get id(): string {
    return this.id;
  }
}
