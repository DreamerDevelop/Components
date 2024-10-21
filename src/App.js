import React, { useState } from 'react';
import { Provider as PaperProvider, Text, TextInput, HelperText } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
//ej4
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
        right={<TextInput.Icon icon={valido ? "check" : ""} color={valido ? "green" : ""} />}
        underlineColor={!valido ? "red" : "green"}
        activeUnderlineColor={!valido ? "red" : "green"}
        error={!valido}
      />
      <HelperText type="error" visible={!valido}>
        {valido ? '' : 'L\'email no es valid'}
      </HelperText>
    </View>
  );
};


const EntradaDeTelèfon = ({ nom, instrucciones }) => {
  const [telefono, setTelefono] = useState('');
  const [valido, setEsvalido] = useState(false);

  const validarTelefono = (telefono) => {
    const telefonoRegex = /^(?:\+\d{2} \d{9}|\d{9})$/; 
    setEsvalido(telefonoRegex.test(telefono));
  };

  return (
    <View>
      <TextInput
        label={nom}
        placeholder={instrucciones}
        value={telefono}
        onChangeText={(text) => {
          if (valido) return; 
          setTelefono(text);
          validarTelefono(text);
        }}
        keyboardType="phone-pad" 
        right={<TextInput.Icon icon={valido ? "check" : ""} color={valido ? "green" : ""} />}
        underlineColor={!valido ? "red" : "green"}
        activeUnderlineColor={!valido ? "red" : "green"}
        error={!valido}
        editable={!valido} 
      />
      <HelperText type="error" visible={!valido}>
        {valido ? '' : 'El telefono no es valido'}
      </HelperText>
    </View>
  );
};

const App = () => {
  return (
    <PaperProvider>
      <View style={styles.container}>
        {nom('Hugo y Manu', styles.estilDeText)}
        <EntradaDEmail nom="Correo electronico" instruccions="Introduce  tu correo" />
        <EntradaDeTelèfon nom="Telefono" instruccions="Introduce tu telefono" />
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
