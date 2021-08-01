const RegistrationStatus = {
  Enroll: 0,
  Recess: 1,
  Withdrawal: 2,
} as const;

export type RegistrationStatus = typeof RegistrationStatus[keyof typeof RegistrationStatus];