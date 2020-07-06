export enum Types {
    LOAD_PLAYERS = 'players/LOAD_PLAYERS',
    LOAD_PLAYERS_SUCCESS = 'players/LOAD_PLAYERS_SUCCESS',
    LOAD_PLAYERS_FAILURE = 'players/LOAD_PLAYERS_FAILURE',
}

export interface Player {
    id: number;
    name: string;
    uf: string;
}

export interface PlayersState {
   readonly data: Player[];
   readonly loading: boolean;
   readonly error: boolean;
}