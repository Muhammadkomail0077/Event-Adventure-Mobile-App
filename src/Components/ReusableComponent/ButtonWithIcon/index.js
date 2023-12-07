import React, {useState} from 'react';
import {Button, Text} from 'react-native-paper';
import {
  Image,
  ImageBackground,
  Pressable,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function ButtonWithIcon(props) {
  let {btnText, press} = props;

  return (
    <View
      style={{
        backgroundColor: 'rgba(213, 58, 29, 1)',
        flex: 1,
        borderRadius: 20,
        height: 64,
        width: 320,
      }}>
      <TouchableOpacity
        onPress={press}
        style={{
          flex: 1,
          width: '100%',
          padding: 12,
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          flexDirection: 'row',
        }}>
        <Image
          source={require('../../../Assets/Images/EAA/logout.png')}
          style={{
            width: 24,
            height: 24,
            marginHorizontal: 5,
          }}
        />
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 16,
            fontWeight: '600',
            marginHorizontal: 5,
            fontFamily: 'GeneralSans-Variable'
          }}>
          Log Out
        </Text>
      </TouchableOpacity>
    </View>
    // </LinearGradient>
  );
}

export default ButtonWithIcon;