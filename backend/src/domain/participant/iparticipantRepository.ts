import { Prisma } from "@prisma/client";
import { Participant } from "./entity/participant";
import { ParticipantId } from "./value-object/participant-id";

export interface IParticipantRepository {
  getParticipantsByParticipantId(where?: Prisma.ParticipantWhereInput): Promise<Participant[]>;
}