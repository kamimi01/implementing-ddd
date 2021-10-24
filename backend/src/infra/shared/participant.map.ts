import { Participant, ParticipantProps } from "src/domain/participant/entity/participant";
import {
  Participant as ParticipantForPrisma,
  Prisma
} from '@prisma/client';
import { Email, EmailProps } from "src/domain/participant/value-object/email";
import { ParticipantName, ParticipantNameProps } from "src/domain/participant/value-object/participant-name";
import { RegistrationStatus } from "src/domain/participant/value-object/registration-status";
import { UniqueEntityID } from "src/domain/shared/UniqueEntityID";
import { ParticipantId } from "src/domain/participant/value-object/participant-id";

export class ParticipantMap {
  public static toDomain(participant: ParticipantForPrisma): Participant {
    const participantId = ParticipantId.create(participant.participantId);
    const email: EmailProps = {
      value: participant.email,
    };
    const name: ParticipantNameProps = {
      value: participant.name,
    };
    const registatrationStatus: RegistrationStatus = (() => {
      switch (participant.registrationStatusId) {
        case 1:
          return RegistrationStatus.Enroll
        case 2:
          return RegistrationStatus.Recess
        case 3:
          return RegistrationStatus.Withdrawal
      }
    })();
    const participantProps: ParticipantProps = {
      email: Email.create(email),
      name: ParticipantName.create(name),
      registrationStatus: registatrationStatus
    }
    const participantEntity = Participant.create(participantProps, participantId);
    return participantEntity
  }
}