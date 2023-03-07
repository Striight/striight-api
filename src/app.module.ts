import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './entities';
import SpotifyModule from './modules/spotify.module';
import User from './packages/identity/user';
import AuthModule from './packages/identity/auth.module';
import ArtistAccountModule from './modules/artist-account.module';

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
        entities: [...entities, User],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    SpotifyModule,
    AuthModule,
    ArtistAccountModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
