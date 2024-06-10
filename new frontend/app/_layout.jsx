import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './tabs/_layout'; // Adjust the path if necessary

const Stack = createNativeStackNavigator();

const MainLayout = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="tabs"
        component={Tabs}
        options={{ headerShown: false }}
      />
      {/* Add other screens or stacks here if needed */}
    </Stack.Navigator>
  );
};

export default MainLayout;
