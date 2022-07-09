import { Product, Prisma } from '@prisma/client';
import { Transform } from 'class-transformer';

export class ProductEntity implements Product {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  description: string | null;

  @Transform(({ value }) => value.toNumber())
  price: Prisma.Decimal;
  sku: string;
  published: boolean;
}
