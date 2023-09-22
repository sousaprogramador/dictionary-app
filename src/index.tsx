import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './global/styles/theme';
import {NavigationContainer} from '@react-navigation/native';
import {AppRoutes} from './routes/app.routes';

const App = () => (
  <ThemeProvider theme={theme}>
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  </ThemeProvider>
);

export default App;
