import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getParticipants(): string {
    return 'Hello World!';
  }

  createParticipants(): string {
    return 'create new participants'
  }

  updateParticipantRegistrationStatus(): string {
    return 'update participants registration status'
  }
}
