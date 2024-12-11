import { NestFactory } from '@nestjs/core';
import { AdminModule } from './admin.module';
import { swaggerSetup } from '@app/common';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AdminModule,
    new FastifyAdapter(),
  );
  swaggerSetup(app);
  await app.listen(process.env.port ?? 3002);
}
bootstrap();
