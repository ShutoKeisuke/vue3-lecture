import { setupWorker } from 'msw';

// todoInfoは使用しないかもしれないが、mockの増やし方の例として残しておく
import { clientInfo } from './clientInfo';
import { todoInfo } from './todoInfo';

const handlers = [
  ...clientInfo,
  ...todoInfo
];

export const worker = setupWorker(...handlers);
