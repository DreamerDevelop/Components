import React, { useState } from 'react';
import { PaperProvider, Text, TextInput } from 'react-native-paper';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';

const estils = StyleSheet.create({
  titol: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  upv: {
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
//ej9
const App = () => {
  const [estilo, setEstilo] = useState(estils.florida);

  const nom = (textAMostrar, estilos) => {
    return <Text style={estilos}>{textAMostrar}</Text>;
  };

  const dades = (arrdatos, estilo) => {
    const textColor = estilo === estils.florida ? 'white' : 'orange';

    return (
      <View style={estilo}>
        {arrdatos.map((value, index) => (
          <TextInput
            key={index}
            style={{ color: textColor }}
            placeholderTextColor={textColor}
            label={value}
          />
        ))}
      </View>
    );
  };

  const datos = ['Email', 'Nom'];

  return (
    <PaperProvider>
      {nom('Hugo', estils.titol)}
      {dades(datos, estilo)} 
    </PaperProvider>
  );
};

export default App;
