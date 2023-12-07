import React, {useState} from 'react';
import {Image, ImageBackground} from 'react-native';
import {View} from 'react-native';

export const Splash = () => {
  return (
    <ImageBackground
      source={require('../../Assets/Images/EAA/mainLoginBack.png')}
      style={{flex: 1}}>
      <View
        style={{
          // justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          alignContent: 'center',
          marginTop: 85,
          flex: 1,
        }}>
        <Image
          style={{width: 320, height: 350}}
          resizeMode={'contain'}
          source={require('../../Assets/Images/EAA/eventLogo.png')}
        />
      </View>
    </ImageBackground>
  );
};
