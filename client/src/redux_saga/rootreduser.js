import { combineReducers } from 'redux';
import ElectionReducer from '../redux_saga/Admin_saga/Admin/Election/reducer/reducer';
import PartyReducer from '../redux_saga/Admin_saga/Admin/party/reducer/reducer';
import PartyConnectReducer from '../redux_saga/Admin_saga/Admin/PartyConnect/reducer/reducer'
import TotalCountReducer from '../redux_saga/Admin_saga/Admin/TotalCount/reducer/reducer';

// VOTE REDUCER
import voteReducer from './User_saga/Voting/reducer'

const RootReducer = combineReducers({
  // ELECTION IMPORT REDUCER
  ElectionReducer,
  PartyReducer,
  PartyConnectReducer,
  TotalCountReducer,

  // VOTE REDUCER
  voteReducer
})
export default RootReducer