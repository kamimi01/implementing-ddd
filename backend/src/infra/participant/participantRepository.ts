import { prisma } from "@prisma/client";
import { Participant } from "src/domain/participant/entity/participant";
import { IParticipantRepository } from "src/domain/participant/iparticipantRepository";
import { ParticipantId } from "src/domain/participant/value-object/participant-id";
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/prisma.service';
import {
  Participant as ParticipantForPrisma,
  Prisma
} from '@prisma/client';
import { ParticipantMap } from "../shared/participant.map";

export class ParticipantRepository implements IParticipantRepository {
  constructor(private prisma: PrismaService) {}

  async getParticipantsByParticipantId(where?: Prisma.ParticipantWhereInput): Promise<Participant[]> {
    const allParticipants = await this.prisma.participant.findMany({
      where
    });
    if (!!allParticipants == false) throw new Error('Participant not found.');

    const participantEntities = (() => {
      return allParticipants.map( participant => {
        return ParticipantMap.toDomain(participant)
      })
    })();
    return participantEntities
  }
}