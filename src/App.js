import React, { useState } from 'react';
import { Provider as PaperProvider, Text, TextInput, HelperText } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

const nom = (textAMostrar, estil) => {
  return (
    <Text style={estil} variant='displayLarge'>
      {textAMostrar}
    </Text>
  );
};

const EntradaDEmail = ({ nom, instrucciones }) => {
  const [email, setEmail] = useState('');
  const [valido, setEsvalido] = useState(false);

  const validarEmail = (email) => {
    const emailRegex = /^[a-zA-Z]+\@[a-zA-Z\_\-0-9]+\.[a-z]{2,5}$/;

    setEsvalido(emailRegex.test(email));
  };

  return (
    <View>
      <TextInput
        label={nom}
        placeholder={instrucciones}
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          validarEmail(text);
        }}
        keyboardType="email-address"
        right={<TextInput.Icon name={valido ? "check" : "close"} color={valido ? "green" : "red"} />}
        underlineColor={!valido ? "red" : "green"}
        activeUnderlineColor={!valido ? "red" : "green"}
        error={!valido}
      />
      <HelperText type="error" visible={!valido}>
        {valido ? '' : 'L\'email no és vàlid'}
      </HelperText>
    </View>
  );
};

const App = () => {
  return (
    <PaperProvider>
      <View style={styles.container}>
        {nom('Hugo y Manu', styles.estilDeText)}
        <EntradaDEmail nom="Correu electrònic" instrucciones="Introdueix el teu correu" />
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
