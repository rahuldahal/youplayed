import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Subscriptions from '../screens/Subscriptions';
import Explore from '../screens/Explore';
import Home from '../screens/Home';
import WatchLater from '../screens/WatchLater';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Subscriptions" component={Subscriptions} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Watch Later" component={WatchLater} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
