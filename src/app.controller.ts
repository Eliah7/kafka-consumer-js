import { Controller, Get, Inject, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy, EventPattern } from '@nestjs/microservices';
import { Events } from './events.consts';
import { Services } from './services.consts';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern(Events.TEST_EVENT)
  async handleQuickStartEvent(data: Record<string, unknown>) {
    console.log(data)
  }


}
