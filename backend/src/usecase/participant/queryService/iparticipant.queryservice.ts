import { ParticipantsDto } from "../dto/participantDto";

export interface IParticipantQueryService {
  getAll(): Promise<ParticipantsDto[]>;
}