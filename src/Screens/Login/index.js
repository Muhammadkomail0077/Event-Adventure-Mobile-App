import {Formik} from 'formik';
import React, {useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {ActivityIndicator, Button, Switch, Text} from 'react-native-paper';
// import COLORS from '../../Assets/Style/Color';
import ButtonComp from '../../Components/ReusableComponent/Button';
import Heading from '../../Components/ReusableComponent/Heading';
import Input from '../../Components/ReusableComponent/Input';
import * as yup from 'yup';

import {useNavigation} from '@react-navigation/native';
import InteractParagraph from '../../Components/ReusableComponent/Paragraph';
import {
  getDataFromAsync,
  setDataToAsync,
} from '../../Utils/getAndSetAsyncStorage';
import {userDataFromAsyncStorage} from '../../Store/Reducers/AuthReducer';
import {useDispatch, useSelector} from 'react-redux';
import {Loader} from '../../Components/ReusableComponent/Loader';
import {BASE_URL} from '../../App/api';
import {postRequest} from '../../App/fetch';
import CheckBox from '@react-native-community/checkbox';

export const Login = () => {
  const [passHide, setPassHide] = useState(false);
  const [loading, setLoading] = useState(false);
  const [valueEmail, onChangeTextEmail] = useState('');
  const [valuePass, onChangeTextPass] = useState('');
  const [error, onChangeError] = useState('');
  const dispatch = useDispatch();

  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  let loginValidationScheme = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email address is required '),
    password: yup
      .string()
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required '),
  });

  function isValidEmail(valueEmail) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(valueEmail);
  }

  function hasValidPassword(valuePass) {
    // Password must be at least 8 characters long
    if (valuePass.length < 8) {
      return false;
    }

    // Check for at least one uppercase letter
    if (!/[A-Z]/.test(valuePass)) {
      return false;
    }

    // Check for at least one lowercase letter
    if (!/[a-z]/.test(valuePass)) {
      return false;
    }

    // Check for at least one digit
    if (!/\d/.test(valuePass)) {
      return false;
    }

    // Check for at least one special character (non-alphanumeric)
    if (!/[^A-Za-z0-9]/.test(valuePass)) {
      return false;
    }

    return true;
  }

  function Login() {
    if (valueEmail.trim() === '') {
      onChangeError('Email cannot be empty.');
    } else if (!isValidEmail(valueEmail)) {
      onChangeError('Enter valid email');
    } else if (valuePass.trim() === '') {
      onChangeError('Password cannot be empty');
    } else if (!hasValidPassword(valuePass)) {
      onChangeError(
        'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.',
      );
    } else {
      console.log('valueEmail: ', valueEmail);
      console.log('valuePass: ', valuePass);
      console.log('Match');
      var formdataEmail = new FormData();
      formdataEmail.append('email', valueEmail);

      setLoading(true);

      postRequest(`${BASE_URL}/users/verify-email-exists/`, formdataEmail)
        .then(result => {
          // setLoading(false);
          console.log('Result: ', result.success);
          if (result.success) {
            setLoading(false);
            var formdata = new FormData();
            formdata.append('username', valueEmail);
            formdata.append('password', valuePass);

            setLoading(true);
            postRequest(`${BASE_URL}/users/login/token/`, formdata)
              .then(result => {
                console.log(result);
                setLoading(false);
                if (result?.non_field_errors) {
                  console.log('Not found');
                  Alert.alert('', 'Invalid Password');
                } else {
                  setDataToAsync('token', JSON.stringify(result.token));
                  setDataToAsync('user', JSON.stringify(result));

                  getDataFromAsync('user')
                    .then(res => {
                      dispatch(userDataFromAsyncStorage(JSON.parse(res)));
                      // console.log('res: ', res);
                    })
                    .catch(err => {
                      console.log(
                        'Error From getting from local storage: ',
                        err,
                      );
                    });

                  // Navigation.navigate('SimpleBottomTab', result);
                }
                // onChangeTextEmail('');
                // onChangeTextPass('');
              })
              .catch(error => {
                console.log('error', error);
                setLoading(false);
              });
          } else {
            setLoading(false);
            onChangeError('');
            Alert.alert('', 'Invalid Email');
          }
        })
        .catch(error => {
          setLoading(false);
          console.log('error', error);
          // onChangeTextEmail('');
        });
      // onChangeError('');
    }
  }

  const Navigation = useNavigation();

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <>
      <Formik
        initialValues={{email: '', password: ''}}
        validateOnMount={true}
        onSubmit={values => {
          simpleLogin(values);
        }}
        validationSchema={loginValidationScheme}>
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
              <ScrollView contentContainerStyle={{flexGrow: 1}}>
                {/* Add this line */}

                <ImageBackground
                  source={require('../../Assets/Images/EAA/backgroundImg.png')}
                  style={{flex: 1, flexGrow: 1}}>
                  <View
                    style={{
                      justifyContent: 'space-between',
                      flexDirection: 'column',
                      flex: 1,
                      marginVertical: '10%',
                    }}>
                    <View>
                      <View
                        style={{
                          alignContent: 'center',
                          marginTop: Platform.OS === 'ios' ? '15%' : 0,
                        }}>
                        <InteractParagraph
                          txtAlign={'center'}
                          p={'Welcome Back!'}
                          mv={4}
                          fs={24}
                          fw={'bold'}
                          color={'rgba(255, 255, 255, 1)'}
                        />
                      </View>

                      <View
                        style={{
                          alignContent: 'center',
                        }}>
                        <InteractParagraph
                          txtAlign={'center'}
                          p={'Please sign in to your account'}
                          mv={4}
                          fs={16}
                          color={'rgba(255, 255, 255, 1)'}
                          ls={-0.446}
                          // fw={'bold'}
                        />
                      </View>

                      <View style={{marginHorizontal: '5%'}}>
                        <View>
                          <View
                            style={{
                              marginBottom: '2%',
                              marginTop: '10%',
                              borderColor: 'rgba(255, 255, 255, 1)',
                              borderWidth: 1,
                              borderRadius: 20,
                            }}>
                            <Input
                              title={'Email / Phone'}
                              urlImg={require('../../Assets/Images/EAA/sms.png')}
                              placeholder={'abc123@gmail.com'}
                              pass={false}
                              value={valueEmail}
                              onChangeText={onChangeTextEmail}
                            />
                            {errors.email && touched.email && (
                              <Text
                                style={{
                                  fontSize: 12,
                                  color: 'red',
                                  marginTop: 5,
                                  marginBottom: 5,
                                  marginLeft: 15,
                                }}>
                                {errors.email}
                              </Text>
                            )}
                          </View>

                          <View style={{marginVertical: '3%'}}>
                            <Input
                              title={'Password'}
                              urlImg={require('../../Assets/Images/EAA/lock.png')}
                              placeholder={'Password'}
                              dob={true}
                              value={valuePass}
                              onChangeText={onChangeTextPass}
                            />
                            {errors.password && touched.password && (
                              <Text
                                style={{
                                  fontSize: 12,
                                  color: 'red',
                                  marginTop: 5,
                                  marginBottom: 5,
                                  marginLeft: 15,
                                }}>
                                {errors.password}
                              </Text>
                            )}
                          </View>

                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                            }}>
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                // justifyContent: 'space-between',
                              }}>
                              <View
                                style={{
                                  borderRadius: 5,
                                  // backgroundColor: 'pink',
                                  overflow: 'hidden',
                                  alignSelf: 'center',
                                  flexDirection: 'row',
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
                                    height: 20, // Set your desired height
                                  }}
                                />
                              </View>
                              <View>
                                <Text
                                  style={{
                                    color: '#FFF',
                                    fontSize: 16,
                                    fontFamily: 'GeneralSans-Variable',
                                    fontStyle: 'normal',
                                    fontWeight: '500',
                                    // line-height: 24px; /* 150% */
                                    letterSpacing: -0.446,
                                  }}>
                                  {'  '}
                                  Remember Me
                                </Text>
                              </View>
                            </View>

                            <View
                              style={{
                                marginHorizontal: -15,
                                alignContent: 'flex-end',
                                alignItems: 'flex-end',
                              }}>
                              <Button
                                // textColor={'#FFF'}
                                onPress={() =>
                                  Navigation.navigate('ForgotPassword')
                                }>
                                <Text
                                  style={{
                                    color: '#FFF',
                                    textAlign: 'right',
                                    fontFamily: 'GeneralSans-Variable',
                                    fontSize: 16,
                                    fontStyle: 'normal',
                                    fontWeight: '500',
                                  }}>
                                  {' '}
                                  Forgot Password?
                                </Text>
                              </Button>
                            </View>
                          </View>
                        </View>

                        <View
                          style={{
                            justifyContent: 'center',
                            alignContent: 'center',
                            flexDirection: 'row',
                            marginVertical: '5%',
                            // marginLeft: '-2%',
                            marginTop: '8%',
                          }}>
                          <ButtonComp
                            btnText={'Sign In'}
                            press={() => {
                              Navigation.navigate('Home');
                              // Login();
                            }}
                          />
                        </View>

                        <View style={{top: '10%'}}>
                          <Pressable
                            onPress={() => {
                              Navigation.navigate('Home');
                            }}>
                            <View
                              style={{
                                backgroundColor: '#FFF',
                                padding: 10,
                                borderRadius: 20,
                                alignItems: 'center',
                                flexDirection: 'row',
                                alignContent: 'center',
                                justifyContent: 'center',
                                height: 64,
                                marginVertical: 8,
                              }}>
                              <View>
                                <Image
                                  source={require('../../Assets/Images/EAA/google.png')}
                                  style={{width: 32, height: 32}}
                                  resizeMode="contain"
                                  resizeMethod="resize"
                                />
                              </View>
                              <View
                                style={{
                                  textAlign: 'center',
                                }}>
                                <Text
                                  style={{
                                    color: '#353535',
                                    fontFamily: 'GeneralSans-Variable',
                                    fontSize: 16,
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    lineHeight: 24,
                                    letterSpacing: -0.446,
                                  }}>
                                  {'       '}Sign In with Google
                                </Text>
                              </View>
                            </View>
                          </Pressable>

                          <Pressable
                            onPress={() => {
                              Navigation.navigate('Home');
                            }}>
                            <View
                              style={{
                                backgroundColor: '#354588',
                                padding: 10,
                                borderRadius: 20,
                                alignItems: 'center',
                                flexDirection: 'row',
                                alignContent: 'center',
                                justifyContent: 'center',
                                height: 64,
                                marginVertical: 8,
                              }}>
                              <View>
                                <Image
                                  source={require('../../Assets/Images/EAA/facebook.png')}
                                  style={{width: 32, height: 32}}
                                  resizeMode="contain"
                                  resizeMethod="resize"
                                />
                              </View>
                              <View
                                style={{
                                  textAlign: 'center',
                                }}>
                                <Text
                                  style={{
                                    color: 'white',
                                    fontFamily: 'GeneralSans-Variable',
                                    fontSize: 16,
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    lineHeight: 24,
                                    letterSpacing: -0.446,
                                    marginRight: -10,
                                  }}>
                                  {'    '}Sign In with Facebook
                                </Text>
                              </View>
                            </View>
                          </Pressable>

                          <Pressable
                            onPress={() => {
                              Navigation.navigate('Home');
                            }}>
                            <View
                              style={{
                                backgroundColor: '#FFF',
                                padding: 10,
                                borderRadius: 20,
                                alignItems: 'center',
                                flexDirection: 'row',
                                alignContent: 'center',
                                justifyContent: 'center',
                                height: 64,
                                marginVertical: 8,
                              }}>
                              <View>
                                <Image
                                  source={require('../../Assets/Images/EAA/apple.png')}
                                  style={{width: 30, height: 30}}
                                  resizeMode="contain"
                                  resizeMethod="resize"
                                />
                              </View>
                              <View
                                style={{
                                  textAlign: 'center',
                                }}>
                                <Text
                                  style={{
                                    color: '#353535',
                                    fontFamily: 'GeneralSans-Variable',
                                    fontSize: 16,
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    lineHeight: 24,
                                    letterSpacing: -0.446,
                                  }}>
                                  {'        '}Sign In with Apple
                                </Text>
                              </View>
                            </View>
                          </Pressable>
                        </View>
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: Platform.OS === 'ios' ? 90 : 110,
                        alignSelf: 'center',
                      }}>
                      <Heading
                        Fontsize={16}
                        as={'center'}
                        Heading={'Don’t Have An Account Yet?'}
                        color={'#FFFFFF'}
                      />
                      <Pressable
                        onPress={() => Navigation.navigate('ProfileCreate')}
                        style={{marginLeft: 3}}>
                        <Heading
                          Fontsize={16}
                          // as={'center'}
                          Heading={'Register'}
                          color={'#FFFFFF'}
                          Fontweight={'bold'}
                          ls={-0.446}
                        />
                      </Pressable>
                    </View>
                  </View>
                </ImageBackground>
              </ScrollView>
            )}
          </>
        )}
      </Formik>
    </>
  );
};

const styles = StyleSheet.create({
  line: {
    height: 4,
    flexDirection: 'row',
  },
  colorSection: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '8%',
    marginTop: 20,
  },
  line2: {
    // flex: 1,
    height: 1,
    width: '39%',
    backgroundColor: '#D0CBBB',
  },
  text: {
    marginHorizontal: 10,
    fontSize: 16,
    // fontWeight: 'bold',
    color: '#514C4A',
  },
});
