import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  View,
  Modal,
  I18nManager,
  StyleSheet,
  Platform,
  SafeAreaView,
  Alert,
} from 'react-native';
import {ActivityIndicator, Button, Text} from 'react-native-paper';
import Heading from '../../Components/ReusableComponent/Heading';
import {useNavigation} from '@react-navigation/native';
import ButtonComp from '../../Components/ReusableComponent/Button';
import {ScrollView} from 'react-native-gesture-handler';
import {OtpInput} from '../../Components/Otp';
import {Loader} from '../ReusableComponent/Loader';
import LinearGradient from 'react-native-linear-gradient';
import {postRequest} from '../../App/fetch';
import {BASE_URL} from '../../App/api';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import Timer from '../Timer';

export const OtpScreen = () => {
  const Navigation = useNavigation();
  // console.log('route params: ', route.params);
  // const screenName = route.params.screenName;

  const [loading, setLoading] = useState(false);
  const [screenName, setScreenName] = useState('');
  console.log('screenName: ', screenName);

  // useEffect(() => {
  //   setScreenName(route.params.screenName);
  // }, []);

  const otpValue = useRef('');

  // const ResendOtp = () => {
  //   var formdata = new FormData();
  //   formdata.append('email', route.params.valueEmail);

  //   setLoading(true);
  //   postRequest(`${BASE_URL}/users/registration/resend-otp/`, formdata)
  //     .then(result => {
  //       console.log(result);
  //       if (result.success) {
  //         Alert.alert('Successfull', result.message);
  //       } else {
  //         Alert.alert('Error', 'Something went wrong please try again');
  //       }
  //       // Alert.alert('Successfull','Successfully send Otp')
  //       setLoading(false);
  //     })
  //     .catch(error => {
  //       console.log('error', error);
  //       Alert.alert('Error', 'Something went wrong please try again');
  //       setLoading(false);
  //     });
  // };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <ImageBackground
          source={require('../../Assets/Images/EAA/backgroundImg.png')}
          // resizeMode="cover"
          style={{flex: 1, flexGrow: 1}}>
          <ScrollView>
            {/* Header */}
            <SafeAreaView style={{flex: 1}}>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'column',
                  flex: 1,
                  // backgroundColor: 'yellow',
                  flexGrow: 1,
                  // marginVertical: '15%',
                }}>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      // marginHorizontal: '5%',
                      justifyContent: 'space-between',
                      // marginTop: Platform.OS === 'ios' ? '10%' : 0,
                      //   margin: '8%',
                      //   marginBottom: 0,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        // margin: Platform.OS === 'ios' ? '3%' : '6%',
                        // marginBottom: 0,
                        marginTop: '3.5%',
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
                            <AntDesign
                              name="left"
                              size={20}
                              color={'#FFFFFF'}
                            />
                          </View>
                        </View>
                      </Pressable>
                    </View>

                    <View>
                      <Heading
                        Stylefont={'normal'}
                        Fontweight={'bold'}
                        Fontsize={18}
                        Heading={
                          '                                                '
                        }
                        color={'black'}
                      />
                    </View>
                  </View>

                  {/* Center */}

                  <View style={{marginTop: 0, marginHorizontal: '15%'}}>
                    <Heading
                      Fontsize={24}
                      txtAlign={'center'}
                      Heading={'One Time Password'}
                      Fontweight={600}
                      color={'#FFF'}
                      mb={11}
                      ls={-0.446}
                    />
                    <Heading
                      width={'100%'}
                      Fontsize={16}
                      txtAlign={'center'}
                      Heading={
                        'We have sent you an email containing 6 digits verification code. Please enter the code to verify your identity'
                      }
                      // Fontweight={'bold'}
                      color={'#FFFFFF'}
                      ls={-0.446}
                      lh={24}
                      Fontweight={500}

                      // mb={-20}
                    />
                  </View>

                  <View style={styles.container}>
                    <OtpInput
                      otpValue={otpValue}
                      screenName={screenName}
                      // email={route.params.valueEmail}
                      // password={route.params.valuePass}
                    />
                  </View>

                  <View
                    style={{
                      marginTop: '23%',
                      alignContent: 'center',
                      alignItems: 'center',
                      marginBottom: 15
                    }}>
                    <Image
                      source={require('../../Assets/Images/EAA/TIMER.png')}
                    />
                  </View>
                </View>

                <View>
                  <View style={{marginTop: '22%',marginHorizontal:23}}>
                    <ButtonComp
                      btnText={'Verify'}
                      press={() => {
                        Navigation.navigate('ChangeForgetPassword');
                        // Login();
                      }}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: Platform.OS === 'ios' ? 22 : 20,
                      alignSelf: 'center',
                      // marginBottom: 10
                    }}>
                    <Heading
                      Fontsize={16}
                      as={'center'}
                      Heading={"Code didn't receive?"}
                      color={'#FFF'}
                      Fontweight={500}
                      lh={24}
                      ls={-0.446}
                    />
                    <Pressable
                      // onPress={() => ResendOtp()}
                      style={{marginLeft: 3}}>
                      <Heading
                        Fontsize={16}
                        // as={'center'}
                        Heading={'Resend'}
                        color={'#FFF'}
                        Fontweight={600}
                        lh={24}
                        ls={-0.446}                      />
                    </Pressable>
                  </View>
                </View>
              </View>
            </SafeAreaView>
          </ScrollView>
        </ImageBackground>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 38,
    marginBottom: 10,
    // marginHorizontal:80
  },
});
