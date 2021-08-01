// @see https://docs.nestjs.com/openapi/types-and-parameters

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class PatchIssueProgressionStatusRequestPath {
  @ApiProperty({
    description: '課題を識別するための唯一のID',
    format: 'uuid',
    example: '354efbbe-3738-4dfe-bc93-2615e90825b4',
  })
  @IsNotEmpty()
  @IsString()
  issueId: string;

  @ApiProperty({
    description: '参加者を識別するための唯一のID',
    format: 'uuid',
    example: 'ae6b59c0-abff-4993-b2f5-76ba28e74c58',
  })
  @IsNotEmpty()
  @IsString()
  participantId: string;
}
