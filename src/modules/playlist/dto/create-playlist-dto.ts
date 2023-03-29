import { IsNotEmpty, IsString } from 'class-validator';

export default class CreatePlaylistDto {
  @IsNotEmpty()
  @IsString()
  genre: string;

  @IsNotEmpty()
  @IsString()
  name: string;
}
