// @see https://docs.nestjs.com/openapi/types-and-parameters

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ProgressionStatus } from 'src/domain/issue/value-object/progression-status';
import { RegistrationStatus } from 'src/domain/participant/value-object/registration-status';

export class GetParticipantsFilterRequest {
  @ApiPropertyOptional({
    description: '取得するページ番号',
    minimum: 1,
    example: 1,
  })
  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  page: number;

  @ApiPropertyOptional({
    description: '課題を識別するための唯一のID',
    minItems: 1,
    example: [5, 12],
  })
  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  issueIds: number[];

  @ApiPropertyOptional({
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
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  progressionStatus: ProgressionStatus;
}
