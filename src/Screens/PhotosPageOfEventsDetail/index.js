import React from 'react';
import {Image, View} from 'react-native';
import Heading from '../../Components/ReusableComponent/Heading';

export const PhotosPageOfEventsDetail = () => {
  return (
    <>
      <View>
        <View
          style={{
            backgroundColor: 'white',
            marginTop: 30,
            //   alignItems: 'center',
            borderRadius: 20,
            shadowColor: 'black',
            shadowOpacity: 0.1,
            shadowRadius: 5,
            elevation: 5,
            marginHorizontal: '2%'
          }}>
          <View
            style={{
              alignContent: 'center',
              alignItems: 'center',
              marginTop: -15,
            }}>
            <Image
              source={require('../../Assets/Images/EAA/Events.png')}
              style={{width: 335, height: 251}}
              resizeMode="contain"
            />
          </View>
          <View style={{width: '80%', marginLeft: 16, marginBottom: 5, marginTop: -10}}>
            <Heading
              Stylefont={'normal'}
              Fontweight={500}
              Fontsize={14}
              Heading={'www.facebook.com/costa-rica-trip'}
              color={'#D43D1C'}
              ls={-0.446}
              lh={20}
            />
          </View>
          <View style={{width: '80%', marginLeft: 16,marginBottom:25}}>
            <Heading
              Stylefont={'normal'}
              Fontweight={600}
              Fontsize={18}
              Heading={'Costa Rica Trip and our Vietnam & Cambodia trip'}
              color={'black'}
              ls={-0.446}
            />
          </View>
        </View>
      </View>
    </>
  );
};
