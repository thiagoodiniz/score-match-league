import { Types, PlayersState } from "./types";
import { Reducer } from "redux";

const INITIAL_STATE: PlayersState = {
    data: [],
    error: false,
    loading: false,
}

const reducer: Reducer<PlayersState> = (state=INITIAL_STATE, action) =>{
    switch(action.type) {
        case Types.LOAD_PLAYERS:
            return { ...state, loading: true };
        
        case Types.LOAD_PLAYERS_SUCCESS:
            return {
                ...state, loading: false, error: false, data: action.payload
            };
        
        case Types.LOAD_PLAYERS_FAILURE:
            return{
                ...state, loading: false, error: true, data: []
            };

        default:
            return state;
    }
}

export default reducer;