import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { theme } from './baseStyles/theme';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import GlobalStyle from './baseStyles/GlobalStyles';

import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <PersistGate fallback={null} persistor={persistor}>
          <App title="Phonebook" />
        </PersistGate>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
