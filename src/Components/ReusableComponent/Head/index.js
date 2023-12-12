import {useNavigation} from '@react-navigation/native';
import {Image, Platform, Pressable, View} from 'react-native';
import Heading from '../Heading';
import {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Head(props) {
  const Navigation = useNavigation();
  console.log('headprops', props);

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: '2%',
        justifyContent: 'space-between',
        // marginTop: Platform.OS === 'ios' ? '10%' : 0,
        //   margin: '8%',
        //   marginBottom: 0,
      }}>
      <View
        style={{
          flexDirection: 'row',
          // margin: Platform.OS === 'ios' ? '6%' : '6%',
          marginBottom: 0,
          alignSelf: 'center',
          // backgroundColor: 'rgba(233, 151, 141, 1)',
          width: 40,
          height: 40,
          borderColor: 'rgba(187, 187, 187, 0.5)',
          borderWidth: 1,
          borderRadius: 12,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: -3,
          marginLeft: 15,
        }}>
        <Pressable
          onPress={() => {
            Navigation.goBack();
            // setScreenName(false);
          }}>
          {/* <Image
            source={require('../../../Assets/Images/back.png')}
            style={{
              width: 18,
              height: 15,
              alignContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}
          /> */}
          <Ionicons
            name="chevron-back"
            size={24}
            color={'rgba(53, 53, 53, 1)'}
          />
        </Pressable>
      </View>
      <View style={{marginTop: 0}}>
        <Heading
          Stylefont={'normal'}
          Fontweight={600}
          Fontsize={20}
          Heading={props.head}
          color={'#D4271C'}
          lh={24}
          ls={-0.45}
          ml={10}
        />
      </View>
      <View>
        <Heading
          Stylefont={'normal'}
          Fontweight={'bold'}
          Fontsize={18}
          Heading={'             '}
          color={'black'}
        />
      </View>
    </View>
  );
}

export default Head;