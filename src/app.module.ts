import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config'
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { KycModule } from './kyc/kyc.module';
import { WebhookModule } from './webhook/webhook.module';
import { AdminModule } from './admin/admin.module';
import { WalletModule } from './wallet/wallet.module';
import configuration from './config/configuration';
import { WebhookController } from './webhook/webhook.controller';
import { AdminController } from './admin/admin.controller';
import { AdminService } from './admin/admin.service';
import { WalletService } from './wallet/wallet.service';

@Module({
  imports: [UserModule, KycModule, WebhookModule, AdminModule, WalletModule,
  ConfigModule.forRoot({
    isGlobal: true,
    load:[ configuration ]
  })],
  controllers: [WebhookController, AdminController],
  providers: [AdminService, WalletService],
})
export class AppModule {}
