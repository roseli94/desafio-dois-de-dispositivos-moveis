import React from "react";
import { TouchableHighlight, StyleSheet, View, Text, Alert } from "react-native";

const SuperBotao = (props) => {
    return(
        <TouchableHighlight 
        style={style.SuperBotao}
           onPress={()=> Alert.alert("Faça seu Login!!")}
           >

            <View style = {style.botao}>
                <Text style={style.valor}>{props.valor}</Text>
            </View>
        </TouchableHighlight>
    );
}

const style = StyleSheet.create({
    SuperBotao:{

    },

    botao: {
        alignItems:'center',
        backgroundColor: 'pink',
        padding:14,
        width:300,
    },
valor:{
    fontSize:25,
    color:"#fff",
    fontWeight:'bold',

}
});

export default SuperBotao;
