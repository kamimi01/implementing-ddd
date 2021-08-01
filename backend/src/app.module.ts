import { Module } from '@nestjs/common';
import { ParticipantController } from './controller/participant/participant.controller';
import { AppService } from './app.service';
import { TeamController } from './controller/team/team.controller';
import { PairController } from './controller/pair/pair.controller';
import { IssueController } from './controller/issue/issue.controller';

@Module({
  imports: [],
  controllers: [
    ParticipantController,
    TeamController,
    PairController,
    IssueController,
  ],
  providers: [AppService],
})
export class AppModule {}
