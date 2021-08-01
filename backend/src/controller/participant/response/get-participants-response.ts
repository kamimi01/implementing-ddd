import { ApiProperty } from '@nestjs/swagger';
// import { SomeDataDTO } from 'src/app/sample/query-service-interface/some-data-qs'

export class GetParticipantsResponse {
  @ApiProperty({ type: () => [Participants] })
  participants: Participants[];

  public constructor() {}
}

class Participants {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  // TODO: データ型はUnionで定義した型に変更する
  registrationStatus: string;

  public constructor(params: {
    id: string;
    name: string;
    email: string;
    registrationStatus: string;
  }) {
    this.id = params.id;
    this.name = params.name;
    this.email = params.email;
    this.registrationStatus = params.registrationStatus;
  }
}
