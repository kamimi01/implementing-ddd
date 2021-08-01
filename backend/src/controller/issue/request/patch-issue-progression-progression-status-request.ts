// @see https://docs.nestjs.com/openapi/types-and-parameters

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { ProgressionStatus } from 'src/domain/issue/value-object/progression-status';

export class PatchIssueProgressionStatusRequest {
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
    example: 'waitingForReview',
  })
  @IsNotEmpty()
  @IsString()
  // TODO: stringではなく、unionを使用したデータ型に変更する
  progressionStatus: ProgressionStatus;
}
