import React, {useState} from 'react';
import {Button, Text} from 'react-native-paper';
import {ImageBackground, Pressable, TouchableOpacity, View} from 'react-native';

function TransparentButton(props) {
  let {btnText, press} = props;

  return (
    <View
      style={{
        backgroundColor: props.bgColor ? props.bgColor : '#F2564B',
        flex: 1,
        borderRadius: 20,
        height: 64,
        borderColor: props.borderColor ? props.borderColor : 'red',
        // shadowColor: '#000',
        // shadowOffset: {
        //   width: 0,
        //   height: 4,
        // },
        // shadowOpacity: 0.3,
        // shadowRadius: 4.65,
        // elevation: 8,
        borderWidth: 1,
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
        }}>
        <Text
          style={{
            color: props.txtColor ? props.txtColor : '#FFFFFF',
            fontSize: 16,
            fontWeight: 600,
            lineHeight: 24,
            letterSpacing: -0.446,
            fontFamily: 'GeneralSans-Variable',
          }}>
          {btnText}
        </Text>
      </TouchableOpacity>
    </View>
    // </LinearGradient>
  );
}

export default TransparentButton;
