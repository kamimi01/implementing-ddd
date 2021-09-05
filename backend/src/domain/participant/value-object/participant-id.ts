import { AbstractValueObject } from 'src/domain/shared/abstract-value-object';
import { ParticipantNameProps } from './participant-name';

export interface ParticipantIdProps {
  id: string;
}

export class ParticipantId extends AbstractValueObject<ParticipantIdProps> {
  private readonly props: ParticipantIdProps;

  constructor(props: ParticipantIdProps) {
    super(props);

    this.props = props;
  }

  get id(): string {
    return this._value.id;
  }
}
