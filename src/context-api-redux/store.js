import { createStore } from './index';

import reducer from './reducers';

const initialState = {
  app: {
    config: '.ghint',
    name: 'Ghint',
  },
  searchTerms: {
    branch: ''
  }
}

export default createStore(reducer, initialState);
