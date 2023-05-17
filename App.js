import React from 'react';
import {
  View,
} from 'react-native';
import FirstAnimation from './animations/FirstAnimation';
import SecondAnimation from './animations/SecondAnimation';
import ThirdAnimation from './animations/ThirdAnimation';
import ForthAnimation from './animations/ForthAnimation';
import FifthAnimation from './animations/FifthAnimation';
import SixthAnimation from './animations/SixthAnimation';
import SeventhAnimation from './animations/SeventhAnimation';
import EighthAnimation from './animations/EighthAnimation';
import NinthAnimation from './animations/NinthAnimation';
import NativeModuleComponent from './nativeModule/NativeModuleComponent';

const App = () => {

  return (
    <View style={{flex: 1}}>
      <NativeModuleComponent />
      {/* <FirstAnimation /> */}
      {/* <SecondAnimation /> */}
      {/* <ThirdAnimation /> */}
      {/* <ForthAnimation /> */}
      {/* <FifthAnimation /> */}
      {/* <SixthAnimation /> */}
      {/* <SeventhAnimation /> */}
      {/* <EighthAnimation /> */}
      {/* <NinthAnimation /> */}
    </View>
  );
};

export default App;
