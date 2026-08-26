-- AlterTable FormRequest
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;

CREATE TABLE "new_FormRequest" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT,
    "message" TEXT,
    "site" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'NEW',
    "emailStatus" TEXT NOT NULL DEFAULT 'ERROR',
    "emailError" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_FormRequest" ("id", "type", "name", "phone", "address", "message", "site", "status", "createdAt", "updatedAt")
SELECT "id", "type", "name", "phone", "address", "message", "site", "status", "createdAt", "updatedAt" FROM "FormRequest";
DROP TABLE "FormRequest";
ALTER TABLE "new_FormRequest" RENAME TO "FormRequest";

CREATE TABLE "new_Setting" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ownerPrompt" TEXT,
    "activeApiKeyId" TEXT,
    "smtpHost" TEXT,
    "smtpPort" INTEGER,
    "smtpSecure" BOOLEAN NOT NULL DEFAULT false,
    "smtpUser" TEXT,
    "smtpPass" TEXT,
    "smtpFrom" TEXT,
    "smtpTo" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Setting" ("id", "ownerPrompt", "activeApiKeyId", "createdAt", "updatedAt")
SELECT "id", "ownerPrompt", "activeApiKeyId", "createdAt", "updatedAt" FROM "Setting";
DROP TABLE "Setting";
ALTER TABLE "new_Setting" RENAME TO "Setting";

PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
