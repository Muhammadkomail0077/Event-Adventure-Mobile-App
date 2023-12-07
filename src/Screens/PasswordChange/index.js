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
import COLORS from '../../Assets/Style/Color';
import ButtonComp from '../../Components/ReusableComponent/Button';
import Heading from '../../Components/ReusableComponent/Heading';
import Input from '../../Components/ReusableComponent/Input';
import * as yup from 'yup';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import {useNavigation} from '@react-navigation/native';
import {Loader} from '../../Components/ReusableComponent/Loader';
import InteractParagraph from '../../Components/ReusableComponent/Paragraph';
import {BASE_URL} from '../../App/api';
import {postRequestWithToken} from '../../App/fetch';
import Head from '../../Components/ReusableComponent/Head';
import SecondInput from '../../Components/ReusableComponent/SecondInput';

export const PasswordChange = ({route}) => {
  const [passHide, setPassHide] = useState(false);
  const [loading, setLoading] = useState(false);
  const [valuePass, onChangeTextPass] = useState('');
  const [valueConfirmPass, onChangeTextConfirmPass] = useState('');
  const [error, onChangeError] = useState('');

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
                Navigation.navigate('Settings');
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
      onChangeError('Password should not be Empty');
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
              <ScrollView contentContainerStyle={{flexGrow: 1, backgroundColor: '#FFF'
            }}>
                {/* <ImageBackground
                  source={require('../../Assets/Images/bg.png')}
                  resizeMode="cover"
                  style={{flex: 1}}> */}
                <View style={{marginTop: 70}}>
                  <Head head={'Change Password'} />
                </View>
                <View
                  style={{
                    // justifyContent: 'space-between',
                    flexGrow: 1,
                    marginHorizontal: '2%',
                    padding: 15,
                    borderRadius: 15,
                    marginTop: '4%',
                  }}>
                  <View>
                    <View>
                      <SecondInput
                        pass={'true'}
                        urlImg={require('../../Assets/Images/EAA/unlock.png')}
                        placeholder={'Current Password'}
                        value={valuePass}
                        onChangeText={onChangeTextPass}
                        bgColor={'rgba(228, 228, 228, 0.5)'}
                        color={'#353535'}
                        passImg={require('../../Assets/Images/EAA/eyepass.png')}
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

                    <View style={{marginTop: '4%'}}>
                      <SecondInput
                        pass={'true'}
                        urlImg={require('../../Assets/Images/EAA/unlock.png')}
                        placeholder={'New Password'}
                        value={valuePass}
                        onChangeText={onChangeTextPass}
                        bgColor={'rgba(228, 228, 228, 0.5)'}
                        color={'#353535'}
                        passImg={require('../../Assets/Images/EAA/eyepass.png')}
                      />
                      {errors.confirmPassword && touched.confirmPassword && (
                        <Text
                          style={{
                            fontSize: 12,
                            color: 'red',
                            marginTop: 5,
                            marginBottom: 5,
                            marginLeft: 15,
                          }}>
                          {errors.confirmPassword}
                        </Text>
                      )}
                    </View>
                    <View style={{marginTop: '4%', marginBottom: '5%'}}>
                      <SecondInput
                        pass={'true'}
                        urlImg={require('../../Assets/Images/EAA/unlock.png')}
                        placeholder={'Confirm Password'}
                        value={valuePass}
                        onChangeText={onChangeTextPass}
                        bgColor={'rgba(228, 228, 228, 0.5)'}
                        color={'#353535'}
                        passImg={require('../../Assets/Images/EAA/eyepass.png')}
                      />
                      {errors.confirmPassword && touched.confirmPassword && (
                        <Text
                          style={{
                            fontSize: 12,
                            color: 'red',
                            marginTop: 5,
                            marginBottom: 5,
                            marginLeft: 15,
                          }}>
                          {errors.confirmPassword}
                        </Text>
                      )}
                    </View>
                  </View>

                  <View>
                    {error && (
                      <>
                        <InteractParagraph p={error} mv={4} color={'red'} />
                      </>
                    )}
                  </View>

                  <View
                    style={{
                      justifyContent: 'center',
                      alignContent: 'center',
                      flexDirection: 'row',
                      marginTop: '6%',
                      marginHorizontal: 15
                    }}>
                    <ButtonComp
                      btnwidth={'97%'}
                      btnHeight={56}
                      btnText={'Change Password'}
                      justify={'center'}
                      align={'center'}
                      fontSize={16}
                      radius={15}
                      txtwidth={'100%'}
                      txtColor={'#FFFFFF'}
                      bgColor={'#D53A1D'}
                      color={isValid ? COLORS.primary : COLORS.border_color}
                      // enable={!isValid}
                      press={() => {
                        Navigation.navigate('Settings');
                        // updatePassword();
                      }}
                      // bgcolor={'#BA7607'}
                    />
                  </View>
                </View>
                {/* </ImageBackground> */}
              </ScrollView>
            )}
          </>
        )}
      </Formik>
      {/* </SafeArea> */}
    </>
  );
};
