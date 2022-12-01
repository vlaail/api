import { NestFactory } from '@nestjs/core';
import { AdminService } from './admin/admin.service';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.get(AdminService).enrollAdmin();
  await app.listen(8888);
}
bootstrap();