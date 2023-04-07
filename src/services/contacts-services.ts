import errors from "../errors/index.js";
import contactsRepositories from "../repositories/contacts-repositories.js";


async function getAll() {
    const { rows, rowCount } = await contactsRepositories.getAll();
    if (!rowCount) throw errors.notFoundError("You have no contacts!");
    return rows;
}

export default {getAll}