-- CreateTable
CREATE TABLE "ApiKey" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "label" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "apiKey" TEXT NOT NULL,
    "inputTokensUsed" INTEGER NOT NULL DEFAULT 0,
    "outputTokensUsed" INTEGER NOT NULL DEFAULT 0,
    "inputPricePerMillion" REAL NOT NULL DEFAULT 0,
    "outputPricePerMillion" REAL NOT NULL DEFAULT 0,
    "isDefault" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Migrate legacy anthropic key into ApiKey if present
INSERT INTO "ApiKey" (
  "id", "label", "provider", "apiKey", "inputTokensUsed", "outputTokensUsed",
  "inputPricePerMillion", "outputPricePerMillion", "isDefault", "createdAt"
)
SELECT
  lower(hex(randomblob(16))),
  'Migrated Anthropic key',
  'ANTHROPIC',
  "anthropicKey",
  0,
  0,
  0,
  0,
  1,
  CURRENT_TIMESTAMP
FROM "Setting"
WHERE "anthropicKey" IS NOT NULL AND trim("anthropicKey") != '';

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Setting" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ownerPrompt" TEXT,
    "activeApiKeyId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Setting" ("id", "ownerPrompt", "activeApiKeyId", "createdAt", "updatedAt")
SELECT
  "id",
  NULL,
  (SELECT "id" FROM "ApiKey" WHERE "provider" = 'ANTHROPIC' ORDER BY "createdAt" DESC LIMIT 1),
  "createdAt",
  "updatedAt"
FROM "Setting";
DROP TABLE "Setting";
ALTER TABLE "new_Setting" RENAME TO "Setting";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
