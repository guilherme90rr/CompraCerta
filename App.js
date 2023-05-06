import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Cesta from '../CompraCerta/src/telas/Cesta/Components/index';

export default function App() {

  const [fontCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular, 
    "MontserratBold" : Montserrat_700Bold,
  });

  if (!fontCarregada) {
    return(
      <View/>
    )
  }

  return (
    <View>
      <StatusBar />
      <Cesta/>
    </View>
  );
}

