import { Request, ResponseObject, ResponseToolkit } from '@hapi/hapi';
import Boom from '@hapi/boom';

export const helloHandler = async (
  request: Request,
  h: ResponseToolkit
): Promise<ResponseObject> => {
  try {
    
    return h.response({hello:'hello'});
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return Boom.internal(JSON.stringify(error));
  }
};

