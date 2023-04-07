import pg from "pg";
import * as dotenv from 'dotenv';
dotenv.config();

const { Pool } = pg;

export const connection = new Pool({
  connectionString: process.env.DATABASE_URL,
});