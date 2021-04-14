import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Services } from './services.consts';

@Module({
  imports: [

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
