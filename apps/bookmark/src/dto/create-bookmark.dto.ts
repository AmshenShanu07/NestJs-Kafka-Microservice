import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBookmarkDto {
  @ApiProperty({ example: 'Bookmark title' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'https://bookmark.com' })
  @IsString()
  @IsNotEmpty()
  url: string;

  @ApiProperty({ example: 'Bookmark description' })
  @IsString()
  @IsNotEmpty()
  description: string;

  userId?: string;
}
