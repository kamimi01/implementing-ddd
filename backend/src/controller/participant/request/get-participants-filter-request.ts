// @see https://docs.nestjs.com/openapi/types-and-parameters

import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { RegistrationStatus } from 'src/domain/participant/value-object/registration-status';

export class GetParticipantsFilterRequest {
  @ApiProperty({
    description: '取得するページ番号',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  page: number;

  @ApiProperty({
    description: '課題を識別するための唯一のID',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  issueIds: number[];

  @ApiProperty({
    description: '参加者ごとの課題の進捗ステータス（未着手/着手中/レビュー待ち/完了）',
    required: false,
  })
  @IsOptional()
  @IsString()
  progressionStatus: string;
}
