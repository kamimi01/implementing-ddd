// @see https://docs.nestjs.com/openapi/types-and-parameters

import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class PatchIssueProgressionStatusRequest {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  // TODO: stringではなく、unionを使用したデータ型に変更する
  progressionStatus: string
}