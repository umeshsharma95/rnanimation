import React, { useState } from 'react';
import {
  Animated,
  PanResponder,
  View,
} from 'react-native';

const SeventhAnimation = () => {
  const value = useState(new Animated.ValueXY({x:0, y:0}))[0]

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    // onPanResponderMove: Animated.event([
    //     null,
    //     {dx: value.x, dy: value.y}
    // ]),
    onPanResponderMove: (_, gesture) => {
        value.setValue({x: gesture.dx, y: gesture.dy})
    },
    onPanResponderRelease: () => {
        // value.setValue({x:0, y:0})
        Animated.spring(value, {
            toValue: {x:0, y:0},
            useNativeDriver: true
        }).start()
    }
  })

  const rotate = value.x.interpolate({
    inputRange: [0, 100],
    outputRange: ['0deg', '360deg']
  })

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View
        {...panResponder.panHandlers}
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'red',
          transform: [{translateX: value.x}, {translateY: value.y}, {rotate}]
        }}>
      </Animated.View>
    </View>
  );
};

export default SeventhAnimation;
