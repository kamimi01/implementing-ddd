import { Entity } from 'src/domain/shared/Entity';
import { UniqueEntityID } from 'src/domain/shared/UniqueEntityID';
import { Email } from '../value-object/email';
import { ParticipantId } from '../value-object/participant-id';
import { ParticipantName } from '../value-object/participant-name';
import { RegistrationStatus } from '../value-object/registration-status';

export interface ParticipantProps {
  email: Email;
  name: ParticipantName;
  registationStatus: RegistrationStatus;
}

export class Participant extends Entity<ParticipantProps> {
  private readonly _email: Email;
  private readonly _name: ParticipantName;
  private readonly _registationStatus: RegistrationStatus;

  private constructor(props: ParticipantProps, id?: UniqueEntityID) {
    super(props, id);
    this._email = props.email;
    this._name = props.name;
    this._registationStatus = RegistrationStatus.Enroll;
  }

  /**
   * 参加者エンティティのインスタンス生成
   * @param props
   * @param id
   * @returns Participant
   */
  public static create(
    props: ParticipantProps,
    id?: UniqueEntityID,
  ): Participant {
    // 新しい参加者かどうかをチェックする
    // const isNewParticipant = (id == null) === true;

    // if (!isNewParticipant) {
    //   throw new Error('既に存在している参加者です');
    // }

    const participant = new Participant(props);

    return participant;
  }

  // IDはUUIDを使用して、早期生成する
  get participantId(): ParticipantId {
    return ParticipantId.create(this._id);
  }

  get email(): Email {
    return this._email;
  }

  get name(): ParticipantName {
    return this._name;
  }

  get registrationStatus(): RegistrationStatus {
    return this._registationStatus;
  }
}
