import React, { useState } from 'react';
import { TextInput, HelperText, View } from 'react-native-paper';

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
        right={<TextInput.Icon icon={valido ? "check" : "close"} color={valido ? "green" : "red"} />}
        underlineColor={!valido ? "red" : "green"}
        activeUnderlineColor={!valido ? "red" : "green"}
        error={!valido}
      />
      <HelperText type="error" visible={!valido}>
        {valido ? '' : 'L\'email no es válido'}
      </HelperText>
    </View>
  );
};

export default EntradaDEmail;
