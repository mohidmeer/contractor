-- AlterTable
ALTER TABLE "Service" ADD COLUMN "seo_title" TEXT NOT NULL DEFAULT '';
ALTER TABLE "Service" ADD COLUMN "seo_description" TEXT NOT NULL DEFAULT '';

ALTER TABLE "Project" ADD COLUMN "seo_title" TEXT NOT NULL DEFAULT '';
ALTER TABLE "Project" ADD COLUMN "seo_description" TEXT NOT NULL DEFAULT '';

-- Backfill from main title/description
UPDATE "Service" SET "seo_title" = "title", "seo_description" = "description" WHERE "seo_title" = '' OR "seo_description" = '';
UPDATE "Project" SET "seo_title" = "title", "seo_description" = "description" WHERE "seo_title" = '' OR "seo_description" = '';
