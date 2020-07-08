import { put, call } from 'redux-saga/effects';
import { loadLeagueFailure, loadLeagueSuccess } from './actions';
import { leagueService } from '../../../services/league.service';

export function* loadLeague() {
    try {
        const league = yield call( leagueService.loadLeague );
        yield put(loadLeagueSuccess(league));
    } catch(err) {
        console.log('loadLeague', err);
        yield put(loadLeagueFailure());
    }
}