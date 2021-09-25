import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  StyleSheet,
} from 'react-native';
import Main from './src/Main';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { DEEP_BLUE, PRIMARY_COLOR, SECONDARY_COLOR } from './src/constants';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'red',
  },
  linearGradient: {
    flex: 1,
    padding: wp(10),
    justifyContent: 'center',
  },
});

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={styles.root}>
      <LinearGradient
        colors={[PRIMARY_COLOR, SECONDARY_COLOR, DEEP_BLUE]}
        style={styles.linearGradient}
      >
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Main />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default App;
