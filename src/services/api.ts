import axios from 'axios';

export enum Endpoints {
    player = '/player',
    league = '/league',
    divisionPlayers = '/league/divisionPlayers',
    divisionMatches = '/league/divisionMatches',
}

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export default api;