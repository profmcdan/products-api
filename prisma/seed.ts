import { PrismaClient } from '@prisma/client';
import { createRandomProduct } from '../products';

const prisma = new PrismaClient();

async function main() {
  for (let i = 0; i < 50; i++) {
    const product = createRandomProduct();
    await prisma.product.create({ data: product });
  }
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
