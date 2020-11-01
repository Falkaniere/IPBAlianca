import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Calendar from '../pages/Calendar';
import Liturgy from '../pages/Liturgy';
import PrayerList from '../pages/PrayerList';
import Preaching from '../pages/Preaching';
import Warning from '../pages/Warning';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    initialRouteName="Calendar"
    // screenOptions={{
    //   headerShown: false,
    //   cardStyle: { backgroundColor: '#312e38' }
    // }}
  >
    <App.Screen name="Calendar" component={Calendar} />
    <App.Screen name="Liturgy" component={Liturgy} />
    <App.Screen name="PrayerList" component={PrayerList} />
    <App.Screen name="Preaching" component={Preaching} />
    <App.Screen name="Warning" component={Warning} />
  </App.Navigator>
);

export default AppRoutes;
