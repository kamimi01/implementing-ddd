// TODO: クラスを使った書き方に修正したい
const ProgressionStatus = {
  NotStarted: 'notStarted',
  Working: 'working',
  WaitingForReview: 'waitingForReview',
  Completed: 'completed',
} as const;

export type ProgressionStatus =
  typeof ProgressionStatus[keyof typeof ProgressionStatus];
