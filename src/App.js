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
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

/** A la funció App, dins del return crearem la notra pantalla */
const App = () => {
  return (
    <View>
      <StatusBar/>
      <ScrollView>
        <View>
          <Text style={estils.titol}> Resultats Lliga 24-25 </Text>
          <Partit e1= 'Valencia cf' e2='Betis' r1={5} r2={5}> </Partit>
          <Partit> </Partit>
          <Partit> </Partit>
          <Partit> </Partit>
        </View>
      </ScrollView>
    </View>
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