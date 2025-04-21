import { registerRootComponent } from 'expo';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Router from './lap2/Router';

const App = () => (
  <SafeAreaProvider>
    <Router />
  </SafeAreaProvider>
);

registerRootComponent(App);
