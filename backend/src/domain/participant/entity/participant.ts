import { UniqueEntityID } from 'src/domain/shared/UniqueEntityID';
import { Email } from '../value-object/email';
import { ParticipantId } from '../value-object/participant-id';
import { ParticipantName } from '../value-object/participant-name';
import { RegistrationStatus } from '../value-object/registration-status';

interface ParticipantProps {
  email: Email;
  name: ParticipantName;
  registrationStatus: RegistrationStatus;
}

export class Participant {
  private readonly _participantId: ParticipantId;
  private readonly _email: Email;
  private readonly _name: ParticipantName;
  private readonly _registrationStatus: RegistrationStatus;

  private constructor(props: ParticipantProps, id?: UniqueEntityID) {
    this._participantId = ParticipantId.create();
    this._email = props.email;
    this._name = props.name;
    this._registrationStatus = RegistrationStatus.Enroll;
  }

  public static create(
    props: ParticipantProps,
    id?: UniqueEntityID,
  ): Participant {
    // 新しい参加者かどうかをチェックする
    const isNewParticipant = (id == null) === true;

    if (!isNewParticipant) {
      throw new Error('既に存在している参加者です');
    }

    const participant = new Participant(props);

    return participant;
  }

  get participantId(): ParticipantId {
    return this._participantId;
  }

  get email(): Email {
    return this._email;
  }

  get name(): ParticipantName {
    return this._name;
  }

  get registrationStatus(): RegistrationStatus {
    return this._registrationStatus;
  }
}
