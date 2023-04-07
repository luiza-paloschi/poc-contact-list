import { QueryResult } from "pg";
import { connection } from "../config/database.js";
import { ContactEntity } from "../types.js";

async function getAll(): Promise<QueryResult<ContactEntity>> {
    return await connection.query(`SELECT id, name, phone, email FROM contacts`);
}

export default {getAll}