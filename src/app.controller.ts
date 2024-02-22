import {Controller, Param, Put} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Put("SendMessage/:TextMessage")
  SendMessage(@Param('TextMessage') TextMessage: string){
    return this.appService.SendMessage(TextMessage);
  }
}
