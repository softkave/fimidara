import {DevEnvironment, kDevEnvironment, startDev} from './utils.js';

const args = process.argv.slice(2);
const environment = (args[0] || kDevEnvironment.dev) as DevEnvironment;
const otherArgs = args.slice(1);

startDev(environment, otherArgs);
