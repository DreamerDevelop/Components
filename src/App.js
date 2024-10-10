/**
 * Exemple d'una App amb  React Native
 *
 * @author Manel Viel
 * @version 1.0  [octubre 2024]
 * @summary Aquest model el podeu utilitzar en els vostres projectes de DIN
 */

/** IMPORTEM les llibreries necessàries */
import React from 'react';
import Partit from './components/Partit'
import { PaperProvider,Text } from 'react-native-paper';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  
  View,
} from 'react-native'; 
const nom = (textAMostrar) =>{
  <Text>{textAMostrar}</Text>
}
/** A la funció App, dins del return crearem la notra pantalla */
const App = () => {
  return (
    <PaperProvider>
        {nom('Hugo')}
    </PaperProvider>
  );
}

/** En aquesta secció, crearem els estils a aplicar als nostres components */
const estils = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  titol: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  descripcio: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});

export default App;