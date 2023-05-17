import React, { useState } from 'react';
import {
  Animated,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const FifthAnimation = () => {
  const value = useState(new Animated.ValueXY({x:0, y:0}))[0]

  const moveBall = () => {
    Animated.spring(value, {
      toValue: {x: 200, y: 400},
      bounciness: 20,
      speed: 2,
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
          backgroundColor: 'red'
        }}></View>
      </Animated.View>
      <TouchableOpacity onPress={moveBall}>
        <Text>Click Me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FifthAnimation;
