import { createTreeNodesFromObject } from '../utils';

import data from './pull.json';
const nodes = createTreeNodesFromObject(data, 'pull');
export default nodes;
