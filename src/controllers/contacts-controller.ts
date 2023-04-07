import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import contactsServices from "../services/contacts-services.js";


async function getAllContacts(_: Request, res: Response, next: NextFunction){
    try {
        const contacts = await contactsServices.getAll();
        res.status(httpStatus.OK).send(contacts);
    } catch (error) {
        next(error);
    }
}
async function test(req: Request, res: Response, next: NextFunction){
    try {
        res.status(httpStatus.OK).send("Test")
    } catch (error) {
        next(error)
    }
}

export default { getAllContacts, test }