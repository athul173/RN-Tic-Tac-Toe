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
import { Provider, useSelector } from 'react-redux';
import { AppStackRoutes } from './src/Routes/Navigation';
import Play from './src/screens/Play';
import Splash from './src/screens/Splash';
import { RootState, store } from './src/store';

const Stack = createNativeStackNavigator<AppStackRoutes>();

const App = () => {
    const darkMode = useColorScheme();

    const Navigator = () => {
        const { welcome } = useSelector((state: RootState) => state.stack);

        return (
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
                {welcome ? (
                    <Stack.Screen name="Splash" component={Splash} />
                ) : (
                    <Stack.Screen name="Play" component={Play} />
                )}
            </Stack.Navigator>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle={darkMode ? 'dark-content' : 'light-content'} />
            <NavigationContainer>
                <Provider store={store}>
                    <Navigator />
                </Provider>
            </NavigationContainer>
        </SafeAreaView>
    );
};

export default App;
