import { Controller, Get, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from '../../app.service';

@ApiTags('参加者')
@Controller('participants')
export class ParticipantController {
  constructor(private readonly appService: AppService) {}

  // 参加者の取得（一覧取得または条件付き取得）
  @Get()
  getParticipants(): string {
    // 条件の指定がない場合は、一覧を取得する

    // 条件指定がある場合は、条件に従い取得する
    return this.appService.getParticipants();
  }

  // 参加者の新規追加
  @Post()
  createParticipants(): string {
    // 条件の指定がない場合は、一覧を取得する

    // 条件指定がある場合は、条件に従い取得する
    return this.appService.createParticipants();
  }

  // 参加者の在籍ステータスの更新
  @Patch('/:participant_id/registration-status')
  updateParticipantRegistrationStatus(): string {
    return this.appService.updateParticipantRegistrationStatus();
  }
}
