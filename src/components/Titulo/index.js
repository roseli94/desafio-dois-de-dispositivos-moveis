import React from "react";
import {Text, StyleSheet} from "react-native";

function Titulo(props){
    return(
        <Text style={style.titulo} >{props.titulo}</Text>
    );
}
const style = StyleSheet.create({
     titulo: {
        
color:'pink',
fontSize: 60
}

});

export default Titulo;
