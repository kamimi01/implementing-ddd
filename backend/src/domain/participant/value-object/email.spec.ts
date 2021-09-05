import { Email, EmailProps } from './email';

describe('Emailバリューオブジェクトの単体テスト', () => {
  test('Emailバリューオブジェクトの等価性チェック', () => {
    // Arrange
    const email: EmailProps = {
      email: 'hoge@email.com',
    };
    const emailObject1 = new Email(email);
    const emailObject2 = new Email(email);

    // Act
    // Assert
    expect(emailObject1.equals(emailObject2)).toBeTruthy;
  });

  test('Emailアドレスが不正だった場合のエラーチェック', () => {
    // Arrange
    const email: EmailProps = {
      email: 'fugafugaemail',
    };

    // Act
    // Assert
    expect(() => new Email(email)).toThrowError(
      new Error('Emailアドレスの形式が誤っています'),
    );
  });

  test('Emailアドレスの取得チェック', () => {
    // Arrange
    const emailProps: EmailProps = {
      email: 'hoge@email.com',
    };
    const emailObject = new Email(emailProps);

    // Act
    const email = emailObject.email;

    // Assert
    expect(email).toEqual('hoge@email.com');
  });
});
