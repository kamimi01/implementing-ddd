// @see https://docs.nestjs.com/openapi/types-and-parameters

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class PostIssuesRequest {
  @ApiProperty({
    description: '課題の名前',
    example: 'プラハチャレンジをDDDで実装する',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  name: string;
}
