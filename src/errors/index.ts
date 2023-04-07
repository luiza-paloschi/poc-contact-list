import { ApplicationError } from "../types";

function duplicatedNumberError(number: string): ApplicationAndNumberError {
    return {
      name: "DuplicatedNumberError",
      message: "There is already a contact with given number",
      number,
    };
}
  
type ApplicationAndNumberError = ApplicationError & {number: string}

function invalidDataError(details: string[]): ApplicationError {
    return {
      name: 'InvalidDataError',
      message: 'Invalid data',
      details,
    };
}

function notFoundError(message: string): ApplicationError {
    return {
      name: 'NotFoundError',
      message: message,
    };
}

export default {notFoundError, invalidDataError, duplicatedNumberError}