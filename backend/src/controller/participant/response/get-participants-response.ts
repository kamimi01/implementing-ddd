import { ApiProperty } from '@nestjs/swagger';
import { RegistrationStatus } from 'src/domain/participant/value-object/registration-status';
import { ParticipantsDto } from 'src/usecase/participant/dto/participantDto';

export class GetParticipantsResponse {
  @ApiProperty({
    description: '参加者の一覧（1回で最大10人の情報を取得）',
    type: () => [ParticipantsDto],
    maxItems: 10,
  })
  participants: ParticipantsDto[];

  public constructor() {}
}