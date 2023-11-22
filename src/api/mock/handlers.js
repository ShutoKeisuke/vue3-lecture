import { setupWorker } from 'msw';

import { todoInfo } from './todoInfo';

const handlers = [
  ...todoInfo
];

export const worker = setupWorker(...handlers);
