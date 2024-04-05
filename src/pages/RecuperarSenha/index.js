
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

const RecuperarSenha = () => {
  const [email, setEmail] = useState('');

  const handleRecuperarSenha = () => {
    
    Alert.alert('E-mail de recuperação de senha enviado!');
  };

  return (
    <View>
      <Text>Informe seu e-mail para recuperar a senha:</Text>
      <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TouchableOpacity onPress={handleRecuperarSenha}>
        <Text>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RecuperarSenha;
