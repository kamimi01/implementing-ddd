import { ParticipantId, ParticipantIdProps } from './participant-id';

describe('参加者IDのバリューオブジェクトの単体テスト', () => {
  test('参加者IDバリューオブジェクトの等価性チェック', () => {
    // Arrange
    const participantId: ParticipantIdProps = {
      id: '1',
    };
    const participantIdObject1 = new ParticipantId(participantId);
    const participantIdObject2 = new ParticipantId(participantId);

    // Act
    // Assert
    expect(participantIdObject1.equals(participantIdObject2)).toBeTruthy;
  });

  test('参加者IDの取得チェック', () => {
    // Arrange
    const participantIdProps: ParticipantIdProps = {
      id: '1',
    };
    const participantIdObject1 = new ParticipantId(participantIdProps);

    // Act
    const participantId = participantIdObject1.id

    // Assert
    expect(participantId).toEqual('1');
  });
});
