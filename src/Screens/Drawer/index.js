import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  View,
  Modal,
  Platform,
} from 'react-native';
import {Button, Text} from 'react-native-paper';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Heading from '../../Components/ReusableComponent/Heading';
import COLORS from '../../Assets/Style/Color';
// import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {Svg, Defs, LinearGradient, Stop, Rect, Path} from 'react-native-svg';
import {ScrollView} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import {ModalView} from '../../Components/ReusableComponent/Modal';
import {removeUserDataFromAsyncStorage} from '../../Store/Reducers/AuthReducer';
import {useDispatch, useSelector} from 'react-redux';
import {removeDataToAsync} from '../../Utils/getAndSetAsyncStorage';

export const Drawer = () => {
  const Navigation = useNavigation();

  const AuthReducer = useSelector(state => state.AuthReducer);

  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('modalVisible: ', modalVisible);
  }, [modalVisible]);

  return (
    <>
      {/* <SafeArea> */}
      {/* <ScrollView style={{flex: 1}}> */}
      <ModalView
        set={setModalVisible}
        get={modalVisible}
        cross={() => setModalVisible(false)}
        txt={'Are you sure you want to logout ?'}
        headtxt={'Log Out?'}
        no={() => {
          setModalVisible(!modalVisible);
        }}
        yes={() => {
          setModalVisible(!modalVisible);
          Navigation.navigate('login');
          // removeDataToAsync('token');
          // removeDataToAsync('user');
          // dispatch(removeUserDataFromAsyncStorage());
        }}
      />

      {/* <SafeArea> */}
      {/* <View style={{flex: 1}}> */}
      <ImageBackground
        source={require('../../Assets/Images/EAA/backgroundImg.png')}
        resizeMode="cover"
        style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginHorizontal: 24,
              // marginTop: Platform.OS === 'ios' ? '18%' : 20,
              // marginTop: '18%',
              marginBottom: '5%',
              marginTop: Platform.OS === 'ios' ? 78 : 20,
            }}>
            <View
              style={{
                alignSelf: 'center',
                backgroundColor: 'rgba(233, 151, 141, 1)',
                width: 40,
                height: 40,
                borderColor: 'rgba(255, 255, 255, 1)',
                borderWidth: 1,
                borderRadius: 12,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: -8,
              }}>
              <Pressable
                onPress={() => {
                  Navigation.goBack();
                }}>
                <Ionicons name="chevron-back" size={24} color={'white'} />
              </Pressable>
            </View>
            <View
              style={{
                flexDirection: 'row',
                // marginTop: 5,
              }}>
              <View style={{marginTop: 10}}>
                <Heading
                  Heading={'John Smith'}
                  Fontsize={18}
                  color={'rgba(255, 255, 255, 1)'}
                  Fontweight={600}
                  // txtAlign={'center'}
                  txtAlign={'right'}
                  lh={24.3}
                  ls={-0.45}
                />
                <Heading
                  Heading={'Hampton Bays, New York 867 Snowbird Lane'}
                  Fontsize={14}
                  color={'rgba(255, 255, 255, 1)'}
                  Fontweight={500}
                  lh={20}
                  width={175}
                  txtAlign={'right'}
                  ls={-0.446}
                />
              </View>
              <View>
                <Image
                  style={{
                    width: 80,
                    height: 80,
                    marginRight: -15,
                    marginTop: 10,
                    marginLeft: 5,
                  }}
                  resizeMode={'contain'}
                  source={require('../../Assets/Images/EAA/profile1.png')}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              borderColor: 'rgba(255, 255, 255, 0.3)',
              borderWidth: 0.6,
              width: 345,
              marginRight: 'auto',
              marginLeft: 'auto',
              alignItems: 'center',
            }}>
            <View></View>
          </View>

          <View style={{flexDirection: 'column', justifyContent: 'space-between', height: 700}}>
            <View>
              <View style={{marginTop: 50, marginLeft: 40}}>
                <Pressable
                  onPress={() => {
                    Navigation.navigate('Home');
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../Assets/Images/EAA/drawerhome.png')}
                      style={{
                        width: 20.9,
                        height: 22,
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center',
                        alignSelf: 'center',
                      }}
                    />
                    <Heading
                      Heading={'Home'}
                      Fontsize={18}
                      color={'rgba(255, 255, 255, 1)'}
                      Fontweight={600}
                      lh={24.3}
                      ml={20}
                      // txtAlign={'center'}
                    />
                  </View>
                </Pressable>
              </View>

              <View style={{marginTop: '8%', marginLeft: 40}}>
                <Pressable
                  onPress={() => {
                    Navigation.navigate('Profile');
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../Assets/Images/EAA/drawerprofile.png')}
                      style={{
                        width: 24,
                        height: 24,
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center',
                        alignSelf: 'center',
                      }}
                    />
                    <Heading
                      Heading={'Profile'}
                      Fontsize={18}
                      color={'rgba(255, 255, 255, 1)'}
                      Fontweight={600}
                      lh={24.3}
                      ml={20}
                      // txtAlign={'center'}
                    />
                  </View>
                </Pressable>
              </View>

              <View style={{marginTop: '8%', marginLeft: 40}}>
                <Pressable
                  onPress={() => {
                    Navigation.navigate('Home');
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../Assets/Images/EAA/drawercalender.png')}
                      style={{
                        width: 24,
                        height: 24,
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center',
                        alignSelf: 'center',
                      }}
                    />
                    <Heading
                      Heading={'Event Calendar'}
                      Fontsize={18}
                      color={'rgba(255, 255, 255, 1)'}
                      Fontweight={600}
                      lh={24.3}
                      ml={20}
                      // txtAlign={'center'}
                    />
                  </View>
                </Pressable>
              </View>

              <View style={{marginTop: '8%', marginLeft: 40}}>
                <Pressable
                  onPress={() => {
                    Navigation.navigate('Trips');
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../Assets/Images/EAA/airplane.png')}
                      style={{
                        width: 24,
                        height: 24,
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center',
                        alignSelf: 'center',
                      }}
                    />
                    <Heading
                      Heading={'Trips'}
                      Fontsize={18}
                      color={'rgba(255, 255, 255, 1)'}
                      Fontweight={600}
                      lh={24.3}
                      ml={20}
                      // txtAlign={'center'}
                    />
                  </View>
                </Pressable>
              </View>

              <View style={{marginTop: '8%', marginLeft: 40}}>
                <Pressable
                  onPress={() => {
                    Navigation.navigate('JoinEvent');
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../Assets/Images/EAA/menu-board.png')}
                      resizeMode={'contain'}
                      style={{
                        width: 24,
                        height: 24,
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center',
                        alignSelf: 'center',
                      }}
                    />
                    <Heading
                      Heading={'Joined Events'}
                      Fontsize={18}
                      color={'rgba(255, 255, 255, 1)'}
                      Fontweight={600}
                      lh={24.3}
                      ml={20}
                      // txtAlign={'center'}
                    />
                  </View>
                </Pressable>
              </View>

              <View style={{marginTop: '8%', marginLeft: 40}}>
                <Pressable
                  onPress={() => {
                    Navigation.navigate('Settings');
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../Assets/Images/EAA/drawersetting.png')}
                      style={{
                        width: 24,
                        height: 24,
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center',
                        alignSelf: 'center',
                      }}
                    />
                    <Heading
                      Heading={'Settings'}
                      Fontsize={18}
                      color={'rgba(255, 255, 255, 1)'}
                      Fontweight={600}
                      lh={24.3}
                      ml={20}
                      // txtAlign={'center'}
                    />
                  </View>
                </Pressable>
              </View>
            </View>
            {/* <View style={{top: 25}}> */}
            <View style={{marginBottom: 60}}>

              <Pressable
                onPress={() => {
                  setModalVisible(true);
                  console.log('working');
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    // top: 175,
                    // right: 18,
                    left: 41,
                  }}>
                  <Image
                    source={require('../../Assets/Images/EAA/logout.png')}
                    style={{
                      width: 24,
                      height: 24,
                    }}
                  />
                  <Heading
                    Heading="Log Out"
                    Fontsize={16}
                    color={'rgba(255, 255, 255, 1)'}
                    Fontweight={600}
                    lh={24}
                    ml={10}
                    ls={-0.446}
                  />
                </View>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
};

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    backgroundColor: '#25241C',
    opacity: 0.9,
  },
  modalView: {
    margin: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: 'red',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    borderColor: 'black',
    // borderWidth: 1,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
