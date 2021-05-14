import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import HomeView from './HomeView';
import Header from './Header'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <HomeView />
        <MapView
          style={{height: `50%`, width: `100%`}}
          provider={PROVIDER_GOOGLE}
          showUserLocation={true}
          initialRegion={{
          latitude: 45.50527180254351,
          longitude: -122.67506901733977,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421}}
        />
      <Text>Open up App.js to start working on your appdfpgdflgkj!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
