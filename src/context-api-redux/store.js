import { createStore } from './index';

import reducer from './reducers';

const initialState = {
  app: {
    config: '.ghint.json',
    name: 'Ghint',
  },
  searchTerms: {
    branch: ''
  }
}

export default createStore(reducer, initialState);
