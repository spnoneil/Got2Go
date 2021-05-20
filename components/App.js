// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header'
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import firebase from 'firebase';
import { firebaseConfig } from './firebase.js';
import AuthNav from './auth/AuthNav';
import HomeView from './HomeView.js';

firebase.initializeApp(firebaseConfig);

export default App(
  createSwitchNavigator(
    {
      Auth: AuthNav,
      App: HomeView,
    },
    {
      initialRouteName: 'Auth'
    }
  )
);

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Header />
//       <HomeView />
//         <MapView
//           style={{height: `50%`, width: `100%`}}
//           provider={PROVIDER_GOOGLE}
//           showsUserLocation={true}
//           initialRegion={{
//           latitude: 45.50527180254351,
//           longitude: -122.67506901733977,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421}}
//         />
//       <Text>Open up App.js to start working on your lifeasdfsd!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#5FB7EE',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
