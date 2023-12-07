import {Formik} from 'formik';
import React, {useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Platform,
  Pressable,
  ScrollView,
  View,
} from 'react-native';
import {ActivityIndicator, Text} from 'react-native-paper';
import ButtonComp from '../../Components/ReusableComponent/Button';
import Heading from '../../Components/ReusableComponent/Heading';
import Input from '../../Components/ReusableComponent/Input';
import * as yup from 'yup';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import {useNavigation} from '@react-navigation/native';
import {Loader} from '../../Components/ReusableComponent/Loader';
import InteractParagraph from '../../Components/ReusableComponent/Paragraph';
import {postRequestWithToken} from '../../App/fetch';
import {BASE_URL} from '../../App/api';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const ChangeForgetPassword = ({route}) => {
  const [passHide, setPassHide] = useState(false);
  const [loading, setLoading] = useState(false);
  const [valuePass, onChangeTextPass] = useState('');
  const [valueConfirmPass, onChangeTextConfirmPass] = useState('');
  const [error, onChangeError] = useState('');
  // console.log('dd', route.params)

  let loginValidationScheme = yup.object().shape({
    password: yup
      .string()
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required '),
  });

  const simpleLogin = value => {
    console.log('Values: ', value);
  };
  const Navigation = useNavigation();
  // console.log('route.params at password change', route.params);
  function hasValidPassword(password) {
    // Password must be at least 8 characters long
    if (password.length < 8) {
      return false;
    }

    // Check for at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
      return false;
    }

    // Check for at least one lowercase letter
    if (!/[a-z]/.test(password)) {
      return false;
    }

    // Check for at least one digit
    if (!/\d/.test(password)) {
      return false;
    }

    // Check for at least one special character (non-alphanumeric)
    if (!/[^A-Za-z0-9]/.test(password)) {
      return false;
    }

    return true;
  }

  function updatePassword() {
    if (valuePass !== '') {
      if (valueConfirmPass !== '') {
        if (valuePass === valueConfirmPass) {
          if (hasValidPassword(valuePass)) {
            console.log('valuePass: ', valuePass);
            console.log('valueConfirmPass: ', valueConfirmPass);
            console.log('Match');

            var formdataUpdatePasswrod = new FormData();
            formdataUpdatePasswrod.append('new_password', valuePass);

            setLoading(true);
            postRequestWithToken(
              `${BASE_URL}/users/update-password/`,
              formdataUpdatePasswrod,
              route.params,
            )
              .then(result => {
                console.log(result);
                Alert.alert('Success', 'Password updated successfully');
                setLoading(false);
                Navigation.navigate('login');
              })
              .catch(error => {
                console.log('error', error);
                setLoading(false);
              });
          } else {
            console.log('Not Match');
            onChangeError(
              'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.',
            );
          }
        } else {
          console.log('Not Match');
          onChangeError('Password and confirm Password do not match');
        }
      } else {
        onChangeError('Confirm Password should not be Empty');
      }
    } else {
      onChangeError('Password cannot be empty');
    }
  }
  return (
    <>
      {/* <SafeArea> */}
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
              <ImageBackground
                source={require('../../Assets/Images/EAA/backgroundImg.png')}
                resizeMode="cover"
                style={{flex: 1}}>
                <ScrollView
                  contentContainerStyle={{
                    flexGrow: 1,
                    marginTop: Platform.OS === 'ios' ? '10%' : 6,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: '8%',
                      marginHorizontal: '5%',
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
                          <AntDesign name="left" size={20} color={'#FFFFFF'} />
                        </View>
                      </View>
                    </Pressable>
                  </View>

                  <View
                    style={{
                      // justifyContent: 'space-between',
                      flexGrow: 1,
                      marginHorizontal: '2%',
                      padding: 15,
                      paddingTop: -15,
                      borderRadius: 15,
                      // marginTop: '15%',
                    }}>
                    <View style={{paddingBottom: 10}}>
                      <Heading
                        Stylefont={'normal'}
                        Fontweight={600}
                        Fontsize={24}
                        txtAlign={'center'}
                        // p={10}
                        lh={24}
                        Heading={'Reset Password'}
                        color={'#FFFFFF'}
                        ls={-0.446}

                      />
                    </View>
                    <View style={{marginBottom: '11%', marginHorizontal: '10%'}}>
                      <Heading
                        Fontsize={16}
                        txtAlign={'center'}
                        Heading={
                          'Please enter your new password to reset password.'
                        }
                        color={'#FFF'}
                        lh={20}
                        ls={-0.446}
                        Fontweight={500}
                        // width={2/00}
                      />
                    </View>
                    <View>
                      <View>
                        <Input
                          title={'Password'}
                          urlImg={require('../../Assets/Images/EAA/lock.png')}
                          placeholder={'New Password'}
                          pass={'true'}
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
                              fontFamily: 'GeneralSans-Variable'
                            }}>
                            {errors.password}
                          </Text>
                        )}
                      </View>

                      <View style={{marginTop: '4.5%', marginBottom: '5%'}}>
                        <Input
                          title={'Re-type Password'}
                          urlImg={require('../../Assets/Images/EAA/lock.png')}
                          placeholder={'Confirm Password'}
                          pass={'true'}
                          value={valueConfirmPass}
                          onChangeText={onChangeTextConfirmPass}
                        />
                        {errors.confirmPassword && touched.confirmPassword && (
                          <Text
                            style={{
                              fontSize: 12,
                              color: 'red',
                              marginTop: 5,
                              marginBottom: 5,
                              marginLeft: 15,
                              fontFamily: 'GeneralSans-Variable'
                            }}>
                            {errors.confirmPassword}
                          </Text>
                        )}
                      </View>
                    </View>

                    <View
                      style={{
                        justifyContent: 'center',
                        alignContent: 'center',
                        flexDirection: 'row',
                        marginTop: '6%',
                      }}>
                      <ButtonComp
                        btnwidth={'97%'}
                        btnHeight={56}
                        btnText={'Confirm'}
                        justify={'center'}
                        align={'center'}
                        fontSize={16}
                        radius={15}
                        txtwidth={'100%'}
                        //   txtColor={COLORS.white}
                        //   color={isValid ? COLORS.primary : COLORS.border_color}
                        // enable={!isValid}
                        press={() => {
                          Navigation.navigate('login');
                          // updatePassword();
                        }}
                        // bgcolor={'#BA7607'}
                      />
                    </View>
                  </View>
                </ScrollView>
              </ImageBackground>
            )}
          </>
        )}
      </Formik>
      {/* </SafeArea> */}
    </>
  );
};
