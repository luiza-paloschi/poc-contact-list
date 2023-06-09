import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import contactsServices from "../services/contacts-services.js";
import { Contact, ContactEntity } from "../types.js";


async function getAllContacts(_: Request, res: Response, next: NextFunction){
    try {
        const contacts = await contactsServices.getAll();
        res.status(httpStatus.OK).send(contacts);
    } catch (error) {
        next(error);
    }
}

async function getgetContactById(req: Request, res: Response, next: NextFunction){
    const {id} = req.params;
    try {
        const contact = await contactsServices.getContactById(Number(id));
        res.status(httpStatus.OK).send(contact);
    } catch (error) {
        next(error);
    }
}

async function insertContact(req: Request, res: Response, next: NextFunction){
    try {
        const contact = req.body as Contact;
        await contactsServices.insertContact(contact);

        res.sendStatus(httpStatus.CREATED);
    } catch (error) {
        next(error);
    }
}

async function updateContact(req: Request, res: Response, next: NextFunction){
    try {
        const contact = req.body as Contact;
        const {id} = req.params;
        await contactsServices.updateContact({...contact, id: Number(id)});

        res.sendStatus(httpStatus.OK);
    } catch (error) {
        next(error);
    }
}

async function deleteContact(req: Request, res: Response, next: NextFunction){
    try {
        const {id} = req.params;
        await contactsServices.deleteContact(Number(id));

        res.sendStatus(httpStatus.OK);
    } catch (error) {
        next(error);
    }
}

export default { getAllContacts, insertContact, getgetContactById, updateContact, deleteContact }