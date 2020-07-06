import { put, call } from 'redux-saga/effects';
import { loadLeagueFailure, loadLeagueSuccess } from './actions';
import { leagueService } from '../../../services/league.service';

export function* loadLeague() {
    try {
        const players = yield call( leagueService.loadLeague );
        yield put(loadLeagueSuccess(players))
    } catch(err) {
        console.log('loadPlayers', err);
        yield put(loadLeagueFailure());
    }
}