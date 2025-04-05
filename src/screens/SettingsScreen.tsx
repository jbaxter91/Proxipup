import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function SettingsScreen() {
  const navigation = useNavigation();
  const [notifications, setNotifications] = useState(true);
  const [sound, setSound] = useState(true);
  const [vibration, setVibration] = useState(true);

  return (
    <View className="flex-1 bg-white p-4">
      <View className="flex-row items-center mb-6">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text className="text-2xl font-bold ml-4">Settings</Text>
      </View>

      <View className="mb-6">
        <Text className="text-lg font-bold mb-4">Notifications</Text>
        
        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-gray-700">Push Notifications</Text>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ false: '#E5E7EB', true: '#3B82F6' }}
            thumbColor="#FFFFFF"
          />
        </View>

        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-gray-700">Sound</Text>
          <Switch
            value={sound}
            onValueChange={setSound}
            trackColor={{ false: '#E5E7EB', true: '#3B82F6' }}
            thumbColor="#FFFFFF"
          />
        </View>

        <View className="flex-row items-center justify-between">
          <Text className="text-gray-700">Vibration</Text>
          <Switch
            value={vibration}
            onValueChange={setVibration}
            trackColor={{ false: '#E5E7EB', true: '#3B82F6' }}
            thumbColor="#FFFFFF"
          />
        </View>
      </View>

      <View className="mb-6">
        <Text className="text-lg font-bold mb-4">About</Text>
        
        <TouchableOpacity className="flex-row items-center justify-between py-4 border-b border-gray-200">
          <Text className="text-gray-700">Version</Text>
          <Text className="text-gray-500">1.0.0</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center justify-between py-4 border-b border-gray-200">
          <Text className="text-gray-700">Privacy Policy</Text>
          <Icon name="chevron-right" size={24} color="#9CA3AF" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center justify-between py-4">
          <Text className="text-gray-700">Terms of Service</Text>
          <Icon name="chevron-right" size={24} color="#9CA3AF" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity className="bg-red-500 p-4 rounded-lg">
        <Text className="text-white text-center font-bold">Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
} 