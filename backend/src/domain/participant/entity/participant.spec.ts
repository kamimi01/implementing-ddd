import { UniqueEntityID } from 'src/domain/shared/UniqueEntityID';
import { Email, EmailProps } from '../value-object/email';
import {
  ParticipantName,
  ParticipantNameProps,
} from '../value-object/participant-name';
import { Participant, ParticipantProps } from './participant';

describe('参加者エンティティの単体テスト', () => {
  test('新規参加者エンティティのインスタンス生成', () => {
    // Arrange
    const email: EmailProps = {
      email: 'hoge@email.com',
    };
    const name: ParticipantNameProps = {
      name: '佐藤　花子',
    };
    const participantProps: ParticipantProps = {
      email: Email.create(email),
      name: ParticipantName.create(name),
    };

    // Act
    // Assert
    expect(() => Participant.create(participantProps)).not.toThrowError(
      '既に存在している参加者です',
    );
  });

  test('既存参加者エンティティ', () => {
    // Arrange
    const email: EmailProps = {
      email: 'hoge@email.com',
    };
    const name: ParticipantNameProps = {
      name: '佐藤　花子',
    };
    const participantProps: ParticipantProps = {
      email: Email.create(email),
      name: ParticipantName.create(name),
    };
    const id = new UniqueEntityID();

    // Act
    // Assert
    expect(() => Participant.create(participantProps, id)).toThrowError(
      '既に存在している参加者です',
    );
  });
});
