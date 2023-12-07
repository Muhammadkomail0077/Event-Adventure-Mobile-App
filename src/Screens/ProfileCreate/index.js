import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native';
import COLORS from '../../Assets/Style/Color';
import Heading from '../../Components/ReusableComponent/Heading';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView} from 'react-native-gesture-handler';
import {ActivityIndicator, Button, Text} from 'react-native-paper';
import Input from '../../Components/ReusableComponent/Input';
import {Formik} from 'formik';
import * as yup from 'yup';
import ButtonComp from '../../Components/ReusableComponent/Button';
import LinearGradient from 'react-native-linear-gradient';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icons from 'react-native-vector-icons/MaterialIcons';
import InteractParagraph from '../../Components/ReusableComponent/Paragraph';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {BASE_URL} from '../../App/api';
import {useDispatch, useSelector} from 'react-redux';
import {
  getDataFromAsync,
  setDataToAsync,
} from '../../Utils/getAndSetAsyncStorage';
import {userDataFromAsyncStorage} from '../../Store/Reducers/AuthReducer';
import {removeOtpScreen} from '../../Store/Reducers/ScreenReducer';
import {Loader} from '../../Components/ReusableComponent/Loader';
import {
  getRequestWithCookie,
  postRequestWithTokenAndCookie,
} from '../../App/fetch';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CheckBox from '@react-native-community/checkbox';

export const ProfileCreate = () => {
  const Navigation = useNavigation();
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [error, onChangeError] = useState('');
  const [loading, setLoading] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const [valueFirstName, onChangeFirstName] = useState('');
  const [valueLastName, onChangeLastName] = useState('');

  const [valueEmail, onChangeEmail] = useState('');
  const [valuePhoneNumber, onChangePhoneNumber] = useState('');
  const [valuePass, onChangeTextPass] = useState('');
  const [valueConfirmPass, onChangeTextConfirmPass] = useState('');

  function acceptModal() {
    setModalVisible(false);
    setLoading(true);

    getRequestWithCookie(
      `${BASE_URL}/users/user-profile/`,
      AuthReducer.userData.token,
    )
      .then(result => {
        console.log(result);
        setLoading(false);

        setDataToAsync('user', JSON.stringify(result));

        getDataFromAsync('user')
          .then(res => {
            dispatch(userDataFromAsyncStorage(JSON.parse(res)));
            // console.log('res: ', res);
            dispatch(removeOtpScreen());
          })
          .catch(err => {
            console.log('Error From getting from local storage: ', err);
          });

        // Navigation.navigate('SimpleBottomTab', result);
      })
      .catch(error => {
        console.log('error', error);
        setLoading(false);
      });
  }

  return (
    <>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <Image
                source={require('../../Assets/Images/EAA/service.png')}
                style={{width: 80, height: 80, marginTop: 20}}
              />
            </View>
            <View style={{marginVertical: 20}}>
              <Heading
                Heading={
                  'Our Representative will contact & verify your profile '
                }
                Fontsize={24}
                color={COLORS.dark}
                Fontweight={600}
                txtAlign={'center'}
                width={300}
                // mb={10}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                alignContent: 'center',
                alignItems: 'center',
                marginBottom: 17,
                marginHorizontal: 4
              }}>
              <ButtonComp
                btnwidth={'97%'}
                btnHeight={56}
                btnText={'Submit'}
                justify={'center'}
                align={'center'}
                fontSize={16}
                radius={15}
                txtwidth={'100%'}
                bgColor={'#D53A1D'}
                txtColor={'#FFFFFF'}
                press={() => {
                  //   updatePassword();
                  setModalVisible(false);
                  Navigation.navigate('Home');
                }}
              />
            </View>
          </View>
        </View>
      </Modal>

      <Formik
        initialValues={{email: '', password: ''}}
        validateOnMount={true}
        onSubmit={values => {
          // simpleLogin(values);
        }}
        // validationSchema={loginValidationScheme}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
          isValid,
        }) => (
          <>
            {loading ? (
              <Loader />
            ) : (
              <ImageBackground
                source={require('../../Assets/Images/EAA/backgroundImg.png')}
                resizeMode="cover"
                style={{flex: 1}}>
                <ScrollView>
                  <View
                    style={{
                      marginHorizontal: '5%',
                      marginTop: Platform.OS === 'ios' ? '19%' : 26,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        // margin: '8%',
                        marginBottom: 0,
                      }}>
                      <Pressable
                        onPress={() => {
                          Navigation.goBack();
                        }}>
                        <View
                          style={{
                            backgroundColor: '#E9978D',
                            padding: 8,
                            borderRadius: 12,
                            borderWidth: 1,
                            borderColor: 'white',
                          }}>
                          <View>
                            <AntDesign
                              name="left"
                              size={20}
                              color={'#FFFFFF'}
                            />
                          </View>
                        </View>
                      </Pressable>
                    </View>

                    <View
                      style={{
                        // justifyContent: 'space-between',
                        flexGrow: 1,
                        marginHorizontal: '5%',
                        borderRadius: 15,
                        // marginTop: '15%',
                      }}>
                      <View style={{marginBottom: '2%'}}>
                        <Heading
                          Stylefont={'normal'}
                          lh={24}
                        ls={-0.446}
                        Fontweight={600}
                          Fontsize={24}
                          txtAlign={'center'}
                          // p={10}
                          // lh={31}
                          Heading={'Register Now'}
                          color={'#FFFFFF'}
                        />
                      </View>
                      <View style={{marginBottom: '9%'}}>
                        <Heading
                          Fontsize={16}
                          txtAlign={'center'}
                          Heading={'Create your new account.'}
                          color={'#FFFFFF'}
                          lh={24}
                          ls={-0.446}
                        Fontweight={500}
                        />
                      </View>
                    </View>

                    <View style={{marginVertical: '2%', borderColor: 'rgba(255, 255, 255, 1)', borderWidth: 1, borderRadius: 20,}}>
                      <Input
                        title={'Full Name'}
                        urlImg={require('../../Assets/Images/EAA/user.png')}
                        placeholder={'James'}
                        value={valueFirstName}
                        onChangeText={onChangeFirstName}
                      />
                    </View>

                    <View style={{marginVertical: '2%', borderColor: 'rgba(255, 255, 255, 1)', borderWidth: 1, borderRadius: 20,}}>
                      <Input
                        title={'Full Name'}
                        urlImg={require('../../Assets/Images/EAA/user.png')}
                        placeholder={'Jordan'}
                        value={valueLastName}
                        onChangeText={onChangeLastName}
                      />
                    </View>

                    <View style={{marginVertical: '2%', borderColor: 'rgba(255, 255, 255, 1)', borderWidth: 1, borderRadius: 20,}}>
                      <Input
                        title={'Email ID'}
                        urlImg={require('../../Assets/Images/EAA/sms.png')}
                        placeholder={'abc123@gmail.com'}
                        pass={false}
                        value={valueEmail}
                        onChangeText={onChangeEmail}
                      />
                    </View>

                    <View style={{marginVertical: '2%', borderColor: 'rgba(255, 255, 255, 1)', borderWidth: 1, borderRadius: 20,}}>
                      <Input
                        title={'Phone Number'}
                        urlImg={require('../../Assets/Images/EAA/phone.png')}
                        placeholder={'+93 123 123456'}
                        pass={false}
                        value={valuePhoneNumber}
                        onChangeText={onChangePhoneNumber}
                      />
                    </View>

                    <View style={{marginVertical: '2%'}}>
                      <Input
                        title={'Password'}
                        urlImg={require('../../Assets/Images/EAA/lock.png')}
                        placeholder={'Password'}
                        pass={'true'}
                        value={valuePass}
                        onChangeText={onChangeTextPass}
                      />
                    </View>

                    <View style={{marginVertical: '2%'}}>
                      <Input
                        title={'Re-type Password'}
                        urlImg={require('../../Assets/Images/EAA/lock.png')}
                        placeholder={'Repeat Password'}
                        pass={'true'}
                        value={valueConfirmPass}
                        onChangeText={onChangeTextConfirmPass}
                      />
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        // alignItems: 'center',
                        marginVertical: 8,
                        // justifyContent: 'space-between',
                      }}>
                      <View
                        style={{
                          borderRadius: 5,
                          // backgroundColor: 'pink',
                          overflow: 'hidden',
                          borderWidth: 0,
                          // alignSelf: 'center',
                          marginTop: 2,
                          flexDirection: 'row',
                          height: 20
                        }}>
                        <CheckBox
                          disabled={false}
                          value={toggleCheckBox}
                          onValueChange={newValue =>
                            setToggleCheckBox(newValue)
                          }
                          boxType="square"
                          onCheckColor="black"
                          style={{
                            backgroundColor: '#E9978D',
                            width: 20, // Set your desired width
                            height: 20,// Set your desired height
                          }}

                        />
                      </View>
                      <View style={{marginLeft: 10}}>
                        <Text
                          style={{
                            color: '#FFF',
                            fontSize: 16,
                            fontFamily: 'GeneralSans-Variable',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: 24, /* 150% */
                            letterSpacing: -0.446,
                            width: 330,
                          }}>
                          By continuing you accept our Privacy Policy and Term
                          of Use
                        </Text>
                      </View>
                    </View>

                    <View
                      style={{
                        justifyContent: 'center',
                        alignContent: 'center',
                        flexDirection: 'row',
                        marginVertical: '5%',
                      }}>
                      <ButtonComp
                        btnwidth={'97%'}
                        btnHeight={56}
                        btnText={'Sign Up'}
                        justify={'center'}
                        align={'center'}
                        fontSize={16}
                        radius={15}
                        txtwidth={'100%'}
                        txtColor={COLORS.white}
                        color={COLORS.dark}
                        // bgcolor={'#BA7607'}
                        press={() => {
                          // CreateProfile();
                          // Navigation.navigate('SimpleBottomTab');
                          setModalVisible(true);
                        }}
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginBottom: Platform.OS === 'ios' ? 30 : 30,
                        alignSelf: 'center',
                        marginTop: 5
                      }}>
                      <Heading
                        Fontsize={16}
                        as={'center'}
                        Heading={'Already Have An Account Yet?'}
                        color={'#FFFFFF'}
                        // Fontweight={500}
                      lh={24}
                      ls={-0.446}
                      />
                      <Pressable
                        style={{marginLeft: 3}}
                        onPress={() => Navigation.navigate('login')}>
                        <Heading
                          Fontsize={16}
                          // as={'center'}
                          Heading={'Sign In'}
                          color={'#FFFFFF'}
                          Fontweight={'bold'}
                        lh={24}
                        ls={-0.446}                      />
                      </Pressable>
                    </View>
                  </View>
                </ScrollView>
              </ImageBackground>
            )}
          </>
        )}
      </Formik>
    </>
  );
};

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    // backgroundColor: 'red',
    // opacity: 0.5,
    backgroundColor: 'rgba(17, 17, 17, 0.9)',
  },
  modalView: {
    margin: 15,
    backgroundColor: 'white',
    borderRadius: 20,
    // paddingHorizontal: 20,
    // paddingBottom: 20,
    padding: 10,
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
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
