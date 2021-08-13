import { AbstractValueObject } from 'src/domain/shared/abstract-value-object';

interface EmailProps {
  email: string;
}

export class Email extends AbstractValueObject<EmailProps> {
  private readonly props: EmailProps;

  private constructor(props: EmailProps) {
    super(props);

    if (!this.isValid(props)) {
      throw new Error('Emailアドレスの形式が誤っています');
    }

    this.props = props
  }

  private isValid(props: EmailProps): boolean {
    const reg =
      /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$/;

    if (
      props.email === undefined ||
      props.email === null ||
      !reg.test(props.email)
    ) {
      return false;
    } else {
      return true;
    }
  }

  get email(): string {
    return this._value.email;
  }
}
