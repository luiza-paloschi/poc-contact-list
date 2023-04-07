import { Router } from 'express';
import contactsController from '../controllers/contacts-controller.js';


const contactsRouter = Router();

contactsRouter
  .get('/', contactsController.getAllContacts)
  //.post('/', )
  //.put('/:id', )
  //.delete('/:id', )

export default contactsRouter;