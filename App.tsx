/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import { SafeAreaView, StatusBar, useColorScheme } from "react-native";
import Play from "./src/screens/Play";
import { useStyles } from "./src/style/styles";

const App = () => {
  const styles = useStyles();

  const darkMode = useColorScheme();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={darkMode ? "dark-content" : "light-content"} />
      <Play />
    </SafeAreaView>
  );
};

export default App;
