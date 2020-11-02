import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Calendar from '../pages/Calendar';
import Liturgy from '../pages/Church';
import PrayerList from '../pages/PrayerList';
import Plans from '../pages/Plans';
import Warning from '../pages/Warning';

const App = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppRoutes: React.FC = () => (
  <Tab.Navigator initialRouteName="Liturgy"
    screenOptions={({ route }) => ({
      // tabBarIcon: ({ focused, color, size }) => {
      //   let iconName;

      //   if (route.name === 'Calendar') {
      //     iconName = focused
      //      ? 'ios-information-circle'
      //       : 'ios-information-circle-outline';
      //   } else if (route.name === 'Settings') {
      //     iconName = focused ? 'ios-list-box' : 'ios-list';
      //   }

      //   // You can return any component that you like here!
      //   return <Icon name="home" size={18} color="#999" />
      // },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen
      name="Liturgy"
      component={Liturgy}
      options={{ title: 'Liturgia' }}
    />
    <Tab.Screen
      name="Lista de Oração"
      component={PrayerList}
      options={{ title: 'Lista de Oração' }}
    />
    <Tab.Screen
      name="Calendar"
      component={Calendar}
      options={{ title: 'Agenda' }}
    />
    <Tab.Screen
      name="Avisos"
      component={Warning}
      options={{ title: 'Avisos' }}

    />
    <Tab.Screen
      name="Planos"
      component={Plans}
      options={{ title: 'Planos' }}
    />
  </Tab.Navigator>
);

export default AppRoutes;
