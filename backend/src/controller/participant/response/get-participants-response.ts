import { ApiProperty } from '@nestjs/swagger';
import { RegistrationStatus } from 'src/domain/participant/value-object/registration-status';
// import { SomeDataDTO } from 'src/app/sample/query-service-interface/some-data-qs'

export class GetParticipantsResponse {
  @ApiProperty({
    description: '参加者の一覧（1回で最大10人の情報を取得）',
    type: () => [Participants],
    maxItems: 10,
  })
  participants: Participants[];

  public constructor() {}
}

export class Participants {
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
  // TODO: データ型はUnionで定義した型に変更する
  registrationStatus: RegistrationStatus;
}
