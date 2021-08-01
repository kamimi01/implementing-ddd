import { Controller, Get, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from '../../app.service';

@ApiTags('課題')
@Controller('issues')
export class IssueController {
  constructor(private readonly appService: AppService) {}

  // 課題の新規追加
  @Get()
  createIssues(): string {
    // 条件の指定がない場合は、一覧を取得する

    // 条件指定がある場合は、条件に従い取得する
    return '';
  }

  // 課題の進捗ステータスの更新
  @Patch()
  updateIssueProgressionStatus(): string {
    return '';
  }
}
