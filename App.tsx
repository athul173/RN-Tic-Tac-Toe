/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { Provider } from 'react-redux';
import { AppStackRoutes } from './src/Routes/Navigation';
import Play from './src/screens/Play';
import Splash from './src/screens/Splash';
import { store } from './src/store/store';

const Stack = createNativeStackNavigator<AppStackRoutes>();

const App = () => {
    const darkMode = useColorScheme();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle={darkMode ? 'dark-content' : 'light-content'} />
            <NavigationContainer>
                <Provider store={store}>
                    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
                        <Stack.Screen name="Splash" component={Splash} />
                        <Stack.Screen name="Play" component={Play} />
                    </Stack.Navigator>
                </Provider>
            </NavigationContainer>
        </SafeAreaView>
    );
};

export default App;
