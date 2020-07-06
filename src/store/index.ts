import { createStore, applyMiddleware, Store } from 'redux';
import reducers from './ducks/rootReducer';
import sagas from './ducks/rootSaga';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import { PlayersState } from './ducks/players/types';


export interface ApplicationState {
    players: PlayersState
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(reducers, applyMiddleware( sagaMiddleware, logger ));

sagaMiddleware.run(sagas);

export default store;