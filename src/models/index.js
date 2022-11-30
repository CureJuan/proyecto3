// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Colors } = initSchema(schema);

export {
  Colors
};