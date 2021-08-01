import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from '../../app.service';
import { PatchParticipantRegistrationStatusRequest } from './request/patch-participant-registration-status-request';
import { PostParticipantsRequest } from './request/post-participants.request';
import { GetParticipantsResponse } from './response/get-participants-response';

@ApiTags('参加者')
@Controller('participants')
export class ParticipantController {
  constructor(private readonly appService: AppService) {}

  // 参加者の取得（一覧取得または条件付き取得）
  // TODO: 非同期にするため、Promiseを戻り値に変更する
  @Get()
  @ApiResponse({ status: 200, type: GetParticipantsResponse })
  getParticipants(): GetParticipantsResponse {
    // 条件の指定がない場合は、一覧を取得する

    // 条件指定がある場合は、条件に従い取得する
    const response = new GetParticipantsResponse();

    return response;
  }

  // 参加者の新規追加
  @Post()
  createParticipants(
    @Body() postParticipantsDto: PostParticipantsRequest,
  ): string {
    return this.appService.createParticipants();
  }

  // 参加者の在籍ステータスの更新
  @Patch('/:participant_id/registration-status')
  updateParticipantRegistrationStatus(
    // ステータスしか更新しないのに、Dtoクラスを作成するのはoverkillか？
    @Body() PatchParticipantRegistrationStatusDto: PatchParticipantRegistrationStatusRequest,
  ): string {
    return this.appService.updateParticipantRegistrationStatus();
  }
}
