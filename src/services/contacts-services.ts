import errors from "../errors/index.js";
import contactsRepositories from "../repositories/contacts-repositories.js";
import { Contact, ContactEntity } from "../types.js";


async function getAll() {
    const { rows, rowCount } = await contactsRepositories.getAll();
    if (!rowCount) throw errors.notFoundError("You have no contacts!");
    return rows;
}

async function insertContact({name, phone, email}: Contact){
    const { rowCount } = await contactsRepositories.findByPhone(phone);
    if (rowCount > 0) throw errors.duplicatedNumberError(phone);

    await contactsRepositories.insertContact({name, phone, email});
}

async function updateContact({id, name, phone, email}: ContactEntity){
    const { rowCount } = await contactsRepositories.findById(id);
    if (!rowCount) throw errors.notFoundError("No results for this search!");

    await contactsRepositories.update({id, name, phone, email});
}

async function getContactById(id: number): Promise<ContactEntity>{
    const {rows: [contact], rowCount } = await contactsRepositories.findById(id);
    if (!rowCount) throw errors.notFoundError("No results for this search!");
    return contact;
}

export default {getAll, insertContact, getContactById, updateContact}