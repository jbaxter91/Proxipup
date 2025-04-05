import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Slider from '@react-native-community/slider';

type RootStackParamList = {
  Home: undefined;
  DogProfile: { dogId: string };
  Pairing: undefined;
  ProximitySettings: undefined;
  Settings: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type DogProfileRouteProp = RouteProp<RootStackParamList, 'DogProfile'>;

// Mock data for testing
const mockDog = {
  id: '1',
  name: 'MAX',
  batteryLevel: 95,
  proximityMode: true,
  avoidDog: 'Bella',
  warningBeep: 2,
  lightShock: 1,
  strongShock: 0.5,
};

export default function DogProfileScreen() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<DogProfileRouteProp>();
  const [proximityMode, setProximityMode] = useState(mockDog.proximityMode);

  return (
    <View className="flex-1 bg-white">
      <View className="bg-blue-200 p-4 pb-16 rounded-b-3xl">
        <TouchableOpacity 
          className="mb-4" 
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        
        <View className="items-center">
          <View className="w-24 h-24 bg-orange-200 rounded-full justify-center items-center mb-4">
            <Icon name="pets" size={48} color="#9E9E9E" />
          </View>
          <Text className="text-3xl font-bold">{mockDog.name}</Text>
        </View>
      </View>

      <View className="p-4">
        <Text className="text-xl font-bold mb-4">STATUS</Text>
        <View className="bg-gray-100 p-4 rounded-lg mb-6">
          <View className="flex-row items-center justify-between">
            <Text className="text-base">Battery: {mockDog.batteryLevel}%</Text>
            <Switch value={true} onValueChange={() => {}} />
          </View>
        </View>

        <Text className="text-xl font-bold mb-4">PROXIMITY SETTINGS</Text>
        <View className="bg-gray-100 p-4 rounded-lg">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-base mb-2">Proximity Mode</Text>
            <Switch 
              value={proximityMode} 
              onValueChange={setProximityMode}
            />
          </View>

          <View className="mb-4">
            <Text className="text-base mb-2">Avoid proximity with: {mockDog.avoidDog}</Text>
          </View>

          <View className="mb-4">
            <Text className="text-base mb-2">Warning Beep</Text>
            <View className="flex-row items-center justify-between">
              <Slider
                style={{ flex: 1, marginRight: 8 }}
                value={mockDog.warningBeep}
                minimumValue={0}
                maximumValue={5}
                step={0.5}
                minimumTrackTintColor="#3B82F6"
              />
              <Text>{mockDog.warningBeep} ft</Text>
            </View>
          </View>

          <View className="mb-4">
            <Text className="text-base mb-2">Light Shock</Text>
            <View className="flex-row items-center justify-between">
              <Slider
                style={{ flex: 1, marginRight: 8 }}
                value={mockDog.lightShock}
                minimumValue={0}
                maximumValue={3}
                step={0.5}
                minimumTrackTintColor="#F59E0B"
              />
              <Text>{mockDog.lightShock} ft</Text>
            </View>
          </View>

          <View>
            <Text className="text-base mb-2">Strong Shock</Text>
            <View className="flex-row items-center justify-between">
              <Slider
                style={{ flex: 1, marginRight: 8 }}
                value={mockDog.strongShock}
                minimumValue={0}
                maximumValue={2}
                step={0.5}
                minimumTrackTintColor="#EF4444"
              />
              <Text>{mockDog.strongShock} ft</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
} 