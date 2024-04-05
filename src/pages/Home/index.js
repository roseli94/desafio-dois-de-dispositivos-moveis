import React from "react";
import { View, Text, ImageBackground, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";

function Home({ navigation }) {
  const handleLogin = () => {
    Alert.alert('Faça seu login');
  };

  const handleForgotPassword = () => {
    Alert.alert('Link de recuperação de senha enviado para o seu e-mail.');
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('../../../src/img/astronauta_rosa.jpeg')} 
        style={{  width: 410, height: 900 }} 
        resizeMode="cover" y
      >
        <View style={styles.container}>
          <Text style={styles.title}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  title: {
    fontSize: 40,
    marginBottom: 20,
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
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#fc0fc0',
    marginTop: 10,
  },
});

export default Home;
