import React from 'react';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
} from '@expo-google-fonts/roboto';

import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import { StatusBar } from 'react-native';
import { Home } from './src/screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_500Medium });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.background_dark}
        translucent
      />
      <Home />
    </ThemeProvider>
  );
}
