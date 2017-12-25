import axios from 'axios'

export const fetchSearches = () => {
  return dispatch => {
    axios
      .get('/searches.json')
      .then(response => {
        dispatch({
          type: 'SEARCHES_FETCHED',
          payload: response.data,
        })
      })
      .then(() => {
        dispatch({
          type: 'SEARCHES_UPDATED',
        })
      })
  }
}
