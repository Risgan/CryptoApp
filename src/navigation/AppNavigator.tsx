import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CryptoListScreen } from '../screens/CryptoListScreen';
import { CryptoDetailScreen } from '../screens/CryptoDetailScreen';
import { colors } from '../utils/Colors';  // Use your custom color palette

const Stack = createNativeStackNavigator();

/**
 * The main navigation stack for the app.
 * Includes navigation for the Crypto List and Crypto Detail screens.
 */
export const AppNavigator = () => (
    <Stack.Navigator
        initialRouteName="Home"  // Initial screen to display when the app loads
        screenOptions={{
            headerStyle: {
                backgroundColor: colors.primaryDark, // Elegant background for the header
            },
            headerTintColor: colors.pureWhite, // Text color in the header
            headerTitleAlign: 'center', // Center the title
            headerTitleStyle: {
                fontSize: 22,
                fontWeight: 'bold',
                color: colors.goldAccent, // Gold color to highlight the brand
                // textTransform: 'uppercase',  // Optionally uppercase the title
                // letterSpacing: 1.2,  // Optionally adjust letter spacing
            },
            animation: 'fade', // Smooth transition between screens
        }}
    >
        {/* Home screen displaying the list of cryptocurrencies */}
        <Stack.Screen name="Home" component={CryptoListScreen} options={{ title: 'Crypto List' }} />

        {/* Details screen displaying information about a specific cryptocurrency */}
        <Stack.Screen name="Details" component={CryptoDetailScreen} options={{ title: 'Details' }} />
    </Stack.Navigator>
);
