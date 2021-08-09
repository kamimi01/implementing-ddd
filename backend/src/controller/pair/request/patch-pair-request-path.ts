// @see https://docs.nestjs.com/openapi/types-and-parameters

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class PatchPairRequestPath {
  @ApiProperty({
    description: 'ペアを識別するための一意のID',
    format: 'uuid',
    example: '8c7fd5c4-5bca-47ac-b15e-70b747d56611',
  })
  @IsNotEmpty()
  @IsString()
  pairId: string;
}
