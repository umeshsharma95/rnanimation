import React, { useState } from 'react';
import {
  Animated,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const ThirdAnimation = () => {
  const opacity = useState(new Animated.Value(0))[0]

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start()
  }

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true
    }).start()
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: 'red',
          opacity
        }}>
      </Animated.View>
      <TouchableOpacity onPress={fadeIn}>
        <Text>Fade In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={fadeOut}>
        <Text>Fade Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ThirdAnimation;
