import { all, takeLatest } from 'redux-saga/effects';
import { Types } from './players/types';
import { loadPlayers } from './players/sagas';

export default function* rootSaga(){
    return yield all([
        takeLatest(Types.LOAD_PLAYERS, loadPlayers )
    ]);
} 