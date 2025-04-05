import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ProximitySettingsScreen() {
  const navigation = useNavigation();
  const [beepThreshold, setBeepThreshold] = useState(5);
  const [lightShockThreshold, setLightShockThreshold] = useState(3);
  const [strongShockThreshold, setStrongShockThreshold] = useState(1);

  const handleSave = () => {
    // TODO: Save settings to store
    navigation.goBack();
  };

  return (
    <View className="flex-1 bg-white p-4">
      <View className="flex-row items-center mb-6">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text className="text-2xl font-bold ml-4">Proximity Settings</Text>
      </View>

      <View className="mb-6">
        <Text className="text-lg font-bold mb-2">Beep Threshold</Text>
        <Text className="text-gray-500 mb-2">
          Distance: {beepThreshold} meters
        </Text>
        <Slider
          value={beepThreshold}
          onValueChange={setBeepThreshold}
          minimumValue={1}
          maximumValue={10}
          step={1}
          minimumTrackTintColor="#3B82F6"
          maximumTrackTintColor="#E5E7EB"
          thumbTintColor="#3B82F6"
        />
      </View>

      <View className="mb-6">
        <Text className="text-lg font-bold mb-2">Light Shock Threshold</Text>
        <Text className="text-gray-500 mb-2">
          Distance: {lightShockThreshold} meters
        </Text>
        <Slider
          value={lightShockThreshold}
          onValueChange={setLightShockThreshold}
          minimumValue={1}
          maximumValue={5}
          step={1}
          minimumTrackTintColor="#F59E0B"
          maximumTrackTintColor="#E5E7EB"
          thumbTintColor="#F59E0B"
        />
      </View>

      <View className="mb-6">
        <Text className="text-lg font-bold mb-2">Strong Shock Threshold</Text>
        <Text className="text-gray-500 mb-2">
          Distance: {strongShockThreshold} meters
        </Text>
        <Slider
          value={strongShockThreshold}
          onValueChange={setStrongShockThreshold}
          minimumValue={1}
          maximumValue={3}
          step={1}
          minimumTrackTintColor="#EF4444"
          maximumTrackTintColor="#E5E7EB"
          thumbTintColor="#EF4444"
        />
      </View>

      <TouchableOpacity
        className="bg-blue-500 p-4 rounded-lg"
        onPress={handleSave}
      >
        <Text className="text-white text-center font-bold">Save Settings</Text>
      </TouchableOpacity>
    </View>
  );
} 