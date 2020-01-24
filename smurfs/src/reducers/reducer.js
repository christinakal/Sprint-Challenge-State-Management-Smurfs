const initialState = {
  data: [],
  isFetching: false,
  isDeleting: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_START":
      return {
        ...state,
        isFetching: true
      };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        error: ""
      };
    case "FETCH_DATA_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case "POST_DATA":
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    case "DELETE_START":
      return {
        ...state,
        isDeleting: true,
        error: null
      };
    case "DELETE_SUCCESS":
      return {
        ...state,
        data: [...action.payload],
        isDeleting: false
      };
    case "DELETE_ERROR":
      return {
        ...state,
        isDeleting: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
