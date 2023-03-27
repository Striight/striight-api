import { IsNotEmpty, IsString } from 'class-validator';

export default class RegisterDTO {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
