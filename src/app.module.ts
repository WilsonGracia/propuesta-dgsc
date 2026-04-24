import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatosPersonalesModule } from './datos-personales/datos-personales.module';
import configuration from './config/configuration';
import { Genero } from './datos-personales/entities/genero.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginModule } from './login/login.module';
import { DatosLocalizacionModule } from './datos-localizacion/datos-localizacion.module';
import { EstudiosRealizadosModule } from './estudios-realizados/estudios-realizados.module';
import { ExperienciaLaboralModule } from './experiencia-laboral/experiencia-laboral.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRoot({
      entities: [Genero],
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USER,
      database: process.env.DB_NAME,
      password: process.env.DB_PASS,
      synchronize: false,
      schema: 'public',
      logging: true,
    }),
    DatosPersonalesModule,
    ConfigModule,
    LoginModule,
    DatosLocalizacionModule,
    EstudiosRealizadosModule,
    ExperienciaLaboralModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
