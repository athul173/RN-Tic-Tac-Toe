/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { Provider } from 'react-redux';
import Play from './src/screens/Play';
import { store } from './src/store/store';

const App = () => {
    const darkMode = useColorScheme();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle={darkMode ? 'dark-content' : 'light-content'} />
            <Provider store={store}>
                <Play />
            </Provider>
        </SafeAreaView>
    );
};

export default App;
