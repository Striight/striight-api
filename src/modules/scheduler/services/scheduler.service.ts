import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { ExtriightService } from '@modules/extriight/extriight.service';
import extriight from '@entities/extriight';

const EVERY_WEEK_MONDAY_3AM = '0 3 * * 1';

@Injectable()
export class SchedulerService {
  constructor(private readonly extriightService: ExtriightService) {}

  @Cron(EVERY_WEEK_MONDAY_3AM, {
    name: 'Weekly Playlists Refresh',
    timeZone: 'UTC',
  })
  async handlePlaylistsRefresh() {
    const result = await this.extriightService.getEligibleArtists();
    console.log(result);
  }

  async onModuleInit() {
    await this.handlePlaylistsRefresh();
  }

  private getNextSongsToPost() {}
}
