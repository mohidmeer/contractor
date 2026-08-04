-- CreateTable
CREATE TABLE "new_Blog" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "seo_title" TEXT NOT NULL,
    "read_time" TEXT NOT NULL,
    "seo_description" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "content" JSONB NOT NULL,
    "image" TEXT,
    "status" TEXT NOT NULL DEFAULT 'PUBLISHED',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

INSERT INTO "new_Blog" ("id", "title", "description", "seo_title", "read_time", "seo_description", "slug", "content", "image", "status", "createdAt", "updatedAt")
SELECT "id", "title", "description", "seo_title", "read_time", "seo_description", "slug", "content", "image", 'PUBLISHED', "createdAt", "updatedAt" FROM "Blog";

DROP TABLE "Blog";
ALTER TABLE "new_Blog" RENAME TO "Blog";
CREATE UNIQUE INDEX "Blog_slug_key" ON "Blog"("slug");

-- Alter Service
CREATE TABLE "new_Service" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "content" JSONB NOT NULL DEFAULT '[]',
    "image" TEXT,
    "typeOfSolutions" JSONB NOT NULL,
    "benefitsOFChoosing" JSONB NOT NULL,
    "faqs" JSONB NOT NULL,
    "images" JSONB NOT NULL DEFAULT '[]',
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "status" TEXT NOT NULL DEFAULT 'PUBLISHED',
    "categoryId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Service_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

INSERT INTO "new_Service" ("id", "slug", "label", "title", "description", "content", "image", "typeOfSolutions", "benefitsOFChoosing", "faqs", "images", "sortOrder", "status", "categoryId", "createdAt", "updatedAt")
SELECT "id", "slug", "label", "title", "description", "content", "image", "typeOfSolutions", "benefitsOFChoosing", "faqs", "images", "sortOrder", 'PUBLISHED', "categoryId", "createdAt", "updatedAt" FROM "Service";

DROP TABLE "Service";
ALTER TABLE "new_Service" RENAME TO "Service";
CREATE UNIQUE INDEX "Service_slug_key" ON "Service"("slug");

-- Alter Project
CREATE TABLE "new_Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "content" JSONB NOT NULL DEFAULT '[]',
    "image" TEXT,
    "location" TEXT,
    "duration" TEXT,
    "materials" JSONB NOT NULL DEFAULT '[]',
    "images" JSONB NOT NULL DEFAULT '[]',
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "status" TEXT NOT NULL DEFAULT 'PUBLISHED',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

INSERT INTO "new_Project" ("id", "slug", "label", "title", "description", "content", "image", "location", "duration", "materials", "images", "sortOrder", "status", "createdAt", "updatedAt")
SELECT "id", "slug", "label", "title", "description", "content", "image", "location", "duration", "materials", "images", "sortOrder", 'PUBLISHED', "createdAt", "updatedAt" FROM "Project";

DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
CREATE UNIQUE INDEX "Project_slug_key" ON "Project"("slug");
