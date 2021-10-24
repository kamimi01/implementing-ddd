import { Prisma, PrismaClient } from "@prisma/client";
import { RegistrationStatus } from "src/domain/participant/value-object/registration-status";
import { PrismaService } from "../shared/prisma.service";
import { ParticipantRepository } from "./participantRepository";

const prisma = new PrismaClient();

afterAll(async () => {
  // DBの接続を切る
  await prisma.$disconnect;
})

describe('参加者取得に関する単体テスト', () => {
  test('参加者一覧の取得', async () => {
    // Arrange 
    const participantId = '9029d45b-8d22-4d67-befd-362c18fc8836';
    const email = 'tarou@email.com'
    const name = '田中 太郎'
    const registrationStatus = RegistrationStatus.Enroll
    const where = { participantId } as Prisma.ParticipantWhereInput;
    const participantRepository = new ParticipantRepository(new PrismaService());
  
    // Act
    const [participant] = await participantRepository.getParticipantsByParticipantId(where);
  
    // Assert
    // expect(participant.participantId.id).toBe(participantId);
    expect(participant.email.email).toBe(email);
    expect(participant.name.name).toBe(name);
    expect(participant.registrationStatus).toBe(registrationStatus);
  });

  test('参加者一覧が取得できなかった場合', async () => {
    // Arrange 
    const participantId = '12345';
    const where = { participantId } as Prisma.ParticipantWhereInput;
    const take = 1;
    const participantRepository = new ParticipantRepository(new PrismaService());
  
    // Act
    // Assert
    await expect(() => participantRepository.getParticipantsByParticipantId(where, take)).rejects.toThrow('Participant not found.')
  });
});
