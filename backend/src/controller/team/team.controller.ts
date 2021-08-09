import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from '../../app.service';
import { PatchTeamRequest } from './request/patch-team-request';
import { PatchTeamRequestPath } from './request/patch-team-request-path';
import { GetTeamsResponse, Teams } from './response/get-teams-response';

@ApiTags('チーム')
@Controller('teams')
export class TeamController {
  constructor(private readonly appService: AppService) {}

  // チームの一覧取得
  @Get()
  @ApiOperation({
    summary: 'チームの一覧の取得',
    description: '- チームの一覧を取得する',
  })
  @ApiResponse({
    status: 200,
    description: '取得成功',
    type: GetTeamsResponse,
  })
  getTeams(): GetTeamsResponse {
    // 条件の指定がない場合は、一覧を取得する
    const response = new GetTeamsResponse();

    return response;
  }

  // チームに所属するペアの追加
  @Patch('/:teamId/add')
  @ApiOperation({
    summary: 'チームに所属するペアの追加',
    description: '- チームにペアを追加する',
  })
  @ApiResponse({
    status: 200,
    description: '追加成功したため、追加後のチームの情報を返却する',
    type: Teams,
  })
  addPairs(
    @Param()
    patchTeamRequestPath: PatchTeamRequestPath,
    // ステータスしか更新しないのに、Dtoクラスを作成するのはoverkillか？
    @Body()
    patchTeamDto: PatchTeamRequest,
  ): Teams {
    const response = new Teams();

    return response;
  }

  // チームに所属するペアの削除
  @Patch('/:teamId/delete')
  @ApiOperation({
    summary: 'チームに所属するペアの削除',
    description: '- チームにペアを削除する',
  })
  @ApiResponse({
    status: 200,
    description: '削除成功したため、削除後のチームの情報を返却する',
    type: Teams,
  })
  deletePairs(
    @Param()
    patchTeamRequestPath: PatchTeamRequestPath,
    @Body()
    patchTeamDto: PatchTeamRequest,
  ): Teams {
    const response = new Teams();

    return response;
  }
}
