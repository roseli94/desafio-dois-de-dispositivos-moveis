import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/pages/Home';
import Cadastro from './src/pages/Cadastro/index';
import { Image } from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Componente personalizado para o botão de imagem no cabeçalho
const CustomHeaderButton = ({ onPress, imageSource }) => {
  return (
    <Image
      source={imageSource}
      style={{ width: 30, height: 30, marginRight: 10 }}
    />
  );
};

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: 'Bem-vindo!',
          headerStyle: { backgroundColor: 'pink' },
        }}
      />
      <Tab.Screen
        name="Cadastro"
        component={Cadastro}
        options={{
          headerTitle: 'Cadastro',
          headerStyle: { backgroundColor: 'pink' },
        }}
      />
    </Tab.Navigator>
  );
}

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={({ navigation }) => ({
            headerTitle: () => (
              <CustomHeaderButton
                onPress={() => navigation.navigate('Cadastro')}
               
              />
            ),
            headerStyle: { backgroundColor: 'pink' },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}