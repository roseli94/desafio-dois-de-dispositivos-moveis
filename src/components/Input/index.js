import React from "react";
import {StyleSheet,SafeAreaView,Text, TextInput} from "react-native";

function MeuInput(props){
    return(
        <SafeAreaView>
       <Text>
        E-mail
       </Text>
       
        <TextInput style ={style.input}
            placeholder={props.placeholder}>

        </TextInput>
        </SafeAreaView>
    );
}
const style = StyleSheet.create({
    input:{
        borderWidth:1,
        height:42,
        marginBottom:15,
        marginTop:3,
        padding:12,
        width:300
    }
})
export default MeuInput;
