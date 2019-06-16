import { createTreeNodesFromObject } from '../utils';

import data from './tree.json';
const nodes = createTreeNodesFromObject(data, 'tree');
export default nodes;
