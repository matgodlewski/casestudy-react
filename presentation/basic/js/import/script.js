import { someFunction } from './api.js'; // .js is important!
import { someNotExportedFunction } from './api.js'; // error, import not found: someNotExportedFunction

console.log(someFunction());
