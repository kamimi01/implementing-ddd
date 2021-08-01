// @see https://docs.nestjs.com/openapi/types-and-parameters

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class PostIssuesRequest {
  @ApiProperty({ description: '課題の名前' })
  @IsNotEmpty()
  @IsString()
  name: string;
}
