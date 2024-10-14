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
import { PaperProvider,Text,TextInput } from 'react-native-paper';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  
  View,
} from 'react-native';  
const nom = (textAMostrar,estilos) =>{
  <Text style={estilos}>{textAMostrar}</Text>
}
const dades = (arrdatos) => (
  arrdatos.map((values)=>
    (<TextInput label={values}></TextInput>)
));
const datos = ['Email','Nom'];
/** A la funció App, dins del return crearem la notra pantalla */
const App = () => {
  return (
    <PaperProvider>
         {nom('Hugo', estils.titol)}
         {dades(datos)}
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
  upv:{
    backgroundColor: 'purple',
    fontSize: 10,
    fontWeight: '600',
    padding: 4,
    paddingLeft: 12,
    textAlign: 'left',
    color: 'grey',
    },
    florida: {
    backgroundColor: 'red',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
    },
});

export default App;