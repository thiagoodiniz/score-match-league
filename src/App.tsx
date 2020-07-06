import React from 'react';
import PlayerList from './components/PlayerList/PlayerList';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        <PlayerList />
      </div>
    </Provider>
  );
}

export default App;
