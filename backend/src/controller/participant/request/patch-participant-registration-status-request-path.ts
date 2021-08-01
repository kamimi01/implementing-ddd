// @see https://docs.nestjs.com/openapi/types-and-parameters

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { RegistrationStatus } from 'src/domain/participant/value-object/registration-status';

export class PatchParticipantRegistrationStatusRequestPath {
  @ApiProperty({
    description: '参加者を識別するための唯一のID',
    format: 'uuid',
    example: 'ae6b59c0-abff-4993-b2f5-76ba28e74c58',
  })
  @IsNotEmpty()
  @IsString()
  participantId: string;
}
