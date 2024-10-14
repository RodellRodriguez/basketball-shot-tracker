import React from 'react';
import { View, Image, Text } from 'react-native';

const TestImage: React.FC = () => {
  return (
    <View>
      <Text>Test Image</Text>
      <Image 
        source={require('../assets/icon.png')} 
        style={{ width: 100, height: 100 }}
      />
    </View>
  );
};

export default TestImage;