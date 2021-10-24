import { Entity } from 'src/domain/shared/Entity';
import { UniqueEntityID } from 'src/domain/shared/UniqueEntityID';
import { Email } from '../value-object/email';
import { ParticipantId } from '../value-object/participant-id';
import { ParticipantName } from '../value-object/participant-name';
import { RegistrationStatus } from '../value-object/registration-status';

export interface ParticipantProps {
  email: Email;
  name: ParticipantName;
  registrationStatus: RegistrationStatus;
}

export class Participant extends Entity<ParticipantProps> {
  public readonly _props: ParticipantProps;
  public readonly _id: ParticipantId;

  private constructor(props: ParticipantProps, id?: ParticipantId) {
    super(props, id);
    this._props = props;
    this._id = id;
  }

  /**
   * 参加者エンティティのインスタンス生成
   * @param props
   * @param id
   * @returns Participant
   */
  public static create(
    props: ParticipantProps,
    id?: ParticipantId
  ): Participant {
    const participantId = ParticipantId.create(id);
    const participantProps = {
      email: props.email,
      name: props.name,
      registrationStatus: RegistrationStatus.Enroll
    }
    const participant = new Participant(participantProps, participantId);

    return participant;
  }

  get participantProps(): ParticipantProps {
    return this._props;
  }

  get id(): ParticipantId {
    return this._id;
  }
}
