import { ParticipantName, ParticipantNameProps } from './participant-name';

describe('参加者名のバリューオブジェクトの単体テスト', () => {
  test('参加者名バリューオブジェクトの等価性チェック', () => {
    // Arrange
    const participantName: ParticipantNameProps = {
      name: '佐藤 花子',
    };
    const participantNameObject1 = ParticipantName.create(participantName);
    const participantNameObject2 = ParticipantName.create(participantName);

    // Act
    // Assert
    expect(participantNameObject1.equals(participantNameObject2)).toBeTruthy;
  });

  test('参加者名の取得チェック', () => {
    // Arrange
    const participantNameProps: ParticipantNameProps = {
      name: '佐藤 花子',
    };
    const participantNameObject1 = ParticipantName.create(participantNameProps);

    // Act
    const participantName = participantNameObject1.name;

    // Assert
    expect(participantName).toEqual('佐藤 花子');
  });
});
