import { AbstractValueObject } from 'src/domain/shared/abstract-value-object';

export interface EmailProps {
  email: string;
}

export class Email extends AbstractValueObject<EmailProps> {
  private readonly props: EmailProps;

  constructor(props: EmailProps) {
    super(props);

    if (!this.isValid(props)) {
      throw new Error('Emailアドレスの形式が誤っています');
    }

    this.props = props;
  }

  private isValid(props: EmailProps): boolean {
    const reg =
      /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$/;

    if (!reg.test(props.email)) {
      return false;
    }

    return true;
  }

  // 取得用メソッドは作成するが、変更用のメソッドは外部に公開しないことでバリューオブジェクトの不変性の特徴を実装する
  get email(): string {
    return this._value.email;
  }
}
