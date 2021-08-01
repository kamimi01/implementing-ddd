// TODO: クラスを使った書き方に修正したい
const RegistrationStatus = {
  Enroll: 'enroll',
  Recess: 'recess',
  Withdrawal: 'withdrawal',
} as const;

export type RegistrationStatus =
  typeof RegistrationStatus[keyof typeof RegistrationStatus];