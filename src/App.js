// App.js
import React from 'react';
import { Provider as PaperProvider, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import EntradaDEmail from './EntradaDEmail'; 
import EntradaDeTelèfon from './EntradaDeTelefono'; 

const nom = (textAMostrar, estil) => {
  return (
    <Text style={estil} variant='displayLarge'>
      {textAMostrar}
    </Text>
  );
};

const App = () => {
  return (
    <PaperProvider>
      <View style={styles.container}>
        {nom('Hugo y Manu', styles.estilDeText)}
        <EntradaDEmail nom="Correo electrónico" instrucciones="Introduce tu correo" />
        <EntradaDeTelèfon nom="Teléfono" instrucciones="Introduce tu teléfono" />
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  estilDeText: {
    color: 'blue',
    fontSize: 25,
    fontWeight: 'bold',
  },
  container: {
    padding: 20,
  },
});

export default App;
