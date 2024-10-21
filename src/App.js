import { Provider as PaperProvider, Text, TextInput, Button } from 'react-native-paper';
import { ScrollView, StyleSheet, View } from 'react-native';

const estil = 'florida';
const isAdmin = false;

const nom = (estil, textAMostrar) => {
  return (
    <Text style={estil} variant='displayLarge'>{textAMostrar}</Text>
  );
}

const dades = (inputs) => {
  const estilPare = () => {
    return estil === 'florida' ? styles.florida : styles.upv;
  }
  
  const colorInput = () => {
    return estil === 'florida' ? 'white' : 'orange';
  }

  return (
    <View style={estilPare()}>
      {inputs.map((value, index) => (
        <TextInput
          key={index}
          label={value}
          placeholder={value}
          textColor={colorInput()}
        />
      ))}
    </View>
  )
}

const botoSiAdmin = () => {
  if(!isAdmin)
    return;
  
  return (
    <Button
      style={{borderRadius: 0}}
      icon='format-list-bulleted'
      textColor='white'
      buttonColor='blue'
    >
      INFORMES
    </Button>
  );
}

const App = () => {
  const inputs = ['Email', 'Nom'];
  const moduls2Dam = [
    { nom: 'DIN', professor: 'Manel', hores: 120 },
    { nom: 'ADA', professor: 'Roberto', hores: 120 },
    { nom: 'PMDM', professor: 'Paco', hores: 100 },
    { nom: 'PSP', professor: 'Roberto', hores: 60 },
    { nom: 'SGE', professor: 'Belén', hores: 100 },
    { nom: 'Anglés', professor: 'Caterina', hores: 40 },
    { nom: 'EIE', professor: 'Ana', hores: 60 },
    ];

  return (
    <PaperProvider>
      {nom(styles.text, "Hugo y Manu")}
      {dades(inputs)}
      {botoSiAdmin()}
      <ScrollView>
        {moduls2Dam.map((value, index) => {
          let colorFondo = index % 2 === 0 ? '#F48FB1' : '#F8BBD0';
          
          return (
            <View style={{backgroundColor: colorFondo}}>
              <Text>{index + 1}</Text>
              <Text>{value.nom}</Text>
              <Text>{value.professor}</Text>
              <Text>{value.hores} hores</Text>
            </View>
          );
        })}
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'blue',
    fontStyle: 'italic'
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

export default App;