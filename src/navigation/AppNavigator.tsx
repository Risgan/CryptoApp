import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CryptoListScreen } from '../screens/CryptoListScreen';
import { CryptoDetailScreen } from '../screens/CryptoDetailScreen';
import { colors } from '../utils/Colors';  // Usa tus colores personalizados

const Stack = createNativeStackNavigator();

export const AppNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.primaryDark, // Fondo elegante
      },
      headerTintColor: colors.pureWhite, // Color de texto en el header
      headerTitleAlign: 'center', // Centrado del título
      headerTitleStyle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.goldAccent, // Dorado para resaltar la marca
        // textTransform: 'uppercase',
        // letterSpacing: 1.2,
      },
      animation: 'fade', // Transición suave
    }}
  >
    <Stack.Screen name="Home" component={CryptoListScreen} options={{ title: 'Crypto List' }} />
    <Stack.Screen name="Details" component={CryptoDetailScreen} options={{ title: 'Details' }} />
  </Stack.Navigator>
);
