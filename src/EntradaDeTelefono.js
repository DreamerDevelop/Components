import React, { useState } from 'react';
import { TextInput, HelperText, View } from 'react-native-paper';

const EntradaDeTelefono = ({ nom, instrucciones }) => {
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
          setTelefono(text);
          validarTelefono(text);
        }}
        keyboardType="phone-pad" 
        right={<TextInput.Icon icon={valido ? "check" : "close"} color={valido ? "green" : "red"} />}
        underlineColor={!valido ? "red" : "green"}
        activeUnderlineColor={!valido ? "red" : "green"}
        error={!valido}
      />
      <HelperText type="error" visible={!valido}>
        {valido ? '' : 'El teléfono no es válido'}
      </HelperText>
    </View>
  );
};

export default EntradaDeTelefono;
