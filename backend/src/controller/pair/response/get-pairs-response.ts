import { ApiProperty } from '@nestjs/swagger';

export class GetPairsResponse {
  @ApiProperty({
    description: 'ペアの一覧',
    type: () => [Pairs],
  })
  teams: Pairs[];

  public constructor() {}
}

export class Pairs {
  @ApiProperty({
    description: 'ペアを識別するための唯一のID',
    format: 'uuid',
    example: 'ae6b59c0-abff-4993-b2f5-76ba28e74c58',
  })
  id: string;

  @ApiProperty({
    description: 'ペアの名前',
    minLength: 1,
    example: '1c',
  })
  name: string;

  @ApiProperty({
    description: '所属参加者のID',
    type: () => [String],
    maxItems: 2,
    minItems: 3,
    example: [
      '2e8655d7-34d4-4e04-a2b9-fd7310177a39',
      '8c7fd5c4-5bca-47ac-b15e-70b747d56611',
    ],
  })
  participants: string[];
}
