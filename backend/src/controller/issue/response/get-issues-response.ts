import { ApiProperty } from '@nestjs/swagger';
import { ProgressionStatus } from 'src/domain/issue/value-object/progression-status';

export class Issues {
  @ApiProperty({
    description: '課題を識別するための唯一のID',
    format: 'uuid',
    example: '354efbbe-3738-4dfe-bc93-2615e90825b4',
  })
  id: string;

  @ApiProperty({
    description: '課題の名前',
    example: 'プラハチャレンジをDDDで実装する',
  })
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
    example: 'working',
  })
  progressionStatus: ProgressionStatus;
}
