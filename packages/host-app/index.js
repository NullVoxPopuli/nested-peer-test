import { foo as md } from 'middle-dependency';
import { foo as ddb } from 'deep-dependency-b';

console.log(md(), ddb());
