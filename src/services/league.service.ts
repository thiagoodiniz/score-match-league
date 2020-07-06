import api, { Endpoints } from './api';

export const leagueService = {
    loadLeague: () =>{
        return api.get(Endpoints.league)
            .then(res => res.data);
    }
}