import { registerRootComponent } from 'expo';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Calculator from './lap1_p2/calulator';

const App = () => (
  <SafeAreaProvider>
    <Calculator />
  </SafeAreaProvider>
);

registerRootComponent(App);
