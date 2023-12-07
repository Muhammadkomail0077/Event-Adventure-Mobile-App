import {Formik} from 'formik';
import React, {useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {ActivityIndicator, Text} from 'react-native-paper';
import ButtonComp from '../../Components/ReusableComponent/Button';
import Heading from '../../Components/ReusableComponent/Heading';
import Input from '../../Components/ReusableComponent/Input';
import * as yup from 'yup';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import {GoogleAuth} from '../../Components/GoogleAuth';
import {FaceBookAuth} from '../../Components/FaceBook';
import {AudioRecording} from '../../Components/AudioRecording';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import InteractParagraph from '../../Components/ReusableComponent/Paragraph';
import {Loader} from '../../Components/ReusableComponent/Loader';
import {postRequest} from '../../App/fetch';
import {BASE_URL} from '../../App/api';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [valueEmail, onChangeTextEmail] = useState('');
  const [error, onChangeError] = useState('');

  let loginValidationScheme = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email address is required '),
  });

  const simpleLogin = value => {
    console.log('Values: ', value);
  };

  const Navigation = useNavigation();

  function isValidEmail(valueEmail) {
    const emailPattern = /^[a-z][^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(valueEmail);
  }

  function ForgetPassword() {
    if (valueEmail.trim() === '') {
      onChangeError('Email cannot be empty.');
    } else if (!isValidEmail(valueEmail)) {
      onChangeError('Enter valid email');
    } else {
      // onChangeError('');
      // Navigation.navigate('OtpScreen', {
      //   screenName: 'ForgotPassword',
      // });
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
            formdata.append('email', valueEmail);

            setLoading(true);
            postRequest(`${BASE_URL}/users/registration/resend-otp/`, formdata)
              .then(result => {
                console.log(result);
                setLoading(false);
                if (result.success) {
                  // const data = {
                  //   valueEmail: valueEmail,
                  // };
                  Navigation.navigate('OtpScreen', {
                    screenName: 'ForgotPassword',
                    valueEmail: valueEmail,
                  });
                }
              })
              .catch(error => {
                console.log('error', error);
                Alert.alert('Error', 'Something went wrong please try again');
                setLoading(false);
              });
          } else {
            setLoading(false);
            onChangeError("Account Doesn't Exists");
          }
        })
        .catch(error => {
          setLoading(false);
          console.log('error', error);
          onChangeTextEmail('');
        });
      onChangeError('');
    }
  }

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
                    <View
                      style={{
                        width: '80%',
                        // alignItemss: 'center',
                        marginLeft: 20,
                        textAlign: 'center',
                      }}>
                      {error && (
                        <>
                          <InteractParagraph
                            p={error}
                            color={'red'}
                            txtAlign={'center'}
                          />
                        </>
                      )}
                    </View>
                  </View>
                  <View style={{alignItems: 'center'}}></View>
                  <View
                    style={{
                      flexGrow: 1,
                      marginHorizontal: '5%',
                      // padding: 1,
                      borderRadius: 15,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginHorizontal: 35,
                        marginBottom: 10,
                      }}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 24,
                          color: '#FFF',
                          fontFamily: 'GeneralSans-Variable'
                        }}>
                        Forgot Password
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        width: '65%',
                        alignContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: 15,
                          color: '#FFF',
                          textAlign: 'center',
                          letterSpacing: -0.446,
                          fontFamily: 'GeneralSans-Variable'
                        }}>
                        Please enter your email to reset your password.
                      </Text>
                    </View>

                    <View>
                      <View style={{marginBottom: '1%', marginTop: '14%', borderColor: 'rgba(255, 255, 255, 1)', borderWidth: 1, borderRadius: 20,}}>
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
                              fontFamily: 'GeneralSans-Variable'
                            }}>
                            {errors.email}
                          </Text>
                        )}
                      </View>
                    </View>

                    <View
                      style={{
                        justifyContent: 'center',
                        alignContent: 'center',
                        flexDirection: 'row',
                        marginVertical: '9%',
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
                        press={() => {
                          // ForgetPassword();
                          Navigation.navigate('OtpScreen')
                        }}
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

const styles = StyleSheet.create({
  line: {
    height: 8,
    flexDirection: 'row',
  },
  colorSection: {
    flex: 1,
  },
});
