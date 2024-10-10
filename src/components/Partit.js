import React from 'react';
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    ViewBase,
    Image,
} from 'react-native';


const partit = (props) => {
    return(
        <View style={estils.tarjeta}>
             <Image source ={require('../assets/images.png')}></Image>
            <Text style={estils.textosEquips}> {props.e1} - {props.e2} </Text>
            <Text style={estils.resultats}>    {props.r1} - {props.r2} </Text>
        </View>
        
    )
};
const estils = StyleSheet.create({
    textosEquips: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    resultats: {
        fontSize: 24,
        color: 'red'
    },
    tarjeta: {
            backgroundColor: '#BEEE62',
            borderWidth: 3,
            borderColor: 'black',
            borderRadius: 10,
            padding:5,
            margin: 5
    }
});
export default partit;