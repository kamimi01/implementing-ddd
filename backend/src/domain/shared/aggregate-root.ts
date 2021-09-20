import { Entity } from './Entity';
import { DomainEvent } from './events/domain-event';
import { DomainEvents } from './events/domain-events';
import { UniqueEntityID } from './UniqueEntityID';

/**
 * ドメインイベントの追加や削除などを行うクラス
 */
export abstract class AggregateRoot<T> extends Entity<T> {
  private _domainEvents: DomainEvent[] = [];

  get id(): UniqueEntityID {
    return this.id;
  }

  get domainEvents(): DomainEvent[] {
    return this._domainEvents;
  }

  protected addDomainEvent(domainEvent: DomainEvent): void {
    // この集約にドメインイベントを追加する
    this._domainEvents.push(domainEvent);

    // ドメインイベントを転送する集約のリストに追加する
    DomainEvents.markAggregateForDispatch(this);

    // ドメインイベントのログを出力する
    this.logDomainEventAdded(domainEvent);
  }

  public clearEvents(): void {
    this._domainEvents.splice(0, this._domainEvents.length);
  }

  private logDomainEventAdded(domainEvent: DomainEvent): void {
    const thisClass = Reflect.getPrototypeOf(this);
    const domainEventClass = Reflect.getPrototypeOf(domainEvent);

    // TODO: ロガーを使用して出力する
    console.info(
      'Domain Event Created:',
      thisClass.constructor.name,
      '==>',
      domainEventClass.constructor.name,
    );
  }
}
