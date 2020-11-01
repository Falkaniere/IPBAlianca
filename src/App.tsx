import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#fff"  />
    <View style={{ flex: 1, backgroundColor: '#fff' }} />
    <Routes />
  </NavigationContainer>
)

export default App;
