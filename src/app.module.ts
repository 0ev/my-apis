import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TextModule } from './text/text.module';
import { TossController } from './toss/toss.controller';
import { TossService } from './toss/toss.service';
import { TossModule } from './toss/toss.module';

@Module({
  imports: [TextModule, TossModule],
  controllers: [AppController, TossController],
  providers: [AppService, TossService],
})
export class AppModule {}
