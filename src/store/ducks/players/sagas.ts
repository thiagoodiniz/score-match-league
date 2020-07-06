import { put, call } from 'redux-saga/effects';
import { loadPlayersFailure, loadPlayersSuccess } from './actions';
import { playerService } from '../../../services/player.service';

export function* loadPlayers() {
    try {
        const players = yield call( playerService.loadPlayers );
        yield put(loadPlayersSuccess(players))
    } catch(err) {
        console.log('loadPlayers', err);
        yield put(loadPlayersFailure());
    }
}