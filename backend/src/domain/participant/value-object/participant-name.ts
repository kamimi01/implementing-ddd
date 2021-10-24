import { AbstractValueObject } from 'src/domain/shared/abstract-value-object';

export interface ParticipantNameProps {
  value: string;
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

  get value(): string {
    return this.props.value;
  }
}
