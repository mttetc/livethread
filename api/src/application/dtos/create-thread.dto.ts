import { IsString, MaxLength } from 'class-validator';

export class CreateThreadDto {
  @IsString()
  @MaxLength(200)
  question!: string;
}