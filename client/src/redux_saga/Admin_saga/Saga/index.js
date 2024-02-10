import { all } from "redux-saga/effects";
import { GetElectionRootSaga, GetPartyConnectRootSaga,GetPartyRootSaga,GetTotalCountRootSaga,PostElectionRootSaga,PostPartyConnectRootSaga,PostPartyRootSaga} from "./Root/RootSaga";

export function* SagaIndex() {
  yield all([
    GetElectionRootSaga(),
    PostElectionRootSaga(),
    GetPartyRootSaga(),
    PostPartyRootSaga(),
    GetPartyConnectRootSaga(),
    PostPartyConnectRootSaga(),
    GetTotalCountRootSaga(),
  ])
}