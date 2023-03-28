import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './entities';
import SpotifyModule from '@modules/spotify/spotify.module';
import AuthModule from '@modules/auth/auth.module';
import ArtistAccountModule from '@modules/artist/artist-account.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from '@modules/auth/guards/jwt-auth.guard';
import { RolesGuard } from '@guards/roles.guard';
import { PlaylistModule } from '@modules/playlist/playlist.module';
import { QueuedSongsModule } from '@modules/queued-songs/queued-songs.module';
import { SongsModule } from './modules/songs/songs.module';
import { SchedulerModule } from './modules/scheduler/scheduler.module';
import CoreModule from '@modules/core/core.module';

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
        entities: [...entities],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    CoreModule,
    SpotifyModule,
    AuthModule,
    ArtistAccountModule,
    PlaylistModule,
    QueuedSongsModule,
    SongsModule,
    SchedulerModule,
  ],
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
