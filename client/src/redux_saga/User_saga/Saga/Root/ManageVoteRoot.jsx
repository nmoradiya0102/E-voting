import { takeEvery } from "redux-saga/effects";
import { VOTE_POST_PROGRESS } from "../../Voting/action";
import { managePostVote } from "../ManageVote/ManageVote";

// POST SAGA
export function* postVoteSaga() {
    yield takeEvery(VOTE_POST_PROGRESS, managePostVote)
}