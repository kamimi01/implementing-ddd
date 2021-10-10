import { Participant, ParticipantProps } from "src/domain/participant/entity/participant";
import {
  Participant as ParticipantForPrisma,
  Prisma
} from '@prisma/client';
import { Email, EmailProps } from "src/domain/participant/value-object/email";
import { ParticipantName, ParticipantNameProps } from "src/domain/participant/value-object/participant-name";
import { RegistrationStatus } from "src/domain/participant/value-object/registration-status";

export class ParticipantMap {
  public static toDomain(participant: ParticipantForPrisma): Participant {
    const email: EmailProps = {
      email: participant.email,
    };
    const name: ParticipantNameProps = {
      name: participant.name,
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
      registationStatus: registatrationStatus
    }
    const participantEntity = Participant.create(participantProps);
    return participantEntity
  }
}