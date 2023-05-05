import React from 'react';
import { StatusBar, SafeArray , Text, View } from 'react-native';

import Cesta from './src/telas/Cesta';

export default function App() {
  return (
    <View>
      <Cesta/>
      <StatusBar/>
    </View>
  );
}


