import { put, call } from 'redux-saga/effects';
import { loadLeague as loadLeagueAction, loadLeagueFailure, loadLeagueSuccess } from './actions';
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

export function* addDivisionPlayers(params: any) { // @TODO- verificar essa tipagem
    try {
        const {leagueId, leagueDivisionId, playerIds} = params.payload;

        yield call( leagueService.addDivisionPlayers, leagueId, leagueDivisionId, playerIds );
        yield put(loadLeagueAction());
    } catch(err) {
        console.log(err)
    }
}

export function* saveMatch(params: any) { // @TODO- verificar essa tipagem
    try {
        yield call( leagueService.saveMatch, params.payload);
        yield put(loadLeagueAction());
    } catch(err) {
        console.log(err)
    }
}