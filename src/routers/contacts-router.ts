import { Router } from 'express';
import contactsController from '../controllers/contacts-controller.js';
import validationMiddleware from '../middlewares/validation-middleware.js';
import { ContactSchema } from '../schemas/contacts-schemas.js';


const contactsRouter = Router();

contactsRouter
  .get('/', contactsController.getAllContacts)
  .get('/:id', contactsController.getgetContactById)
  .post('/', validationMiddleware.validateBody(ContactSchema), contactsController.insertContact)
  .put('/:id', validationMiddleware.validateBody(ContactSchema), contactsController.updateContact)
  //.delete('/:id', )

export default contactsRouter;