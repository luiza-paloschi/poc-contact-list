import { QueryResult } from "pg";
import { connection } from "../config/database.js";
import { Contact, ContactEntity } from "../types.js";

async function getAll(): Promise<QueryResult<ContactEntity>> {
    return await connection.query(`SELECT * FROM contacts`);
}

async function insertContact({name, phone, email}: Contact): Promise<QueryResult> {
    return await connection.query(
        `
        INSERT INTO contacts (name, phone, email)
        VALUES ($1, $2, $3);
        `, [name, phone, email]);
}

async function findByPhone(phone: string): Promise<QueryResult<ContactEntity>>{
    return await connection.query(
        `
        SELECT * FROM contacts
        WHERE phone=$1
        `, [phone]);
}

export default {getAll, insertContact, findByPhone}