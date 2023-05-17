import React, { useState } from 'react';
import {
  Animated,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const HEADER_HIGHT = 50

const EighthAnimation = () => {
  const scrollY = useState(new Animated.Value(0))[0]
  const diffClamp = Animated.diffClamp(scrollY, 0, HEADER_HIGHT)
  const translateY = diffClamp.interpolate({
    inputRange: [0, HEADER_HIGHT],
    outputRange: [0, -HEADER_HIGHT]
  })

  const renderItem = (item) => {
    return (
        <View style={styles.card}>
          <Image style={styles.image} source={{uri: 'https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w='}} />
           <Text>Card: {item}</Text>
        </View>
    )
  }

  return (
    <View>
        <Animated.View
         style={{
            transform: [{translateY}],
            elevation: 4,
            zIndex: 100
         }}
        >
            <View style={styles.header}>
                <Text style={styles.headerText}>Header</Text>
            </View>
        </Animated.View>
      <FlatList 
       contentContainerStyle={{marginTop: HEADER_HIGHT}}
       data={[1, 2, 3, 4, 5, 6]}
       renderItem={({item}) => renderItem(item)}
       keyExtractor={(_, index) => index}
       onScroll={e => {
        scrollY.setValue(e.nativeEvent.contentOffset.y)
       }}
      />
    </View>
  );
};

export default EighthAnimation;

const styles = StyleSheet.create({
    header: {
        height: HEADER_HIGHT,
        width: '100%',
        backgroundColor: '#ccc',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0
    },
    headerText: {
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
        margin: 10,
    },
    card: {
        width: '94%',
        height: 240,
        backgroundColor: '#eee',
        margin: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
      width: '100%',
      height: 200,
    }
})
