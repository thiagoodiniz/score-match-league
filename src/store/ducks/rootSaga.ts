import { all, takeLatest } from 'redux-saga/effects';
import { Types as PlayerTypes } from './players/types';
import { Types as LeagueTypes } from './league/types';
import { loadPlayers } from './players/sagas';
import { loadLeague } from './league/sagas';

export default function* rootSaga(){
    return yield all([
        takeLatest( PlayerTypes.LOAD_PLAYERS, loadPlayers ),
        takeLatest( LeagueTypes.LOAD_LEAGUE, loadLeague ),
    ]);
} 