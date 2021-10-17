-- CreateTable
CREATE TABLE "Participant" (
    "participantId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "registrationStatusId" INTEGER NOT NULL,

    CONSTRAINT "Participant_pkey" PRIMARY KEY ("participantId")
);

-- CreateTable
CREATE TABLE "RegistrationStatus" (
    "registrationStatusId" SERIAL NOT NULL,
    "registationStatus" TEXT NOT NULL,

    CONSTRAINT "RegistrationStatus_pkey" PRIMARY KEY ("registrationStatusId")
);

-- AddForeignKey
ALTER TABLE "Participant" ADD CONSTRAINT "Participant_registrationStatusId_fkey" FOREIGN KEY ("registrationStatusId") REFERENCES "RegistrationStatus"("registrationStatusId") ON DELETE RESTRICT ON UPDATE CASCADE;
