// @see https://docs.nestjs.com/openapi/types-and-parameters

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class PostParticipantsRequest {
  @ApiProperty({
    description: '参加者の名前',
    example: '松本花子',
    minLength: 1,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  name: string;

  @ApiProperty({
    description: '参加者のメールアドレス',
    format: 'email',
    example: 'hoge@mail.com',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  email: string;
}
