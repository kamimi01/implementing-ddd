import { UniqueEntityID } from 'src/domain/shared/UniqueEntityID';
import { ParticipantId } from './participant-id';

describe('参加者IDのバリューオブジェクトの単体テスト', () => {
  test('新規参加者のID生成', () => {
    // Arrange
    const participantId = ParticipantId.create();

    // Act
    // Assert
  });

  test('参加者IDの取得チェック', () => {
    // Arrange
    const id = new UniqueEntityID();
    const participantId = ParticipantId.create(id);

    // Act
    // Assert
  });
});
