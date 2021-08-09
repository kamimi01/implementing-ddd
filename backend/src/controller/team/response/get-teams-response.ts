import { ApiProperty } from '@nestjs/swagger';

export class GetTeamsResponse {
  @ApiProperty({
    description: 'チームの一覧',
    type: () => [Teams],
  })
  teams: Teams[];

  public constructor() {}
}

export class Teams {
  @ApiProperty({
    description: 'チームを識別するための唯一のID',
    format: 'uuid',
    example: 'ae6b59c0-abff-4993-b2f5-76ba28e74c58',
  })
  id: string;

  @ApiProperty({
    description: 'チームの名前',
    minimum: 1,
    maximum: 999,
    example: '1',
  })
  name: number;

  @ApiProperty({
    description: '所属ペアのID',
    type: () => [String],
    maxItems: 1,
    example: [
      '2e8655d7-34d4-4e04-a2b9-fd7310177a39',
      '8c7fd5c4-5bca-47ac-b15e-70b747d56611',
    ],
  })
  pairs: string[];
}
