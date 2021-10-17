import { v4 } from 'uuid';
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const registrationStatusData: Prisma.RegistrationStatusCreateInput[] = [
  {
    registationStatus: '在籍中'
  },
  {
    registationStatus: '休会中'
  },
  {
    registationStatus: '退会済み'
  }
];

async function main(){
  console.log('Start seeding...');
  for(const data of registrationStatusData) {
    const registrationStatus = await prisma.registrationStatus.create({
      data: data
    });
    console.log('Seeding finished.')
  };
};

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })