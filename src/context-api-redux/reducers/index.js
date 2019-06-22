const initialState = {
  app: {
    name: 'GitHint'
  },
  searchTerms: {
    branch: ''
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_BRANCH_SEARCH':
      return {
        ...state,
        searchTerms: {
          ...state.searchTerms,
          ...action.payload
        }
      }
    default:
      return state;
  }
}
