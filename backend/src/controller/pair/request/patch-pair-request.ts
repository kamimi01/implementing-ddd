// @see https://docs.nestjs.com/openapi/types-and-parameters

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class PatchPairRequest {
  @ApiProperty({
    description: '参加者を識別するための一意なID',
    minItems: 1,
    example: [
      '2e8655d7-34d4-4e04-a2b9-fd7310177a39',
      '8c7fd5c4-5bca-47ac-b15e-70b747d56611',
    ],
  })
  @IsNotEmpty()
  @IsString()
  participantId: string[];
}
