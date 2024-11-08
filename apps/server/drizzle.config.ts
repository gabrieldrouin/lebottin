import path from "node:path";
import process from "node:process";
import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: path.join(process.cwd(), "../../.env") });

const DATABASE_URL = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:${process.env.POSTGRES_PORT}/${process.env.DB_NAME}`;

export default defineConfig({
  out: "./src/db/migrations",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: DATABASE_URL,
  },
});
