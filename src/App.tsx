import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from '~navigation/AppNavigation';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};

export default App;
