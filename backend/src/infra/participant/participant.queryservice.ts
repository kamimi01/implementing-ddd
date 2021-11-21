import { ParticipantsDto } from "src/usecase/participant/dto/participantDto";
import { IParticipantQueryService } from "src/usecase/participant/queryService/iparticipant.queryservice";
import { ParticipantMap } from "../shared/participant.map";
import { PrismaService } from "../shared/prisma.service";

export class ParticipantQueryService implements IParticipantQueryService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<ParticipantsDto[]> {
    const allParticipants = await this.prisma.participant.findMany()

    if (!allParticipants.length) throw new Error('Participant not found.');

    const dto = (() => {
      return allParticipants.map(participant => {
        return ParticipantMap.toDto(participant);
      })
    })();
    return dto;
  }
}