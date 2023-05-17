import React, { useState } from 'react';
import {
  Animated,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const SixthAnimation = () => {
  const value = useState(new Animated.ValueXY({x:0, y:0}))[0]

  const moveBall = () => {
    Animated.timing(value, {
      toValue: {x: 200, y: 400},
      duration: 2000,
      useNativeDriver: true
    }).start()
  }

  const rotate = value.x.interpolate({
    inputRange: [0, 100],
    outputRange: ['0deg', '360deg']
  })

  return (
    <View>
      <Animated.View style={{
          width: 100,
          height: 100,
          backgroundColor: 'red',
          transform: [{translateX: value.x}, {translateY: value.y}, {rotate}]
        }}>
      </Animated.View>
      <TouchableOpacity onPress={moveBall}>
        <Text>Click Me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SixthAnimation;
