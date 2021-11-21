import { ApiProperty } from '@nestjs/swagger';
import { RegistrationStatus } from 'src/domain/participant/value-object/registration-status';

export class ParticipantsDto {
  @ApiProperty({
    description: '参加者を識別するための唯一のID',
    format: 'uuid',
    example: 'ae6b59c0-abff-4993-b2f5-76ba28e74c58',
  })
  id: string;

  @ApiProperty({ description: '参加者の名前', example: '松本花子' })
  name: string;

  @ApiProperty({
    description: '参加者のメールアドレス',
    format: 'email',
    example: 'hoge@mail.com',
  })
  email: string;

  @ApiProperty({
    description: '参加者の在籍ステータス（在籍中/休会中/退会済み）',
    enum: {
      enroll: 'enroll',
      recess: 'recess',
      withdrawal: 'withdrawal',
    },
    enumName: 'RegistrationStatus',
    example: 'recess',
  })
  registrationStatus: RegistrationStatus;

  @ApiProperty({
    description: '参加者の所属しているチームID',
    example: 'uuid'
  })
  teamId: string

  @ApiProperty({
    description: '参加者の所属しているペアID',
    example: 'uuid'
  })
  pairId: string
}
