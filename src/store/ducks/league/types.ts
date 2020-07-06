import { Player } from "../players/types";

/**
 * League Action Types
 */
export enum Types {
    LOAD_LEAGUE = 'league/LOAD_LEAGUE',
    LOAD_LEAGUE_SUCCESS = 'league/LOAD_LEAGUE_SUCCESS',
    LOAD_LEAGUE_FAILURE = 'league/LOAD_LEAGUE_FAILURE',
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
    idLeagueDivision: number;
    division: string;
    players: DivisionPlayer[];
}

export interface DivisionPlayer extends Player {
    idLeagueDivisionPlayer: number;
    stats: PlayerStats;
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