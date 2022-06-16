export const GET_JOBS = "GET_JOBS"
export const TOGGLE_SPINNER = "TOGGLE_SPINNER"
export const TOGGLE_ERROR = "TOGGLE_ERROR"
const initialState = {
  jobs: [],
  loading: true,
  isError: false,
  errorMsg: "",
}

const jobReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_JOBS:
      return {
        ...state,
        jobs: payload,
      }
    case TOGGLE_SPINNER:
      return {
        ...state,
        loading: false,
      }
    case TOGGLE_ERROR:
      return {
        ...state,
        isError: true,
        errorMsg: payload,
      }
    default:
      return state
  }
}
export default jobReducer
