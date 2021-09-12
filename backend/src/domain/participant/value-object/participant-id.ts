import { Entity } from 'src/domain/shared/Entity';
import { UniqueEntityID } from 'src/domain/shared/UniqueEntityID';

export class ParticipantId extends Entity<any> {

  constructor(id?: UniqueEntityID) {
    super(null, id);
  }

  get id(): string {
    return this.id;
  }
}
