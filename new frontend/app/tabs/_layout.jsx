import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import DirectMessage from './directMessage';
import Homepage from './homepage';
import Profile from './profile';
import SharingPlace from './sharingPlace';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Homepage"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Homepage') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'SharingPlace') {
            iconName = focused ? 'share' : 'share-outline';
          }else if (route.name === 'DirectMessage') {
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } 

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Homepage" component={Homepage} />
      <Tab.Screen name="SharingPlace" component={SharingPlace} />
      <Tab.Screen name="DirectMessage" component={DirectMessage} />
      <Tab.Screen name="Profile" component={Profile} />
      
    </Tab.Navigator>
  );
};

export default Tabs;
