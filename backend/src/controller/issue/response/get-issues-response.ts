import { ApiProperty } from '@nestjs/swagger';

export class Issues {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  progressionStatus: string;
}
