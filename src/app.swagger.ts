import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const initialSwagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Liga de futbol API')
    .setDescription('Api creada con nestjs para una liga de futbol')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
};
