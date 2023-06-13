import { ServerRoute } from '@hapi/hapi';
import {
  helloHandler,
} from '../handlers';

const routes: ServerRoute[] = [
  {
    method: 'GET',
    path: '/hello',
    options: {
      description: 'hello',
      auth: false,
      handler: helloHandler,
    },
  }
];

export default routes;
