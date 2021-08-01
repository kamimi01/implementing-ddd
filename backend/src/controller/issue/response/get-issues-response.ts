import { ApiProperty } from '@nestjs/swagger';
import { ProgressionStatus } from 'src/domain/issue/value-object/progression-status';

export class Issues {
  @ApiProperty({ description: '課題を識別するための唯一のID' })
  id: string;

  @ApiProperty({ description: '課題の名前' })
  name: string;

  @ApiProperty({
    description:
      '参加者ごとの課題の進捗ステータス（未着手/着手中/レビュー待ち/完了）',
    enum: {
      notStarted: 'notStarted',
      working: 'working',
      waitingForReview: 'waitingForReview',
      completed: 'completed',
    },
    enumName: 'ProgressionStatus',
  })
  progressionStatus: ProgressionStatus;
}
