import { createStore } from './index';

import reducer from './reducers';

const initialState = {
  app: {
    config: '.githint.json',
    name: 'GitHint',
  },
  searchTerms: {
    branch: ''
  }
}

export default createStore(reducer, initialState);
