-- CreateTable
CREATE TABLE "SiteContent" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT DEFAULT 1,
    "data" JSONB NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ApiKey" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "label" TEXT NOT NULL,
    "provider" TEXT NOT NULL DEFAULT 'ANTHROPIC',
    "apiKey" TEXT NOT NULL,
    "inputTokensUsed" INTEGER NOT NULL DEFAULT 0,
    "outputTokensUsed" INTEGER NOT NULL DEFAULT 0,
    "inputPricePerMillion" REAL NOT NULL DEFAULT 0,
    "outputPricePerMillion" REAL NOT NULL DEFAULT 0,
    "isDefault" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_ApiKey" ("apiKey", "createdAt", "id", "inputPricePerMillion", "inputTokensUsed", "isDefault", "label", "outputPricePerMillion", "outputTokensUsed", "provider") SELECT "apiKey", "createdAt", "id", "inputPricePerMillion", "inputTokensUsed", "isDefault", "label", "outputPricePerMillion", "outputTokensUsed", "provider" FROM "ApiKey";
DROP TABLE "ApiKey";
ALTER TABLE "new_ApiKey" RENAME TO "ApiKey";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
