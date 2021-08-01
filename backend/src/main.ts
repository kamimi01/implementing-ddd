import { NestFactory } from '@nestjs/core';
import * as fs from 'fs';
import { dump } from 'js-yaml';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Praha ChallengeをDDDで実装する')
    .setDescription('Praha ChallengeをDDDで実装する')
    .setVersion('1.0')
    .addTag('example')
    .build();
  const document = SwaggerModule.createDocument(app, options);

  // YAML
  fs.writeFileSync('/workspaces/Node_Projects/implementing-domain-driven-design/docs/openapi-spec.yml', dump(document, {}));

  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
