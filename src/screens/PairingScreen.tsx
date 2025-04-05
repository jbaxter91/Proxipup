import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Mock data for testing
const mockDevices = [
  { id: '1', name: 'Collar-123', rssi: -65, paired: true },
  { id: '2', name: 'Collar-456', rssi: -72, paired: false },
  { id: '3', name: 'Collar-789', rssi: -80, paired: false },
];

export default function PairingScreen() {
  const navigation = useNavigation();
  const [scanning, setScanning] = useState(false);
  const [devices, setDevices] = useState(mockDevices);

  const startScanning = () => {
    setScanning(true);
    setTimeout(() => setScanning(false), 3000);
  };

  return (
    <View className="flex-1 bg-white p-4">
      <View className="flex-row items-center mb-6">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text className="text-2xl font-bold ml-4">PAIR COLLARS</Text>
      </View>

      <View className="items-center mb-8">
        <View className="w-40 h-40 mb-4">
          <Icon name="bluetooth" size={160} color="#3B82F6" />
        </View>
        <Text className="text-lg text-center">
          Turn on the collar and bring{'\n'}it near your phone
        </Text>
      </View>

      <Text className="text-gray-500 mb-2">{scanning ? 'Scanning...' : 'Available Devices'}</Text>

      <ScrollView className="flex-1 mb-6">
        {devices.map(device => (
          <TouchableOpacity 
            key={device.id}
            className="flex-row items-center justify-between py-4 border-b border-gray-200"
          >
            <View>
              <Text className="text-lg">{device.name}</Text>
              <Text className="text-gray-500">Signal: {device.rssi} dBm</Text>
            </View>
            <View className="flex-row items-center">
              <Text className={`mr-2 ${device.paired ? 'text-green-500' : 'text-gray-500'}`}>
                {device.paired ? 'Connected' : 'Tap to Connect'}
              </Text>
              <Icon 
                name={device.paired ? "bluetooth-connected" : "bluetooth"} 
                size={24} 
                color={device.paired ? "#3B82F6" : "#9CA3AF"} 
              />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity 
        className="bg-blue-500 p-4 rounded-lg mb-4"
        onPress={startScanning}
        disabled={scanning}
      >
        <Text className="text-white text-center font-bold">
          {scanning ? 'Scanning...' : 'Scan for Devices'}
        </Text>
      </TouchableOpacity>

      <View className="border-t border-gray-200">
        <TouchableOpacity className="flex-row items-center justify-between py-4">
          <Text className="text-lg text-red-500">Emergency Disable All Collars</Text>
          <Icon name="chevron-right" size={24} color="#9CA3AF" />
        </TouchableOpacity>
      </View>
    </View>
  );
} 