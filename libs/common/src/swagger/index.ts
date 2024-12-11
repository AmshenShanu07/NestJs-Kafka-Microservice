import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const swaggerSetup = (app: INestApplication) => {
  const path = 'api';
  const swaggerOptions = new DocumentBuilder()
    .setTitle('API Docuemntation')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('Routes')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup(path, app, document);
};
