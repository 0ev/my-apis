import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TextModule } from './text/text.module';
import { TossController } from './toss/toss.controller';
import { TossService } from './toss/toss.service';
import { TossModule } from './toss/toss.module';
import { KakaobankController } from './kakaobank/kakaobank.controller';
import { KakaobankService } from './kakaobank/kakaobank.service';
import { KakaobankModule } from './kakaobank/kakaobank.module';

@Module({
  imports: [TextModule, TossModule, KakaobankModule],
  controllers: [AppController, TossController, KakaobankController],
  providers: [AppService, TossService, KakaobankService],
})
export class AppModule {}
