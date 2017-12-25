import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducers'

const store = createStore(
  reducer,
  { isOutdated: true, searches: [] },
  applyMiddleware(thunk)
)

export default store
