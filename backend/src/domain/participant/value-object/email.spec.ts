import { Email, EmailProps } from './email';

describe('Emailバリューオブジェクトの単体テスト', () => {
  test('Emailバリューオブジェクトの等価性チェック', () => {
    // Arrange
    const email: EmailProps = {
      value: 'hoge@email.com',
    };
    const emailObject1 = Email.create(email);
    const emailObject2 = Email.create(email);

    // Act
    // Assert
    expect(emailObject1.equals(emailObject2)).toBeTruthy;
  });

  test('Emailアドレスが不正だった場合のエラーチェック', () => {
    // Arrange
    const email: EmailProps = {
      value: 'fugafugaemail',
    };

    // Act
    // Assert
    expect(() => Email.create(email)).toThrowError(
      new Error('Emailアドレスの形式が誤っています'),
    );
  });
});
