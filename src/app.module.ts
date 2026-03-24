import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatosPersonalesModule } from './datos-personales/datos-personales.module';

@Module({
  imports: [DatosPersonalesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
