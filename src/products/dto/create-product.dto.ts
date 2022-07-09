import {
  IsBoolean,
  IsNotEmpty,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @IsString()
  description?: string;

  @IsPositive()
  price: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  sku: string;

  @IsBoolean()
  published?: boolean;
}
