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
