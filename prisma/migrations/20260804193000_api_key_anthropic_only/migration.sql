-- Keep only Anthropic keys going forward
DELETE FROM "ApiKey" WHERE "provider" != 'ANTHROPIC';

-- Ensure remaining rows use ANTHROPIC
UPDATE "ApiKey" SET "provider" = 'ANTHROPIC' WHERE "provider" IS NULL OR "provider" = '';
