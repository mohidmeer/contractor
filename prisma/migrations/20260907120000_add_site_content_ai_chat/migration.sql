-- CreateTable
CREATE TABLE "SiteContentAiChat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT DEFAULT 1,
    "messages" JSONB NOT NULL DEFAULT '[]',
    "pending" BOOLEAN NOT NULL DEFAULT false,
    "draftContent" JSONB,
    "lastApply" JSONB,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
