import { Module } from '@nestjs/common';
import { WalletModule } from '../wallet/wallet.module';
import { AdminController } from './admin.controller';

@Module({
    controllers: [AdminController],
    imports:[WalletModule]
})
export class AdminModule {}
