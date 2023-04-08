import { QueryResult } from "pg";
import { connection } from "../config/database.js";
import { Contact, ContactEntity } from "../types.js";

async function getAll(): Promise<QueryResult<ContactEntity>> {
    return await connection.query(`SELECT * FROM contacts ORDER BY id`);
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
        SELECT * FROM contacts WHERE phone=$1`, [phone]);
}

async function findById(id: number): Promise<QueryResult<ContactEntity>>{
    return await connection.query(
        `SELECT * FROM contacts WHERE id=$1`, [id]);
}

async function update({id, name, phone, email}: ContactEntity) : Promise<QueryResult>{
    return await connection.query(
        `UPDATE contacts SET name=$1, phone=$2, email=$3
         WHERE id=$4`, [name, phone, email, id]);
}

export default {getAll, insertContact, findByPhone, findById, update}