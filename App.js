import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

import Inicial from './Screens/Inicial';

// const Stack = createNativeStackNavigator()

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FB8929',
    accent: '#1B5400',
    background: '#FDE6DB',
    text: '#1A1C1E',
  },
  fontWeight: {
    bold: 'bold',
    regular: 'regular'
  },
  fontSizes: {
    normal: 14,
    large: 32,
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Inicial/>
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Inicial" component={Inicial} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer> */}
    </PaperProvider>
  );
}
