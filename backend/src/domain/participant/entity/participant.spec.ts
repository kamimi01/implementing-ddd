import { UniqueEntityID } from 'src/domain/shared/UniqueEntityID';
import { Email, EmailProps } from '../value-object/email';
import { ParticipantId } from '../value-object/participant-id';
import {
  ParticipantName,
  ParticipantNameProps,
} from '../value-object/participant-name';
import { RegistrationStatus } from '../value-object/registration-status';
import { Participant, ParticipantProps } from './participant';

let participantProps: ParticipantProps;

beforeEach(() => {
  // Arrange
  const email: EmailProps = {
    value: 'hoge@email.com',
  };
  const name: ParticipantNameProps = {
    value: '佐藤　花子',
  };
  participantProps = {
    email: Email.create(email),
    name: ParticipantName.create(name),
    registrationStatus: RegistrationStatus.Enroll,
  };
});

describe('参加者エンティティの単体テスト', () => {
  test('新規参加者エンティティのインスタンス生成', () => {
    // Arrange
    // Act
    // Assert
    expect(() => Participant.create(participantProps)).not.toThrowError(
      '既に存在している参加者です',
    );
  });

  test('IDによる等価チェック：IDが異なる場合', () => {
    // Arrange
    // Act
    const participant = Participant.create(participantProps);
    const newParticipant = Participant.create(participantProps);

    // Assert
    // プロパティが同じでも、IDが異なるため、異なるものと判別されるはず
    expect(participant.equals(newParticipant)).toBeFalsy();
  });

  test('参加者メールアドレスの取得', () => {
    // Arrange
    // Act
    const participant = Participant.create(participantProps);
    const email = participant.participantProps.email;

    // Assert
    expect(email).not.toBeNull();
    expect(email).not.toBeUndefined();
  });

  test('参加者の登録ステータスの取得', () => {
    // Arrange
    // Act
    const participant = Participant.create(participantProps);
    const status = participant.participantProps.registrationStatus;

    // Assert
    expect(status).not.toBeNull();
    expect(status).not.toBeUndefined();
  });
});
