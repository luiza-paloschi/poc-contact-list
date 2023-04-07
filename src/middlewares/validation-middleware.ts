import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import errors from "../errors/index.js";
import { ObjectSchema } from 'joi';

function validateBody<T>(schema: ObjectSchema<T>) {
    return validate(schema, 'body');
}

function validate(schema: ObjectSchema, type: 'body' | 'params') {
    return (req: Request, res: Response, next: NextFunction) => {
      const { error } = schema.validate(req[type], {
        abortEarly: false,
      });
  
      if (!error) {
        next();
      } else {
        res.status(httpStatus.BAD_REQUEST).send(errors.invalidDataError(error.details.map((d) => d.message)));
      }
    };
}

export default {validateBody}
