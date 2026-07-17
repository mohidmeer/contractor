-- CreateTable
CREATE TABLE "Service" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "site" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "image" TEXT,
    "typeOfSolutions" JSONB NOT NULL,
    "benefitsOFChoosing" JSONB NOT NULL,
    "faqs" JSONB NOT NULL,
    "images" JSONB NOT NULL DEFAULT [],
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "site" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "image" TEXT,
    "location" TEXT,
    "duration" TEXT,
    "materials" JSONB NOT NULL DEFAULT [],
    "images" JSONB NOT NULL DEFAULT [],
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Service_site_slug_key" ON "Service"("site", "slug");

-- CreateIndex
CREATE UNIQUE INDEX "Project_site_slug_key" ON "Project"("site", "slug");
