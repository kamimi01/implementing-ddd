import { v4 } from 'uuid';
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const enrollStatus: Prisma.RegistrationStatusWhereUniqueInput = {
  registrationStatusId: 1
}

const participantsData: Prisma.ParticipantCreateInput[] = [
  {
    participantId: v4(),
    email: 'tarou@email.com',
    name: '田中 太郎',
    registrationStatus: {
      connect: enrollStatus
    }
  }
]

async function main(){
  console.log('Start seeding...');
  for(const data of participantsData) {
    const participants = await prisma.participant.create({
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