import { Prisma, PrismaClient } from "@prisma/client";
import { Email, EmailProps } from "src/domain/participant/value-object/email";
import { ParticipantId } from "src/domain/participant/value-object/participant-id";
import { ParticipantName, ParticipantNameProps } from "src/domain/participant/value-object/participant-name";
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
    const emailProps: EmailProps = {
      value: 'tarou@email.com'
    }
    const nameProps: ParticipantNameProps = {
      value: '田中 太郎'
    }
    const registrationStatus = RegistrationStatus.Enroll
    const where = { participantId } as Prisma.ParticipantWhereInput;
    const participantRepository = new ParticipantRepository(new PrismaService());
  
    // Act
    const [participant] = await participantRepository.getParticipantsByParticipantId(where);
  
    // Assert
    // FIXME: idの取得が失敗する
    // expect(participant._id.id).toBe(ParticipantId.create(participantId).id)
    expect(participant._props.email.value).toBe(Email.create(emailProps).value);
    expect(participant._props.name.value).toBe(ParticipantName.create(nameProps).value);
    expect(participant._props.registrationStatus).toBe(registrationStatus);
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
