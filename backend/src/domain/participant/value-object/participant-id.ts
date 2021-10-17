import { Entity } from 'src/domain/shared/Entity';
import { UniqueEntityID } from 'src/domain/shared/UniqueEntityID';

export class ParticipantId extends UniqueEntityID {
  private constructor(id?) {
    super(id);
  }

  public static create(id?: UniqueEntityID): ParticipantId {
    return new ParticipantId(id)
  }
}
