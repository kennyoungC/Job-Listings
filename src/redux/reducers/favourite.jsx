import { ADD_FAVOURITE, REMOVE_FAVOURITE } from "../actions"

const initialState = {
  favourites: [],
}
const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE:
      return {
        ...state,
        favourites: [
          ...state.favourites,
          { ...action.payload, bookmarked: true },
        ],
      }
    case REMOVE_FAVOURITE:
      return {
        ...state,
        favourites: state.favourites.filter((el) => el._id !== action.payload),
      }

    default:
      return state
  }
}
export default favReducer
