import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import firebase from 'firebase';


const config = {
  apiKey: 'AIzaSyAp5sSdF2WZjOPMN714lDBJIvmirOscli0',
  authDomain: 'tlex-app-933fb.firebaseapp.com',
  databaseURL: 'https://tlex-app-933fb.firebaseio.com',
  projectId: 'tlex-app-933fb',
  storageBucket: 'tlex-app-933fb.appspot.com',
  messagingSenderId: '908534966941',
  appId: '1:908534966941:web:5347b5c820ef039a840274',
  measurementId: 'G-D6XRF5GB2Q',
};
firebase.initializeApp(config);



export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
