import React, { useState } from 'react';
import {
  Animated,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const FirstAnimation = () => {
  const value = useState(new Animated.ValueXY({x:0, y:0}))[0]

  const moveBall = () => {
    Animated.timing(value, {
      toValue: {x: 100, y: 100},
      duration: 1000,
      useNativeDriver: true
    }).start()
  }

  return (
    <View>
      <Animated.View style={{
        transform: [{translateX: value.x}, {translateY: value.y}]
      }}>
        <View style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: 'red',
        }}></View>
      </Animated.View>
      <TouchableOpacity onPress={moveBall}>
        <Text>Click Me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FirstAnimation;
