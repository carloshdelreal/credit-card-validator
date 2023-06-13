import { ServerRoute } from '@hapi/hapi';
import {
  validateCreditCardHandler,
} from '../handlers';
import Joi from 'joi';

const routes: ServerRoute[] = [
  {
    method: 'POST',
    path: '/validate',
    options: {
      description: 'Validates credit card using Luhn checksum',
      auth: false,
      handler: validateCreditCardHandler,
      validate: {
        payload: Joi.object({
          creditCardNumber: Joi.string().required()
        })
      }
    },
  }
];

export default routes;
