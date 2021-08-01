import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AppService } from '../../app.service';
import { GetParticipantsFilterRequest } from './request/get-participants-filter-request';
import { PatchParticipantRegistrationStatusRequest } from './request/patch-participant-registration-status-request';
import { PatchParticipantRegistrationStatusRequestPath } from './request/patch-participant-registration-status-request-path';
import { PostParticipantsRequest } from './request/post-participants.request';
import {
  GetParticipantsResponse,
  Participants,
} from './response/get-participants-response';

@ApiTags('参加者')
@Controller('participants')
export class ParticipantController {
  constructor(private readonly appService: AppService) {}

  // 参加者の取得（一覧取得または条件付き取得）
  // TODO: 非同期にするため、Promiseを戻り値に変更する
  @Get()
  @ApiOperation({
    summary: '参加者の一覧の取得または条件付き取得',
    description:
      '- パラメータが存在しない場合は、条件なしで参加者の一覧を取得する',
  })
  @ApiResponse({
    status: 200,
    description: '取得成功',
    type: GetParticipantsResponse,
  })
  getParticipants(
    @Query() getParticipantsFilterDto: GetParticipantsFilterRequest,
  ): GetParticipantsResponse {
    // 条件の指定がない場合は、一覧を取得する

    // 条件指定がある場合は、条件に従い取得する
    const response = new GetParticipantsResponse();

    return response;
  }

  // 参加者の新規追加
  @Post()
  @ApiOperation({
    summary: '参加者の新規追加',
    description: '- 参加者の新規追加を行う',
  })
  @ApiCreatedResponse({
    description: '登録成功のため、登録された参加者の情報を返却する',
    type: Participants,
  })
  createParticipants(
    @Body() postParticipantsDto: PostParticipantsRequest,
  ): Participants {
    const response = new Participants();

    return response;
  }

  // 参加者の在籍ステータスの更新
  @Patch('/:participantId/registration-status')
  @ApiOperation({
    summary: '参加者ごとの在籍ステータスの更新',
    description: '- 参加者ごとの在籍ステータスの更新を行う',
  })
  @ApiOkResponse({
    status: 200,
    description: '更新成功のため、更新された参加者の情報を返却する',
    type: Participants,
  })
  updateParticipantRegistrationStatus(
    @Param()
    patchParticipantRegistrationStatusRequestPath: PatchParticipantRegistrationStatusRequestPath,
    // ステータスしか更新しないのに、Dtoクラスを作成するのはoverkillか？
    @Body()
    PatchParticipantRegistrationStatusDto: PatchParticipantRegistrationStatusRequest,
  ): Participants {
    const response = new Participants();

    return response;
  }
}
