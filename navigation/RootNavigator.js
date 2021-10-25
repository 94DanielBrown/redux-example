import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import screens
import Movies from '../screens/Movies';
import Favorites from '../screens/Favorites';

const TabNavigator = createBottomTabNavigator();
const tabBarOptions = {
  showLabel: false,
  activeTintColor: '#9381ff',
  style: {
    height: '10%'
  },
};

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator.Navigator screenOptions={tabBarOptions}>
        <TabNavigator.Screen
          name="Movies"
          component={Movies}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="movie-filter" color={color} size={size} />
            ),
            headerShown: false
          }}
        />
        <TabNavigator.Screen
          name="Favorites"
          component={Favorites}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="favorite" color={color} size={size} />
            ),
            headerShown: false
          }}
        />
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;