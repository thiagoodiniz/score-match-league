import { action } from 'typesafe-actions';
import { Types, League, DivisionMatch } from './types';

export const loadLeague = () => action(Types.LOAD_LEAGUE);
export const loadLeagueSuccess = (league: League) => action(Types.LOAD_LEAGUE_SUCCESS, {league});
export const loadLeagueFailure = () => action(Types.LOAD_LEAGUE_FAILURE);

export const addDivisionPlayers = (leagueId: number, leagueDivisionId: number, playerIds: number[]) =>
    action(Types.ADD_DIVISION_PLAYERS, { leagueId, leagueDivisionId, playerIds });

export const saveMatch = ( match: DivisionMatch ) => action(Types.SAVE_MATCH, match);
