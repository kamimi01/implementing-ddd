// @see https://docs.nestjs.com/openapi/types-and-parameters

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class PostParticipantsRequest {
  @ApiProperty({ description: '参加者の名前' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: '参加者のメールアドレス' })
  @IsNotEmpty()
  @IsString()
  email: string;
}
