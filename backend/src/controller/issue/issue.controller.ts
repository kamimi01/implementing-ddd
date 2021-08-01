import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { AppService } from '../../app.service';
import { PatchIssueProgressionStatusRequest } from './request/patch-issue-progression-progression-status-request';
import { PostIssuesRequest } from './request/post-issues-request';
import { Issues } from './response/get-issues-response';

@ApiTags('課題')
@Controller('issues')
export class IssueController {
  constructor(private readonly appService: AppService) {}

  // 課題の新規追加
  @Post()
  @ApiOperation({
    summary: '課題の新規追加',
    description: '- 課題の新規追加を行う',
  })
  @ApiCreatedResponse({
    description: '登録成功のため、登録された課題の情報を返却する',
    type: Issues,
  })
  createIssues(@Body() postIssuesDto: PostIssuesRequest): Issues {
    const response = new Issues();

    return response;
  }

  // 課題の進捗ステータスの更新
  @Patch('/:issue_id/participants/:participant_id/progression-status')
  @ApiOperation({
    summary: '課題の進捗ステータスを参加者ごとに更新',
    description: '- 参加者ごとの課題の進捗ステータスの更新を行う',
  })
  @ApiOkResponse({
    description: '更新成功のため、更新された課題の情報を返却する',
    type: Issues,
  })
  updateIssueProgressionStatus(
    @Param('issue_id') issueId: string,
    @Param('participant_id') participantId: string,
    @Body() patchIssueProgressionStatusDto: PatchIssueProgressionStatusRequest,
  ): Issues {
    const response = new Issues();

    return response;
  }
}
