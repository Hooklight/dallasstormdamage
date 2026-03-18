import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

function getDb() {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL environment variable is not set");
  const sql = neon(url);
  return drizzle(sql, { schema });
}

// Singleton for use in server components / actions
let _db: ReturnType<typeof getDb> | null = null;

export function db() {
  if (!_db) _db = getDb();
  return _db;
}
