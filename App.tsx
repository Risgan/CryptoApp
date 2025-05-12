import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './src/navigation/AppNavigator';

/**
 * Main entry point of the application.
 *
 * This component wraps the application's navigation system inside
 * a NavigationContainer to provide navigation functionality across
 * the app's screens. It uses AppNavigator to manage different screens.
 */
function App() {
    return (
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    );
}

export default App;
