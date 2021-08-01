import { Controller, Get, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from '../../app.service';

@ApiTags('チーム')
@Controller('teams')
export class TeamController {
  constructor(private readonly appService: AppService) {}

  // チームの一覧取得
  @Get()
  getTeams(): string {
    // 条件の指定がない場合は、一覧を取得する

    // 条件指定がある場合は、条件に従い取得する
    return '';
  }

  // TODO: チームの更新

  // ペアの一覧取得
  @Get()
  getPairs(): string {
    // 条件の指定がない場合は、一覧を取得する

    // 条件指定がある場合は、条件に従い取得する
    return '';
  }

  // TODO: ペアの更新

  // 課題の新規追加

  // 課題の更新
}
