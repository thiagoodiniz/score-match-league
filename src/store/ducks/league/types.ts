import { Player } from "../players/types";

/**
 * League Action Types
 */
export enum Types {
    LOAD_LEAGUE = 'league/LOAD_LEAGUE',
    LOAD_LEAGUE_SUCCESS = 'league/LOAD_LEAGUE_SUCCESS',
    LOAD_LEAGUE_FAILURE = 'league/LOAD_LEAGUE_FAILURE',

    ADD_DIVISION_PLAYERS = 'league/ADD_DIVISION_PLAYERS',

    SAVE_MATCH = 'league/SAVE_MATCH',
}

/**
 * League
 */
export interface League {
    id: number;
    name: string;
    status: number;
    register_date: Date;
    divisions: Division[];
}

export interface Division {
    leagueDivisionId: number;
    divisionDesc: string;
    players: DivisionPlayer[];
    divisionMatches: DivisionMatch[];
}

export interface DivisionMatch {
    id: number;
    leagueDivisionId: number;
    round: number;
    idPlayer1: number,
    idPlayer2: number,
    last_update_date: Date,
    scored_goals_player1?: any,
    scored_goals_player2?: any,
    status: number
}

export interface DivisionPlayer extends Player {
    idLeagueDivisionPlayer: number;
    stats?: PlayerStats;
}

export interface PlayerStats {
    completedMatches: number;
    points: number;
    wins: number;
    draws: number;
    loses: number;
    scoredGoals: number;
    concededGoals: number;
    goalDifference: number;
}

export interface LeagueState {
    readonly league?: League;
    readonly loading: boolean;
    readonly error: boolean;
}