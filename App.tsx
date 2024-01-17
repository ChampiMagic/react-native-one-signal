import React from 'react';
import {
	SafeAreaView,
	StyleSheet,
	Text,
} from 'react-native';
import { LogLevel, OneSignal } from 'react-native-onesignal';

OneSignal.Debug.setLogLevel(LogLevel.Verbose);
OneSignal.initialize("fe1d9978-87c4-4def-8dc1-2b85a5fba261");
OneSignal.Notifications.requestPermission(true);
OneSignal.Notifications.addEventListener('click', (event) => {
  console.log('OneSignal: notification clicked:', event);
});

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.MainCont}>
			<Text style={styles.MainTxt}>Hola Mundo!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  MainCont: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
	MainTxt: {
		color: '#fff',
    fontSize: 40,
	},
});

export default App;
