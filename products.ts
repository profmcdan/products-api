import { faker } from '@faker-js/faker';

interface IProduct {
  name: string;
  description: string;
  price: number;
  sku: string;
  published: boolean;
}

export function createRandomProduct(): IProduct {
  return {
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: parseFloat(faker.commerce.price()),
    sku: faker.random.alphaNumeric(10),
    published: true,
  };
}
