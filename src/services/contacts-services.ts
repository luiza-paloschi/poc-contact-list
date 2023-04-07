import errors from "../errors/index.js";
import contactsRepositories from "../repositories/contacts-repositories.js";
import { Contact } from "../types.js";


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

export default {getAll, insertContact}