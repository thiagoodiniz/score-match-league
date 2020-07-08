import { LeagueState } from "./types";
import { Reducer } from "redux";
import { Types } from './types';

const INITIAL_STATE: LeagueState = {
    league: undefined,
    loading: false,
    error: false,
}

const reducer: Reducer<LeagueState> = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case Types.LOAD_LEAGUE:
            return { ...state, loading: true, error: false};
        
        case Types.LOAD_LEAGUE_SUCCESS:
            return { ...state, loading: false, error: false, league: action.payload.league };

        case Types.LOAD_LEAGUE_FAILURE:
            return { ...state, loading: false, error: true, league: undefined };

        default: 
            return state;
    }
}

export default reducer;