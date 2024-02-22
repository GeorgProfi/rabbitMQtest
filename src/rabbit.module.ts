import { Module } from '@nestjs/common/decorators/modules/module.decorator';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Global } from '@nestjs/common/decorators/modules/global.decorator';


@Global()
@Module({
  imports: [
    RabbitMQModule.forRootAsync(RabbitMQModule, {
      useFactory: () => {
        return {
          exchanges: [
            {
              name: 'aboba',
              type: 'direct',
            },
          ],
          uri: 'amqp://rubbituser:Gdkl6CWaXjdY38GJU43KERFyMtSKqSWWzFVr8Ia9@localhost:5672',
          connectionInitOptions: { wait: false },
        };
      },
    }),
  ],
  // providers: [AMQP_CONNECTION_SERVICE_FACTORY],
  exports: [RabbitMQModule],
})
export class RabbitModule {}
