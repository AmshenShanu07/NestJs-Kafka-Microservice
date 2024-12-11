import { NestFactory } from '@nestjs/core';
import { BookmarkModule } from './bookmark.module';
import { swaggerSetup } from '@app/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    BookmarkModule,
    new FastifyAdapter(),
  );

  const configService = app.get(ConfigService);

  await app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'bookmark-consumer',
      },
    },
  });
  await app.startAllMicroservices();
  swaggerSetup(app);

  const port: number = configService.get('PORT') || 3001;
  await app.listen(port);
}
bootstrap();
