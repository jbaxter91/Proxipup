import React from 'react';
import { View, Text, TouchableOpacity, Image, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

type RootStackParamList = {
  Home: undefined;
  DogProfile: { dogId?: string };
  Pairing: undefined;
  ProximitySettings: undefined;
  Settings: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

// Mock data for testing
const dogs = [
  { id: '1', name: 'Max', batteryLevel: 95, connected: true },
  { id: '2', name: 'Bella', batteryLevel: 78, connected: true },
];

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  const renderDogCard = (dog: typeof dogs[0]) => (
    <TouchableOpacity 
      key={dog.id}
      className="bg-gray-100 p-4 rounded-lg mb-4 flex-row items-center justify-between"
      onPress={() => navigation.navigate('DogProfile', { dogId: dog.id })}
    >
      <View className="flex-row items-center">
        <View className="w-12 h-12 bg-orange-200 rounded-full justify-center items-center mr-4">
          <Icon name="pets" size={24} color="#9E9E9E" />
        </View>
        <View>
          <Text className="text-xl font-bold">{dog.name}</Text>
          <View className="flex-row items-center">
            <Icon 
              name={dog.connected ? "battery-full" : "battery-alert"} 
              size={16} 
              color={dog.connected ? "#4CAF50" : "#F44336"} 
            />
            <Text className="ml-2 text-gray-600">{dog.batteryLevel}%</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-white p-4">
      <View className="flex-row justify-between items-center mb-6">
        <Text className="text-2xl font-bold">MY DOGS</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Icon name="person" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {dogs.map(renderDogCard)}

      <View className="bg-gray-100 p-4 rounded-lg mb-4">
        <View className="flex-row items-center justify-between">
          <Text className="text-lg font-medium">Enable Proximity Mode</Text>
          <Switch value={true} onValueChange={() => {}} />
        </View>
      </View>

      <TouchableOpacity 
        className="bg-gray-100 p-4 rounded-lg mb-4"
      >
        <Text className="text-lg font-medium">Active Alerts</Text>
      </TouchableOpacity>

      <View className="flex-1" />
      
      <View className="flex-row justify-between items-center py-4">
        <TouchableOpacity>
          <Icon name="pause-circle-outline" size={32} color="#64748B" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="add-circle-outline" size={32} color="#64748B" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="person-outline" size={32} color="#64748B" />
        </TouchableOpacity>
      </View>
    </View>
  );
} 