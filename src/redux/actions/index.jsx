import { GET_JOBS, TOGGLE_ERROR, TOGGLE_SPINNER } from "../reducers/jobs"

export const ADD_FAVOURITE = "ADD_FAVOURITE"
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE"

export const addFavActions = (payload) => ({
  type: ADD_FAVOURITE,
  payload,
})
export const removeFavActions = (id) => ({
  type: REMOVE_FAVOURITE,
  payload: id,
})

export const getJobAction = (url) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      const { data } = await response.json()
      dispatch({ type: GET_JOBS, payload: data })
      dispatch({ type: TOGGLE_SPINNER })
    } catch (error) {
      dispatch({ type: TOGGLE_SPINNER })
      dispatch({ type: TOGGLE_ERROR, payload: error.message })

      console.log(error)
    }
  }
}
