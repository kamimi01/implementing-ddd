import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from '../../app.service';
import { PatchPairRequest } from './request/patch-pair-request';
import { PatchPairRequestPath } from './request/patch-pair-request-path';
import { GetPairsResponse, Pairs } from './response/get-pairs-response';

@ApiTags('ペア')
@Controller('pairs')
export class PairController {
  constructor(private readonly appService: AppService) {}

  // ペアの一覧取得
  @Get()
  @ApiOperation({
    summary: 'ペアの一覧の取得',
    description: '- ペアの一覧を取得する',
  })
  @ApiResponse({
    status: 200,
    description: '取得成功',
    type: GetPairsResponse,
  })
  getPairs(): GetPairsResponse {
    // 条件の指定がない場合は、一覧を取得する
    const response = new GetPairsResponse();

    return response;
  }

  // TODO: ペアの更新

  // ペアに所属する参加者の追加
  @Patch('/:pairId/add')
  @ApiOperation({
    summary: 'ペアに所属する参加者の追加',
    description: '- ペアに参加者を追加する',
  })
  @ApiResponse({
    status: 200,
    description: '追加成功したため、追加後のペアの情報を返却する',
    type: Pairs,
  })
  addPairs(
    @Param()
    patchPairRequestPath: PatchPairRequestPath,
    // ステータスしか更新しないのに、Dtoクラスを作成するのはoverkillか？
    @Body()
    patchPairDto: PatchPairRequest,
  ): Pairs {
    const response = new Pairs();

    return response;
  }

  // ペアに所属する参加者の削除
  @Patch('/:pairId/delete')
  @ApiOperation({
    summary: 'ペアに所属する参加者の削除',
    description: '- ペアに参加者を削除する',
  })
  @ApiResponse({
    status: 200,
    description: '削除成功したため、削除後のペアの情報を返却する',
    type: Pairs,
  })
  deletePairs(
    @Param()
    patchPairRequestPath: PatchPairRequestPath,
    @Body()
    patchPairDto: PatchPairRequest,
  ): Pairs {
    const response = new Pairs();

    return response;
  }
}
