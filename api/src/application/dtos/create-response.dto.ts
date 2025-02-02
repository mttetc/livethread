import { IsString, MaxLength } from 'class-validator';

export class CreateResponseDto {
  @IsString()
  @MaxLength(500)
  answer!: string;
}