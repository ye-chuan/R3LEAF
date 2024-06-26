import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './tabs/_layout'; // Adjust the path if necessary
import PostWithComments from './utils/PostWithComments'; // Adjust the path if necessary
import Login from './auth/Login'; // Adjust the path if necessary
import SearchItem from './utils/SearchItem'; // Adjust the path if necessary
import ImagePickerComponent from './utils/ImagePickerComponent'; // Adjust the path if necessary

const Stack = createNativeStackNavigator();

const MainLayout = () => {
  return (
    <Stack.Navigator initialRouteName="auth">
      <Stack.Screen
        name="auth"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="tabs"
        component={Tabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="utils/PostWithComments"
        component={PostWithComments}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="utils/SearchItem"
        component={SearchItem}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="utils/ImagePickerComponent" 
        component={ImagePickerComponent} 
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
};

export default MainLayout;
