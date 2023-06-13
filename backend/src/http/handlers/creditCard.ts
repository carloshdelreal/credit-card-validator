import { Request, ResponseObject, ResponseToolkit } from '@hapi/hapi';
import Boom from '@hapi/boom';
import luhn from 'luhn';

export const validateCreditCardHandler = async (
  request: Request,
  h: ResponseToolkit
): Promise<ResponseObject> => {
  try {
    const isValid = luhn.validate(request.payload.creditCardNumber);
    return h.response({isValid});
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return Boom.internal(JSON.stringify(error));
  }
};

