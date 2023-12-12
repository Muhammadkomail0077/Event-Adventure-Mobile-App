import React, {useState} from 'react';
import {Image, Pressable, View} from 'react-native';
import Heading from '../Heading';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import COLORS from '../../../Assets/Style/Color';
import {useNavigation} from '@react-navigation/native';
import {Text} from 'react-native-paper';

export const Header = props => {
  const Navigation = useNavigation();

  const [notificationCount, setNotificationCount] = useState(1);
  return (
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
      }}>
      <View style={{alignSelf: 'center'}}>
        <Pressable
          onPress={() => {
            Navigation.navigate('Drawer');
          }}>
          <Image
            source={require('../../../Assets/Images/EAA/menu.png')}
            style={{
              width: 24,
              height: 20,
              // marginLeft: 10,
              alignContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}
          />
          {/* <MaterialIcons name="menu-open" size={30} color={'black'} /> */}
        </Pressable>
      </View>
      <View style={{alignSelf: 'center'}}>
        <Heading
          Heading={props.header}
          Fontsize={20}
          color={'rgba(212, 61, 28, 1)'}
          Fontweight={700}
          txtAlign={'center'}
          ml={12}
        />
      </View>
      <View
        style={{
          alignSelf: 'center',
          borderColor: 'rgba(187, 187, 187, 0.5)',
          borderWidth: 1,
          borderRadius: 10,
          width: 40,
          height: 40,
        }}>
        <Pressable
          onPress={() => {
            props.navigationRight
              ? Navigation.navigate('EditProfile')
              : Navigation.navigate('Notifications')
          }}
          // style={{position: 'relative'}}
        >
          <Image
            source={
              props.iconSecond
                ? props.iconSecond
                : require('../../../Assets/Images/EAA/notification.png')
            }
            style={{
              width: 24,
              height: 24,
              alignContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
              marginTop: 6,
            }}
          />
        </Pressable>
      </View>
    </View>
  );
};
