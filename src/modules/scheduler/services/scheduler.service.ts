import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

const EVERY_WEEK_MONDAY_3AM = '0 3 * * 1';

@Injectable()
export class SchedulerService {
  @Cron(EVERY_WEEK_MONDAY_3AM, {
    name: 'Weekly Playlists Refresh',
    timeZone: 'UTC',
  })
  handlePlaylistsRefresh() {
    console.log('Hello CRON');
  }
}
