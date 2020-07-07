import React, { useState } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import Theme from './styles/theme';
import GlobalStyle from './styles/globalStyle';
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/Home';

const App = () => {
  const [theme] = useState<DefaultTheme>(Theme);

  return (
    <ThemeProvider theme={ theme }>
      <Provider store={ store }>
        <GlobalStyle />
         
          <Home />

      </Provider>
    </ThemeProvider>
  );
}

export default App;
