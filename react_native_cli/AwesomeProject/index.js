/**
 * @format
 */

//import {AppRegistry} from 'react-native';
import FlexDirectionBasics from './App';
import {name as appName} from './app.json';
import React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

const HelloWorld = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.hello}>Hello, World</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent(
  appName,
  () => FlexDirectionBasics,
);
/*AppRegistry.registerComponent(appName, () => App);*/
