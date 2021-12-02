import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Subscriptions from '../screens/Subscriptions';
import Explore from '../screens/Explore';
import Home from '../screens/Home';
import WatchLater from '../screens/WatchLater';
import Profile from '../screens/Profile';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../colors';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  const routeIconMap = {
    Subscriptions: 'subscriptions',
    Explore: 'explore',
    Home: 'home',
    'Watch Later': 'watch-later',
    Profile: 'person',
  };
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          const iconName = routeIconMap[route.name];
          const iconColor = focused ? colors.red : colors.redishBlack;

          return <MaterialIcons name={iconName} size={24} color={iconColor} />;
        },
      })}
    >
      <Tab.Screen name="Subscriptions" component={Subscriptions} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Watch Later" component={WatchLater} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
