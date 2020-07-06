import { combineReducers } from 'redux';
import players from './players';
import league from './league';

export default combineReducers({
    players,
    league,
});