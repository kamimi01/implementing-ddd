export const RegistrationStatus = {
  Enroll: 'enroll',
  Recess: 'recess',
  Withdrawal: 'withdrawal',
} as const;

type TypeOfRegistrationStatus = typeof RegistrationStatus
export type RegistrationStatus =
  typeof RegistrationStatus[keyof TypeOfRegistrationStatus];