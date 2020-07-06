import api, { Endpoints } from './api';

export const playerService = {
    loadPlayers: () =>{
        return api.get(Endpoints.player)
            .then(res => res.data)
    }
}