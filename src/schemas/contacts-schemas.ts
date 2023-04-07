import { Contact } from "../types";
import Joi from 'joi';

export const ContactSchema = Joi.object<Contact>({
    name: Joi.string().min(3).required(),
    phone: Joi.string().min(9).max(11).required(),
    email: Joi.string().email().required()
})