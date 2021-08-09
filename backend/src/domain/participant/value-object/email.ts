import { AbstractValueObject } from 'src/domain/shared/abstract-value-object';

interface EmailProps {
  email: string;
}

export class Email extends AbstractValueObject<EmailProps> {
  private constructor(props: EmailProps) {
    super(props);
  }

  public static create(props: EmailProps): Email {
    const reg =
      /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$/;

    if (
      props.email === undefined ||
      props.email === null ||
      !reg.test(props.email)
    ) {
      throw new Error('Emailアドレスの形式が誤っています');
    } else {
      return new Email(props);
    }
  }

  get email(): string {
    return this._value.email;
  }
}
