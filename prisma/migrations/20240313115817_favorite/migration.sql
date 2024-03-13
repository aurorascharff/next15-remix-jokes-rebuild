-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Joke" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "favorite" BOOLEAN NOT NULL DEFAULT false,
    "content" TEXT NOT NULL
);
INSERT INTO "new_Joke" ("content", "createdAt", "id", "name", "updatedAt") SELECT "content", "createdAt", "id", "name", "updatedAt" FROM "Joke";
DROP TABLE "Joke";
ALTER TABLE "new_Joke" RENAME TO "Joke";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
