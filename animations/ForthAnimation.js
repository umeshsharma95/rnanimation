import React, { useState } from 'react';
import {
  Animated,
  PanResponder,
  View,
} from 'react-native';

const ForthAnimation = () => {
  const pan = useState(new Animated.ValueXY())[0]
  const panResponder = useState(
    PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
            pan.setOffset({
                x: pan.x._value,
                y: pan.y._value
            })
        },
        // onPanResponderMove: Animated.event([null, {
        //     dx: pan.x,
        //     dy: pan.y
        // }]),
        onPanResponderMove: (_, gesture) => {
            pan.x.setValue(gesture.dx)
            pan.y.setValue(gesture.dy)
        },
        onPanResponderRelease: () => {
            pan.flattenOffset()
        }
    })
  )[0]

  return (
    <View>
      <Animated.View style={[{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: 'blue',
            transform: [{translateX: pan.x}, {translateY: pan.y}]
            },
            // pan.getLayout()
        ]}
        {...panResponder.panHandlers}
        >
      </Animated.View>
    </View>
  );
};

export default ForthAnimation;
