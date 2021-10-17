import { prisma } from "@prisma/client";
import { Participant } from "src/domain/participant/entity/participant";
import { IParticipantRepository } from "src/domain/participant/iparticipantRepository";
import { PrismaService } from '../shared/prisma.service';
import {
  Participant as ParticipantForPrisma,
  Prisma
} from '@prisma/client';
import { ParticipantMap } from "../shared/participant.map";

export class ParticipantRepository implements IParticipantRepository {
  constructor(private prisma: PrismaService) {}

  async getParticipantsByParticipantId(where?: Prisma.ParticipantWhereInput, take?: number): Promise<Participant[]> {
    const allParticipants = await this.prisma.participant.findMany({
      where,
      take
    });
    if (!allParticipants.length) throw new Error('Participant not found.');

    const participantEntities = (() => {
      return allParticipants.map( participant => {
        return ParticipantMap.toDomain(participant)
      })
    })();
    return participantEntities
  }
}