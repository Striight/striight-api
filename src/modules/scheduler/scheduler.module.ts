import { Module } from '@nestjs/common';
import { SchedulerService } from './services/scheduler.service';
import { ExtriightModule } from '@modules/extriight/extriight.module';
import { ExtriightService } from '@modules/extriight/extriight.service';

@Module({
  providers: [SchedulerService, ExtriightService],
  imports: [ExtriightModule],
})
export class SchedulerModule {}
