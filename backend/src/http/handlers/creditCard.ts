import { Request, ResponseObject, ResponseToolkit } from '@hapi/hapi';
import Boom from '@hapi/boom';

export const validateCreditCardHandler = async (
  request: Request,
  h: ResponseToolkit
): Promise<ResponseObject> => {
  try {
    console.log(request.payload);
    return h.response({hello:'hello'});
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return Boom.internal(JSON.stringify(error));
  }
};

