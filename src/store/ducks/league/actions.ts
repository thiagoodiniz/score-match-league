import { action } from 'typesafe-actions';
import { Types, League } from './types';

export const loadLeague = () => action(Types.LOAD_LEAGUE);

export const loadLeagueSuccess = (league: League) => action(Types.LOAD_LEAGUE_SUCCESS, {league});

export const loadLeagueFailure = () => action(Types.LOAD_LEAGUE_FAILURE);