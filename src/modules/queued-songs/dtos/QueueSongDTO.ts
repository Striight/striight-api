import { IsNotEmpty, IsString } from 'class-validator';

export default class QueueSongDTO {
  @IsString()
  @IsNotEmpty()
  songId: string;

  @IsString()
  @IsNotEmpty()
  artistId: string;
}
