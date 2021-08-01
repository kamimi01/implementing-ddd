import { ApiProperty } from '@nestjs/swagger';
// import { SomeDataDTO } from 'src/app/sample/query-service-interface/some-data-qs'

export class GetParticipantsResponse {
  @ApiProperty({ type: () => [Participants] })
  participants: Participants[];

  public constructor() {}
}

export class Participants {
  @ApiProperty({ description: '参加者を識別するための唯一のID' })
  id: string;

  @ApiProperty({ description: '参加者の名前' })
  name: string;

  @ApiProperty({ description: '参加者のメールアドレス' })
  email: string;

  @ApiProperty({
    description: '参加者の在籍ステータス（在籍中/休会中/退会済み）',
  })
  // TODO: データ型はUnionで定義した型に変更する
  registrationStatus: string;
}
