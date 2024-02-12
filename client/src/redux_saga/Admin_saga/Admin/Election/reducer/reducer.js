import { GET_ELECTION_ERROR, GET_ELECTION_PROGRESS, GET_ELECTION_SUCCESS, POST_ELECTION_ERROR, POST_ELECTION_PROGRESS, POST_ELECTION_SUCCESS } from "../action/action";

const initialState = {
  ElectionData: [],
  GetUserProgress: false,
  GetUserError: null,
  PostUserProgress: false,
  PostUserError: null,

  DataIsLoaded: false
};

function ElectionReducer(state = initialState, action) {
  switch (action.type) {

    case GET_ELECTION_PROGRESS:
      return {
        ...state,
        GetUserProgress: true,
      };
    case GET_ELECTION_ERROR:
      return {
        ...state,
        GetUserError: action.data,
      };
    case GET_ELECTION_SUCCESS:
      return {
        ...state,
        DataIsLoaded: true,
        ElectionData: action.data,
      };

    case POST_ELECTION_PROGRESS:
      return {
        ...state,
        PostUserProgress: true,
      };
    case POST_ELECTION_ERROR:
      return {
        ...state,
        PostUserError: action.data,
      };
    case POST_ELECTION_SUCCESS:
      return {
        ...state,
        DataIsLoaded: true,
        ElectionData: state.ElectionData.concat(action.payload),
        PostUserProgress: false,
      };
    default:
      return state;
  }
}

export default ElectionReducer;