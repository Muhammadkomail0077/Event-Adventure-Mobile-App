import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Switch,
  TouchableOpacity,
  View,
} from 'react-native';
import COLORS from '../../Assets/Style/Color';
import Heading from '../../Components/ReusableComponent/Heading';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Text} from 'react-native-paper';
import Input from '../../Components/ReusableComponent/Input';
import {Formik} from 'formik';
import * as yup from 'yup';
import ButtonComp from '../../Components/ReusableComponent/Button';
import {width} from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import {ModalView} from '../../Components/ReusableComponent/Modal';
import {useDispatch, useSelector} from 'react-redux';
import {removeUserDataFromAsyncStorage} from '../../Store/Reducers/AuthReducer';
import {removeDataToAsync} from '../../Utils/getAndSetAsyncStorage';
import {BASE_URL} from '../../App/api';
import {Loader} from '../../Components/ReusableComponent/Loader';
import Head from '../../Components/ReusableComponent/Head';
import {Header} from '../../Components/ReusableComponent/Header';
import ButtonWithIcon from '../../Components/ReusableComponent/ButtonWithIcon';

export const Settings = () => {
  const Navigation = useNavigation();
  const AuthReducer = useSelector(state => state.AuthReducer.userData);
  // console.log('AuthReducer', AuthReducer.token);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  return (
    <>
      <ModalView
        set={setModalVisible}
        get={modalVisible}
        cross={() => setModalVisible(false)}
        txt={'Are you sure you want to Logout?'}
        headtxt={'Log Out?'}
        no={() => {
          setModalVisible(!modalVisible);
        }}
        yes={() => {
          setModalVisible(!modalVisible);
          Navigation.navigate('login');
        }}
      />

      <Modal
        animationType="none"
        transparent={true}
        visible={deleteModalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                alignSelf: 'flex-end',
                top: 15,
              }}>
              <Pressable
                onPress={() => {
                  setDeleteModalVisible(!deleteModalVisible);
                }}>
                <View
                  style={{
                    borderColor: 'rgba(187, 187, 187, 0.5)',
                    borderWidth: 1,
                    width: 38,
                    height: 38,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                  }}>
                  <Image
                    source={require('../../Assets/Images/EAA/cross.png')}
                    style={{width: 15, height: 15}}
                  />
                </View>
              </Pressable>
            </View>

            <View style={{marginBottom: 0, marginHorizontal: 20, marginTop: -5}}>
              <Heading
                Heading={'Delete Account?'}
                Fontsize={24}
                //   color={COLORS.dark}
                Fontweight={600}
                txtAlign={'center'}
                color={'black'}
                lh={32.4}
                ls={-0.446}
              />
            </View>
            <View
              style={{
                marginBottom: 20,
                marginHorizontal: 'auto',
                marginTop: 10,
              }}>
              <Heading
                Heading={'Are you sure you want to delete this account?'}
                Fontsize={14}
                ls={-0.45}
                //   color={COLORS.dark}
                Fontweight={500}
                txtAlign={'center'}
                color={'rgba(112, 112, 112, 1)'}
                lh={20}
                width={200}
              />
            </View>

            <View style={{flexDirection: 'row', marginBottom: 27}}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  borderWidth: 0.4,
                  // marginRight: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 111,
                  height: 64,
                  borderRadius: 20,
                  backgroundColor: '#D53A1D',
                }}
                onPress={() => {
                  Navigation.navigate('DeleteAccount');
                  setDeleteModalVisible(!deleteModalVisible);
                }}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontSize: 16,
                    fontWeight: 600,
                    fontFamily: 'GeneralSans-Variable',
                    lineHeight: 24, /* 150% */
letterSpacing: -0.446
                  }}>
                  Delete Now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {loading ? (
        <Loader />
      ) : (
        <SafeArea>
          <ScrollView>
            <View style={{marginHorizontal: '5%'}}>
              <View style={{marginBottom: 20}}>
                {/* <Head head={'Settings'} screenName={true} /> */}
                <Header header={'Settings'} screenName={true} />
              </View>

              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  backgroundColor: 'rgba(228, 228, 228, 0.5)',
                  width: '100%',
                  marginTop: 20,
                  padding: Platform.OS === 'ios' ? 13 : 7,
                  borderColor: 'rgba(187, 187, 187, 0.5)',
                  borderRadius: 20,
                  borderWidth: 1,
                  height: 56,
                }}>
                <View style={{marginLeft: 10}}>
                  {/* <View style={{paddingLeft: 10}}> */}
                  <Heading
                    Heading={'Notifications'}
                    Fontsize={16}
                    color={'black'}
                    txtAlign={'center'}
                    mt={Platform.OS === 'ios' ? 4 : 2}
                    ml={2}
                  />
                </View>
                <View
                // style={{marginRight: 10}}
                >
                  <Switch
                    trackColor={{
                      false: 'rgba(159, 159, 159, 1)',
                      true: 'rgba(159, 159, 159, 1)',
                    }}
                    thumbColor={
                      isEnabled
                        ? 'rgba(137, 237, 153, 1)'
                        : 'rgba(137, 237, 153, 1)'
                    }
                    ios_backgroundColor="rgba(159, 159, 159, 1)"
                    // ios_backgroundColor="black"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={{
                      transform: [{scaleX: 0.7}, {scaleY: 0.7}],
                    }}
                  />
                </View>
              </View>

              <View style={{borderColor: 'rgba(246, 246, 246, 0.5)', width: '100%', height: 1, borderWidth: 1, marginTop: 25}}></View>

              <View style={{marginLeft: 0}}>
                <Heading
                  Heading={'General Settings'}
                  Fontsize={20}
                  color={'black'}
                  // txtAlign={'center'}
                  mt={Platform.OS === 'ios' ? 22 : 2}
                  // ml={-5}
                  lh={24}
                />
              </View>

              <Pressable
                onPress={() => {
                  Navigation.navigate('PasswordChange');
                }}>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    // backgroundColor: 'rgba(228, 228, 228, 0.5)',
                    width: '100%',
                    marginTop: 20,
                    padding: Platform.OS === 'ios' ? 13 : 7,
                    borderColor: 'rgba(187, 187, 187, 0.5)',
                    borderRadius: 20,
                    borderWidth: 1,
                    height: 56,
                  }}>
                  <View style={{paddingLeft: 10}}>
                    <Heading
                      Heading={'Change Password'}
                      Fontsize={16}
                      color={'black'}
                      txtAlign={'center'}
                      mt={Platform.OS === 'ios' ? 4 : 2}
                      ml={2}
                    />
                  </View>
                  <View style={{paddingRight: 12, marginTop: 5}}>
                    <AntDesign
                      name="right"
                      size={16}
                      color={'black'}
                    />
                  </View>
                </View>
              </Pressable>
              <Pressable
                onPress={() => {
                  Navigation.navigate('MemberHandbook');
                }}>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    // backgroundColor: 'rgba(228, 228, 228, 0.5)',
                    width: '100%',
                    marginTop: 20,
                    padding: Platform.OS === 'ios' ? 13 : 7,
                    borderColor: 'rgba(187, 187, 187, 0.5)',
                    borderRadius: 20,
                    borderWidth: 1,
                    height: 56,
                  }}>
                  <View style={{paddingLeft: 10}}>
                    <Heading
                      Heading={'Member Handbook'}
                      Fontsize={16}
                      color={'black'}
                      txtAlign={'center'}
                      mt={Platform.OS === 'ios' ? 4 : 2}
                      ml={2}
                    />
                  </View>
                  <View style={{paddingRight: 12, marginTop: 5}}>
                    <AntDesign
                      name="right"
                      size={16}
                      color={'black'}
                    />
                  </View>
                </View>
              </Pressable>

              <Pressable
                onPress={() => {
                  Navigation.navigate('TermsAndCondition');
                }}>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    // backgroundColor: 'rgba(228, 228, 228, 0.5)',
                    width: '100%',
                    marginTop: 20,
                    padding: Platform.OS === 'ios' ? 13 : 7,
                    borderColor: 'rgba(187, 187, 187, 0.5)',
                    borderRadius: 20,
                    borderWidth: 1,
                    height: 56,
                  }}>
                  <View style={{paddingLeft: 10}}>
                    <Heading
                      Heading={'Terms & Conditions'}
                      Fontsize={16}
                      color={'black'}
                      txtAlign={'center'}
                      mt={Platform.OS === 'ios' ? 4 : 2}
                      ml={2}
                    />
                  </View>
                  <View style={{paddingRight: 12, marginTop: 5}}>
                    <AntDesign
                      name="right"
                      size={16}
                      color={'black'}
                    />
                  </View>
                </View>
              </Pressable>

              <Pressable
                onPress={() => {
                  Navigation.navigate('PrivacyPolicy');
                }}>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    // backgroundColor: 'rgba(228, 228, 228, 0.5)',
                    width: '100%',
                    marginTop: 20,
                    padding: Platform.OS === 'ios' ? 13 : 7,
                    borderColor: 'rgba(187, 187, 187, 0.5)',
                    borderRadius: 20,
                    borderWidth: 1,
                    height: 56,
                  }}>
                  <View style={{paddingLeft: 10}}>
                    <Heading
                      Heading={'Privacy Policy'}
                      Fontsize={16}
                      color={'black'}
                      txtAlign={'center'}
                      mt={Platform.OS === 'ios' ? 4 : 2}
                      ml={2}
                    />
                  </View>
                  <View style={{paddingRight: 12, marginTop: 5}}>
                    <AntDesign
                      name="right"
                      size={16}
                      color={'black'}
                    />
                  </View>
                </View>
              </Pressable>

              <Pressable
                onPress={() => {
                  Navigation.navigate('faqs');
                }}>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    // backgroundColor: 'rgba(228, 228, 228, 0.5)',
                    width: '100%',
                    marginTop: 20,
                    padding: Platform.OS === 'ios' ? 13 : 7,
                    borderColor: 'rgba(187, 187, 187, 0.5)',
                    borderRadius: 20,
                    borderWidth: 1,
                    height: 56,
                  }}>
                  <View style={{paddingLeft: 10}}>
                    <Heading
                      Heading={'Frequently Asked Question ( FAQs )'}
                      Fontsize={16}
                      color={'black'}
                      txtAlign={'center'}
                      mt={Platform.OS === 'ios' ? 4 : 2}
                      ml={2}
                    />
                  </View>
                  <View style={{paddingRight: 12, marginTop: 5}}>
                    <AntDesign
                      name="right"
                      size={16}
                      color={'black'}
                    />
                  </View>
                </View>
              </Pressable>

              <Pressable
                onPress={() => {
                  // setDeleteModalVisible(true);
                  console.log('off');
                }}
                style={{
                  marginRight: 'auto',
                  marginLeft: 'auto',
                  marginTop: 40,
                }}>
                <ButtonWithIcon
                  press={() => {
                    setModalVisible(true);
                  }}
                />
              </Pressable>

              <Pressable
                onPress={() => {
                  setDeleteModalVisible(!deleteModalVisible);
                }}>
                <View
                  style={{
                    // backgroundColor: '',
                    flex: 1,
                    borderRadius: 20,
                    height: 64,
                    width: 320,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderColor: 'rgba(187, 187, 187, 0.5)',
                    borderWidth: 1,
                    marginTop: 20,
                    marginRight: 'auto',
                    marginLeft: 'auto',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 16,
                      fontWeight: '600',
                      fontFamily: 'GeneralSans-Variable',
                      letterSpacing: -0.446
                      // marginHorizontal: 5,
                    }}>
                    Delete Account
                  </Text>
                </View>
              </Pressable>
            </View>
          </ScrollView>
        </SafeArea>
      )}
    </>
  );
};

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    backgroundColor: 'rgba(17, 17, 17, 0.9)',
    // opacity: 0.9,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 15,
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
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
