import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './entities';
import SpotifyModule from './spotify/spotify.module';
import User from './packages/identity/user';
import AuthModule from './packages/identity/auth.module';
import ArtistAccountModule from './artist/artist-account.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './packages/identity/jwt-auth.guard';
import { RolesGuard } from './core/guards/roles.guard';
import { PlaylistModule } from './playlist/playlist.module';
import { SongsModule } from './songs/songs.module';
import { SongToPlaylistModule } from './song-to-playlist/song-to-playlist.module';

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
    PlaylistModule,
    SongsModule,
    SongToPlaylistModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
