import { all, takeLatest } from 'redux-saga/effects';
import { Types as PlayerTypes } from './players/types';
import { Types as LeagueTypes } from './league/types';
import { loadPlayers } from './players/sagas';
import { loadLeague, saveMatch, addDivisionPlayers } from './league/sagas';

export default function* rootSaga(){
    return yield all([
        takeLatest( PlayerTypes.LOAD_PLAYERS, loadPlayers ),
        takeLatest( LeagueTypes.LOAD_LEAGUE, loadLeague ),
        takeLatest( LeagueTypes.ADD_DIVISION_PLAYERS, addDivisionPlayers ),
        takeLatest( LeagueTypes.SAVE_MATCH,  saveMatch ),
    ]);
} 