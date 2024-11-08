import path from "node:path";
import process from "node:process";
import { config } from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";

config({ path: path.join(process.cwd(), "../../.env") });

const DATABASE_URL = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:${process.env.POSTGRES_PORT}/${process.env.DB_NAME}`;

const db = drizzle(DATABASE_URL);

export default db;
