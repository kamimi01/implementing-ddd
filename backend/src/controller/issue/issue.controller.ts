import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from '../../app.service';
import { PatchIssueProgressionStatusRequest } from './request/patch-issue-progression-progression-status-request';
import { PostIssuesRequest } from './request/post-issues-request';

@ApiTags('課題')
@Controller('issues')
export class IssueController {
  constructor(private readonly appService: AppService) {}

  // 課題の新規追加
  @Post()
  createIssues(@Body() postIssuesDto: PostIssuesRequest): string {
    return '';
  }

  // 課題の進捗ステータスの更新
  @Patch('/:issue_id/participants/:participant_id/progression-status')
  updateIssueProgressionStatus(
    @Body() patchIssueProgressionStatusDto: PatchIssueProgressionStatusRequest,
  ): string {
    return '';
  }
}
