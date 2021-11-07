import { NestFactory } from '@nestjs/core';
import * as fs from 'fs';
import { dump } from 'js-yaml';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api/v1');

  const options = new DocumentBuilder()
    .setTitle('Praha ChallengeをDDDで実装する')
    .setDescription('- Praha ChallengeをDDDで実装する')
    .setVersion('1.0')
    .addServer('http://localhost/api/v1')
    .build();
  const document = SwaggerModule.createDocument(app, options);

  // TODO: OpenAPIのyamlファイル出力はyarn start:dev以外のコマンドで実行できるようにしたい
  fs.writeFileSync(
    '../docs/openapi-spec.yml',
    dump(document, {}),
  );

  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
