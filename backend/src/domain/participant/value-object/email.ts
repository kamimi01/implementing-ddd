import { AbstractValueObject } from 'src/domain/shared/abstract-value-object';

export interface EmailProps {
  value: string;
}

export class Email extends AbstractValueObject<EmailProps> {
  private readonly props: EmailProps;

  private constructor(props: EmailProps) {
    super(props);
    this.props = props;
  }

  public static create(props: EmailProps): Email {
    if (!this.isValid(props)) {
      throw new Error('Emailアドレスの形式が誤っています');
    }

    return new Email(props);
  }

  private static isValid(props: EmailProps): boolean {
    const reg =
      /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$/;

    if (!reg.test(props.value)) {
      return false;
    }

    return true;
  }

  get value(): string {
    return this.props.value;
  }
}
