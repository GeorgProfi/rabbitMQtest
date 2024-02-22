import { Injectable } from '@nestjs/common';
import {AmqpConnection, RabbitSubscribe, Nack} from "@golevelup/nestjs-rabbitmq";

@Injectable()
export class AppService {

  constructor(
      private readonly amqpConnection: AmqpConnection,

  ) {}
  @RabbitSubscribe({
    exchange: 'aboba',
    routingKey: 'aboba',
    queue: 'TestQueue',
    queueOptions: {
      durable: true,
    },
  })
  ReadMessege(message) {
    console.log('Обработка сообщения из очереди')
    console.log('Содержание сообщения :', message)
  }
   async SendMessage(TextMessage:string) {
    let new_message = {
      text: TextMessage
    }
    console.log('Отправка собобщения. Текст сообщения:', new_message)
    await this.amqpConnection.publish('aboba', 'aboba', new_message);
  }
}
