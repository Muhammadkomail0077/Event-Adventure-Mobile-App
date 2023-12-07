import React from 'react';
import {Image, View} from 'react-native';
import {Text} from 'react-native-paper';
import Heading from '../ReusableComponent/Heading';

export const Cards = () => {
  return (
    <View
      style={{
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        padding: 0,
        // Elevation for Android
        elevation: 5,
        borderRadius: 10,
        marginHorizontal: 10,
      }}>
      <Image
        source={require('../../Assets/Images/EAA/cardImage.png')}
        style={{width: '97%', height: 150, borderRadius: 10, marginLeft: 'auto', marginRight: 'auto', marginTop: 13}}
        resizeMode="contain"
      />
      <View style={{marginVertical: 12, marginHorizontal: 10}}>
        <Heading
          Fontsize={16}
          Heading={'Virtual Fun'}
          color={'#353535'}
          Fontweight="bold"
          lh={-0.446}
        />
      </View>
      <View style={{marginVertical: 0, marginHorizontal: 10, marginBottom: 10}}>
        <Heading
          Fontsize={12}
          Heading={
            'Stay connected from anywhere with exciting group virtual events. Meet new people at comedy nights, game nights, mixology classes and other fun shared, '
         }
          color={'#707070'}
          width={258}
          lh={16}
          ls={-0.446}
        />
                

        <Heading
          Fontsize={12}
          Heading={
            'ALL ONLINE.'
          }
          color={'#D43D1C'}
        />
      </View>
    </View>
  );
};
