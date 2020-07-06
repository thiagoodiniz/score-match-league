import { action } from 'typesafe-actions';
import { Types, Player } from './types';

export const loadPlayers = () => action(Types.LOAD_PLAYERS);

export const loadPlayersSuccess = (data: Player[]) => action(Types.LOAD_PLAYERS_SUCCESS, data);

export const loadPlayersFailure = () => action(Types.LOAD_PLAYERS_FAILURE);