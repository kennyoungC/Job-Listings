import { ADD_FAVOURITE, REMOVE_FAVOURITE } from "../actions"

const initialState = {
  favourite: {
    content: [],
  },
}
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE:
      return {
        ...state,
        favourite: {
          ...state.favourite,
          content: [
            ...state.favourite.content,
            { ...action.payload, bookmarked: true },
          ],
        },
      }
    case REMOVE_FAVOURITE:
      return {
        ...state,
        favourite: {
          ...state.favourite,
          content: state.favourite.content.filter(
            (el) => el._id !== action.payload
          ),
        },
      }

    default:
      return state
  }
}
export default mainReducer
