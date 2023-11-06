import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LatihanModule } from './latihan/latihan.module';
import { TaskModule } from './task/task.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [LatihanModule, TaskModule, PostModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
