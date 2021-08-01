// @see https://docs.nestjs.com/openapi/types-and-parameters

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { RegistrationStatus } from 'src/domain/participant/value-object/registration-status';

export class PatchParticipantRegistrationStatusRequest {
  @ApiProperty({
    description: '参加者の在籍ステータス（在籍中/休会中/退会済み）',
  })
  @IsNotEmpty()
  @IsString()
  // TODO: stringではなく、unionを使用したデータ型に変更する
  registrationStatus: RegistrationStatus;
}
