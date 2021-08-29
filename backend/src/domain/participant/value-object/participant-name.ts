import { AbstractValueObject } from 'src/domain/shared/abstract-value-object';

export interface ParticipantNameProps {
  name: string;
}

export class ParticipantName extends AbstractValueObject<ParticipantNameProps> {
  private readonly props: ParticipantNameProps;

  constructor(props: ParticipantNameProps) {
    super(props);

    this.props = props;
  }

  get name(): string {
    return this._value.name;
  }
}
