import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ImageBackground } from 'react-native';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = () => {
    if (nome.trim() === '' || email.trim() === '' || senha.trim() === '') {
      Alert.alert('Por favor, preencha todos os campos.');
    } else {
      Alert.alert('Usuário cadastrado com sucesso!');
      // Aqui você pode enviar os dados para o servidor ou realizar outras operações de cadastro.
    }
  };

  return (
    <ImageBackground
      source={require('../../../src/img/astronauta_terra.jpeg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Cadastro de Usuário</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={(text) => setSenha(text)}
        />
        <TouchableOpacity onPress={handleCadastro} style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#ff69b4',
  },
  input: {
    borderWidth: 1,
    borderColor: 'pink',
    borderRadius: 5,
    padding: 10,
    width: 300,
    marginBottom: 15,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: 'pink',
    padding: 12,
    borderRadius: 5,
    width: 300,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Cadastro;
