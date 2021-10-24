import { Entity } from 'src/domain/shared/Entity';
import { UniqueEntityID } from 'src/domain/shared/UniqueEntityID';

export class ParticipantId extends UniqueEntityID {
  public static create(id?): ParticipantId {
    return new ParticipantId(id)
  }
}