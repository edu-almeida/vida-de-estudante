import React from 'react';
import {Entypo, Foundation} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from '../screens/Home';
import { useTheme } from 'styled-components';
import { Platform } from 'react-native';
import { ButtonNewTransaction } from '../components/ButtonNewTransaction';
import { Register } from '../screens/Register';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.income,
          tabBarInactiveTintColor: theme.colors.subtitle,
          tabBarLabelPosition: 'below-icon',
          tabBarStyle: {
            height: 54,
            backgroundColor: theme.colors.background_dark,
            borderTopColor: 'transparent',
            paddingVertical: Platform.OS === 'ios' ? 20 : 0,
            paddingBottom: 15,
          },
        }}
      >
        <Screen name="Home" component={Home} options={{
          
          tabBarIcon: ({size, color}) => (
            <Entypo name="home" size={size} color={color}/>
          ),
        }} />
        <Screen name="Nova Transação" component={Register}  options={{
          tabBarLabel:'',
          tabBarIcon: ({focused, size, color}) => (
            <ButtonNewTransaction size={size} color={color} isFocused={focused}/>
          ),
        }}/>
        <Screen name="Relatório" component={Home}  options={{
          tabBarIcon: ({size, color}) => (
            <Foundation name="graph-bar" size={size} color={color}/>
          ),
        }}/>
      </Navigator>
    </NavigationContainer>
  );
}
