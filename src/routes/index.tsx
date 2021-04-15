import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons'
Icon.loadFont();

import Calendar from '../pages/Calendar';
import Church from '../pages/Church';
import PrayerList from '../pages/PrayerList';
import Login from '../pages/Login';
import Warning from '../pages/Warning';
import Liturgy from '../pages/Liturgy';
import Pastoral from '../pages/Pastoral';
import Profile from '../pages/Profile';

const Stack = createStackNavigator();

const App: React.FC = () => {
	return (
		<Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Church" component={Church}/>
			<Stack.Screen name="Liturgy" component={Liturgy} />
      <Stack.Screen name="Pastoral" component={Pastoral} />
		</Stack.Navigator>
	);
}


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
      component={App}
      options={{
        tabBarIcon: ({ focused, color }) => {
          return <Icon name='home' size={36} color={color} />;
        },
      }}
    />
    <Tab.Screen
      name="PrayerList"
      component={PrayerList}
      options={{
        tabBarIcon: ({ focused, color }) => {
          return <Icon name='list' size={36} color={color} />;
        },
      }}
    />
    <Tab.Screen
      name="Calendar"
      component={Calendar}
      options={{
        tabBarIcon: ({ focused, color }) => {
          return <Icon name='today' size={36} color={color} />;
        },
      }}
    />
    <Tab.Screen
      name="Avisos"
      component={Warning}
      options={{
        tabBarIcon: ({ focused, color }) => {
          return <Icon name='feedback' size={36} color={color} />;
        },
      }}
    />
    <Tab.Screen
      name="Login"
      component={Login}
      options={{
        title: 'Login',
        tabBarIcon: ({ focused, color }) => {
          return <Icon name='person' size={36} color={color} />;
        },
      }}
    />
  </Tab.Navigator>
);

export default AppRoutes;
