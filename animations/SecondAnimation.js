import React, { useState } from 'react';
import {
  Animated,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const SecondAnimation = () => {
  const leftValue = useState(new Animated.Value(0))[0]

  const moveBall = () => {
    Animated.timing(leftValue, {
      toValue: 100,
      duration: 1000,
    //   useNativeDriver: false,
      useNativeDriver: true
    }).start()
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: 'black',
        //   marginLeft: leftValue
          transform: [{translateX: leftValue}]
        }}>
      </Animated.View>
      <TouchableOpacity onPress={moveBall}>
        <Text>Click Me - black</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SecondAnimation;
