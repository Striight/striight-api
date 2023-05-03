import { Controller, Get } from '@nestjs/common';
import { Public } from '@metadata/public.metadata';

@Controller()
export default class HealthController {
  @Get('ping')
  @Public()
  public ping() {
    return 'pong';
  }
}
