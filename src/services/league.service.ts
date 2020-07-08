import api, { Endpoints } from './api';
import { DivisionMatch } from '../store/ducks/league/types';

export const leagueService = {
    loadLeague: () => {
        return api.get(Endpoints.league)
            .then(res => res.data);
    },

    saveMatch: (match: DivisionMatch) => {
        const matchesPayload = {
            matches: [
                {
                    idLeagueDivisionMatch: match.id,
                    player1: {
                        scoredGoals: match.scored_goals_player1,
                    },
                    player2: {
                        scoredGoals: match.scored_goals_player2,
                    }
                }
            ]
        }

        
        return api.put(Endpoints.divisionMatches, matchesPayload)
            .then(res => res.data)
    }
}