const reducer = (state = [], action) => {
  switch (action.type) {
    case 'SEARCH_ADDED':
      return Object.assign({}, state, { isOutdated: true })
    case 'SEARCHES_FETCHED':
      return Object.assign({}, state, { searches: action.payload })
    case 'SEARCHES_UPDATED':
      return Object.assign({}, state, { isOutdated: false })
    default:
      return state
  }
}

export default reducer
