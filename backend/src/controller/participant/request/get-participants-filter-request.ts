// @see https://docs.nestjs.com/openapi/types-and-parameters

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { RegistrationStatus } from 'src/domain/participant/value-object/registration-status';

export class GetParticipantsFilterRequest {
  @ApiPropertyOptional({
    description: '取得するページ番号',
    minimum: 1,
  })
  @IsOptional()
  @IsNumber()
  page: number;

  @ApiPropertyOptional({
    description: '課題を識別するための唯一のID',
  })
  @IsOptional()
  @IsNumber()
  issueIds: number[];

  @ApiPropertyOptional({
    description:
      '参加者ごとの課題の進捗ステータス（未着手/着手中/レビュー待ち/完了）',
  })
  @IsOptional()
  @IsString()
  progressionStatus: string;
}
