import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'
Icon.loadFont();


import Calendar from '../pages/Calendar';
import Church from '../pages/Church';
import PrayerList from '../pages/PrayerList';
import Plans from '../pages/Plans';
import Warning from '../pages/Warning';

const App = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppRoutes: React.FC = () => (
  <Tab.Navigator initialRouteName="Calendar"
    tabBarOptions={{
      showLabel: false,
      activeTintColor: 'green',
      inactiveTintColor: 'gray',
      activeBackgroundColor: '#C4C4C4'
    }}
  >
    <Tab.Screen
      name="Igreja"
      component={Church}
      options={{ tabBarIcon: ({ focused, color }) => {
        // You can return any component that you like here!
        return <Icon name='home' size={36} color={color} />;
        },
      }}
    />
    <Tab.Screen
      name="Lista de Oração"
      component={PrayerList}
      options={{ tabBarIcon: ({ focused, color }) => {
        // You can return any component that you like here!
        return <Icon name='list' size={36} color={color} />;
        },
      }}
    />
    <Tab.Screen
      name="Calendar"
      component={Calendar}
      options={{ tabBarIcon: ({ focused, color }) => {
        // You can return any component that you like here!
        return <Icon name='today' size={36} color={color} />;
        },
      }}
    />
    <Tab.Screen
      name="Avisos"
      component={Warning}
      options={{ tabBarIcon: ({ focused, color }) => {
        // You can return any component that you like here!
        return <Icon name='feedback' size={36} color={color} />;
        },
      }}
    />
    <Tab.Screen
      name="Planos"
      component={Plans}
      options={{ tabBarIcon: ({ focused, color }) => {
        // You can return any component that you like here!
        return <Icon name='book' size={36} color={color} />;
        },
      }}
    />
  </Tab.Navigator>
);

export default AppRoutes;
