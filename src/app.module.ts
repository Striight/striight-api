import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import identityModules, {
  entities as identityEntities,
} from './packages/identity';
import entities from './entities';
import SpotifyModule from './modules/spotify.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [...entities, ...identityEntities],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    SpotifyModule,
    ...identityModules,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
