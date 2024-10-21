import React from 'react';
import { Provider as PaperProvider, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';

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
      {nom('Hugo y Manu', styles.estilDeText)}
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  estilDeText: {
    color: 'blue',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default App;
