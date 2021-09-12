import { AbstractValueObject } from 'src/domain/shared/abstract-value-object';

export interface ParticipantNameProps {
  name: string;
}

export class ParticipantName extends AbstractValueObject<ParticipantNameProps> {
  private readonly props: ParticipantNameProps;

  private constructor(props: ParticipantNameProps) {
    super(props);

    this.props = props;
  }

  public static create(props: ParticipantNameProps): ParticipantName {
    return new ParticipantName(props);
  }

  get name(): string {
    return this._value.name;
  }
}
