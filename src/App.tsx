import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import '../global.css';

// Import screens
import HomeScreen from './screens/HomeScreen';
import DogProfileScreen from './screens/DogProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import PairingScreen from './screens/PairingScreen';
import ProximitySettingsScreen from './screens/ProximitySettingsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ title: 'ProxiPup' }}
          />
          <Stack.Screen 
            name="DogProfile" 
            component={DogProfileScreen} 
            options={{ title: 'Dog Profile' }}
          />
          <Stack.Screen 
            name="Settings" 
            component={SettingsScreen} 
            options={{ title: 'Settings' }}
          />
          <Stack.Screen 
            name="Pairing" 
            component={PairingScreen} 
            options={{ title: 'Pair Collar' }}
          />
          <Stack.Screen 
            name="ProximitySettings" 
            component={ProximitySettingsScreen} 
            options={{ title: 'Proximity Settings' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
} 