import React, {useEffect, useState} from 'react';
import {Alert, FlatList, Image, Pressable, View} from 'react-native';
import COLORS from '../../Assets/Style/Color';
import Heading from '../../Components/ReusableComponent/Heading';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView} from 'react-native-gesture-handler';
import {ActivityIndicator, Text, TextInput} from 'react-native-paper';
import Input from '../../Components/ReusableComponent/Input';
import {Formik} from 'formik';
import * as yup from 'yup';
import ButtonComp from '../../Components/ReusableComponent/Button';
import {useRef} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icons from 'react-native-vector-icons/MaterialIcons';
import InteractParagraph from '../../Components/ReusableComponent/Paragraph';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  getDataFromAsync,
  removeDataToAsync,
  setDataToAsync,
} from '../../Utils/getAndSetAsyncStorage';
import {userDataFromAsyncStorage} from '../../Store/Reducers/AuthReducer';
import {useSelector} from 'react-redux';
import {BASE_URL} from '../../App/api';
import {useDispatch} from 'react-redux';
import {Loader} from '../../Components/ReusableComponent/Loader';
import {
  getRequestWithCookie,
  postRequestWithTokenAndCookie,
} from '../../App/fetch';
import Head from '../../Components/ReusableComponent/Head';
import DropdownComponent from '../../Components/ReusableComponent/DropDown';
import CheckBox from '@react-native-community/checkbox';

export const EditProfile = () => {
  const Navigation = useNavigation();
  // const dataFromRedux = useSelector(state => state.AuthReducer);
  // const AuthReducer = useSelector(state => state.AuthReducer.userData);
  // console.log(
  //   'AuthReducer?.user?.profile?.profile_pic: ',
  //   AuthReducer?.user?.profile?.profile_pic,
  // );
  const [loading, setLoading] = useState(false);

  const [firstname, setFirstname] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('gender');
  const [location, setLocation] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [interest, setInterest] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  let GenderType = [
    {
      label: 'Male',
      value: 'Male',
    },
    {
      label: 'Female',
      value: 'Female',
    },
  ];

  // const dispatch = useDispatch();

  // console.log('data from redux on edit profile ', AuthReducer.user);

  // useEffect(() => {
  //   if (AuthReducer.user) {
  //     setLoading(true);
  //     setLocalFullName(AuthReducer.user.profile.display_name);
  //     onChangePhoneNumber(AuthReducer.user.profile.telephone);
  //     onChangeAddress(AuthReducer.user.profile.street);
  //     setLoading(false);
  //   }
  // }, [dataFromDb]);

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

  const rbSheetRef = useRef();

  const openGallery = () => {
    let option = {
      include64: true,
      mediaType: 'photo',
    };
    launchImageLibrary(option, res => {
      console.log(res);
      if (res.assets) {
        // setBanner(res.assets[0].uri);
        console.log('library Image');
        console.log(res.assets[0].uri);
        onChangeProfileImage(res.assets[0].uri);
        UpploadProfileImage(res.assets[0].uri);
        // rbSheetRef.current.close();
        // setIsImageUpload(true);
      } else if (res.didCancel) {
        console.log('cancel');
        console.log(res.didCancel);
      }
    });
  };

  const openCamera = () => {
    let option = {
      include64: true,
      mediaType: 'photo',
    };
    launchCamera(option, res => {
      console.log(res);
      if (res.assets) {
        // setBanner(res.assets[0].uri);
        console.log('lCamera Img');
        console.log(res.assets[0].uri);
        onChangeProfileImage(res.assets[0].uri);
        UpploadProfileImage(res.assets[0].uri);
        // rbSheetRef.current.close();
        // setIsImageUpload(true);
      } else if (res.didCancel) {
        console.log('cancel');
        console.log(res.didCancel);
      }
    });
  };

  const validateFields = (
    localFullName,
    // valueEmail,
    valuePhoneNumber,
    valueAddress,
    // profileImage,
  ) => {
    // Validation for Full Name
    if (!localFullName.trim()) {
      onChangeError('Full Name is empty.');
      return false;
    }

    // Validation for Phone Number
    const phoneNumberPattern = /^\(\d{3}\) \d{3}-\d{4}$/;
    if (!valuePhoneNumber.trim()) {
      onChangeError('Phone Number is empty.');
      return false;
    } else if (!phoneNumberPattern.test(valuePhoneNumber)) {
      onChangeError('Invalid Phone Number format.');
      return false;
    }

    // Validation for Address
    if (!valueAddress.trim()) {
      onChangeError('Address is empty.');
      return false;
    }

    // All fields are valid
    return true;
  };

  // function EditProfile() {
  //   const isValid = validateFields(
  //     localFullName,
  //     // valueEmail,
  //     valuePhoneNumber,
  //     valueAddress,
  //     // profileImage,
  //   );
  //   console.log('isValid: ', isValid);
  //   if (isValid) {
  //     onChangeError('');

  //     var formdataProfile = new FormData();

  //     formdataProfile.append('email', AuthReducer.user.email);
  //     formdataProfile.append('display_name', localFullName);
  //     formdataProfile.append('telephone', valuePhoneNumber);
  //     formdataProfile.append('street', valueAddress);

  //     setLoading(true);

  //     postRequestWithTokenAndCookie(
  //       `${BASE_URL}/users/update-user-profile/`,
  //       formdataProfile,
  //       AuthReducer.token,
  //     )
  //       .then(result => {
  //         console.log('result', result);

  //         setLoading(true);

  //         getRequestWithCookie(
  //           `${BASE_URL}/users/user-profile/`,
  //           AuthReducer.token,
  //         )
  //           .then(result => {
  //             console.log(result);
  //             setLoading(false);

  //             setDataToAsync('user', JSON.stringify(result));

  //             getDataFromAsync('user')
  //               .then(res => {
  //                 dispatch(userDataFromAsyncStorage(JSON.parse(res)));

  //               })
  //               .catch(err => {
  //                 console.log('Error From getting from local storage: ', err);
  //               });
  //           })
  //           .catch(error => {
  //             console.log('error', error);
  //             setLoading(false);
  //           });
  //         setLoading(false);
  //         Navigation.goBack();
  //       })
  //       .catch(error => {
  //         console.log('error', error);
  //         setLoading(false);
  //       });
  //     onChangeError('');
  //   } else {
  //   }
  // }

  // function UpploadProfileImage(imgUrl) {
  //   console.log('imgUrl: ', imgUrl);

  //   var formdata = new FormData();
  //   formdata.append(`media_file`, {
  //     uri: imgUrl,
  //     type: 'image/jpeg',
  //     name: 'image.jpg',
  //   });
  //   formdata.append('title', 'big data');
  //   formdata.append('is_active', 'true');
  //   formdata.append('file_type', 'Profile Pictures');
  //   formdata.append('description', 'profile pictures details ...');

  //   console.log('formdata: ', formdata);

  //   setLoading(true);

  //   postRequestWithTokenAndCookie(
  //     `${BASE_URL}/users/upload/media-file/`,
  //     formdata,
  //     AuthReducer.token,
  //   )
  //     .then(result => {
  //       console.log(result);

  //       setLoading(true);
  //       getRequestWithCookie(
  //         `${BASE_URL}/users/user-profile/`,
  //         AuthReducer.token,
  //       )
  //         .then(result => {
  //           console.log(result);
  //           setLoading(false);

  //           setDataToAsync('user', JSON.stringify(result));

  //           getDataFromAsync('user')
  //             .then(res => {
  //               dispatch(userDataFromAsyncStorage(JSON.parse(res)));
  //             })
  //             .catch(err => {
  //               console.log('Error From getting from local storage: ', err);
  //             });
  //         })
  //         .catch(error => {
  //           console.log('error', error);
  //           setLoading(false);
  //         });
  //       setLoading(false);
  //     })
  //     .catch(error => {
  //       console.log('error', error);
  //       setLoading(false);
  //       Alert.alert('Error', 'Something went wrong please try again');
  //     });
  // }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
              <SafeArea>
                <ScrollView>
                  <View style={{marginTop: '0%'}}>
                    <Head head={'Update Profile'} />

                    <View
                      style={{
                        alignSelf: 'center',
                        marginTop: '8%',
                        marginBottom: '8%',
                      }}>
                      <Image
                        source={require('../../Assets/Images/EAA/profileImage.png')}
                        style={{
                          width: 140,
                          height: 140,
                          borderRadius: 75,
                        }}
                      />
                      <Pressable
                        onPress={() => {
                          console.log('log');
                          // rbSheetRef.open();
                          // rbSheetRef.current.open();
                        }}
                        style={{
                          position: 'absolute',
                          alignSelf: 'flex-end',
                          backgroundColor: 'white',
                          marginTop: 100,
                          // width: 45,
                          // height: 45,
                          padding: 5,
                          alignContent: 'center',
                          alignItems: 'center',
                          borderRadius: 20,
                          shadowColor: '#000',
                          shadowOffset: {
                            width: 0,
                            height: 1,
                          },
                          shadowOpacity: 0.1,
                          shadowRadius: 4.65,
                          elevation: 2,
                        }}>
                        <Image
                          source={require('../../Assets/Images/EAA/camera.png')}
                          style={{
                            width: 28,
                            height: 28,
                            // padding: 20,
                          }}
                        />
                      </Pressable>
                    </View>

                    <View style={{marginHorizontal: 15}}>
                      <View style={{marginVertical: 10}}>
                        <Input
                          urlImg={require('../../Assets/Images/EAA/profile.png')}
                          placeholder={'First Name'}
                          value={firstname}
                          onChangeText={setFirstname}
                          bgColor={'#E4E4E4'}
                          color={'#353535'}
                        />
                      </View>

                      <View style={{marginVertical: 4}}>
                        <Input
                          urlImg={require('../../Assets/Images/EAA/profile.png')}
                          placeholder={'Last Name'}
                          value={lastName}
                          onChangeText={setLastName}
                          bgColor={'#E4E4E4'}
                          color={'#353535'}
                        />
                      </View>

                      <View style={{marginVertical: 4}}>
                        <Input
                          urlImg={require('../../Assets/Images/EAA/calendar2.png')}
                          placeholder={'Date of Birth'}
                          value={dob}
                          onChangeText={setDob}
                          bgColor={'#E4E4E4'}
                          color={'#353535'}
                        />
                      </View>

                      <View style={{marginVertical: 10}}>
                        <DropdownComponent
                          data={GenderType}
                          defaultValue={'Select Gender'}
                          value={gender}
                          setValue={setGender}
                        />
                      </View>

                      <View style={{marginVertical: 4}}>
                        <Input
                          urlImg={require('../../Assets/Images/EAA/location2.png')}
                          placeholder={'Location'}
                          value={location}
                          onChangeText={setLocation}
                          bgColor={'#E4E4E4'}
                          color={'#353535'}
                        />
                      </View>

                      <View
                        style={{
                          marginVertical: 4,
                          // justifyContent: 'center',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <View style={{width: '48%'}}>
                          <Input
                            urlImg={require('../../Assets/Images/EAA/location2.png')}
                            placeholder={'City'}
                            value={city}
                            onChangeText={setCity}
                            bgColor={'#E4E4E4'}
                            color={'#353535'}
                            halfSpace={true}
                          />
                        </View>

                        <View style={{width: '48%'}}>
                          <Input
                            urlImg={require('../../Assets/Images/EAA/location2.png')}
                            placeholder={'State'}
                            value={state}
                            onChangeText={setState}
                            bgColor={'#E4E4E4'}
                            color={'#353535'}
                            halfSpace={true}
                          />
                        </View>
                      </View>

                      <View style={{marginVertical: 4}}>
                        <Heading
                          Heading={'Interests'}
                          Fontsize={18}
                          color={'black'}
                          // Fontweight={'bold'}
                          lh={40}
                          mv={5}
                          // pv={5}
                        />
                        <Input
                          urlImg={require('../../Assets/Images/EAA/location2.png')}
                          placeholder={'Music, Fitness, Traveling'}
                          value={interest}
                          onChangeText={setInterest}
                          bgColor={'#E4E4E4'}
                          color={'#353535'}
                        />
                      </View>

                      <View style={{marginVertical: 4, flex: 1}}>
                        <Heading
                          Heading={'About Me'}
                          Fontsize={18}
                          color={'black'}
                          // Fontweight={'bold'}
                          lh={40}
                          // mv={0}
                          // pv={5}
                        />

                        <TextInput
                          onChangeText={setAboutMe}
                          value={aboutMe}
                          placeholder={'Descriptions'}
                          placeholderTextColor={'black'}
                          textAlignVertical="top" // This will vertically align text to the top
                          multiline
                          numberOfLines={5}
                          style={{
                            marginTop: 16,
                            borderWidth: 1,
                            borderColor: '#ccc',
                            borderRadius: 10,
                            // padding: 8,
                            height: 120,
                            backgroundColor: '#E4E4E4',
                          }}
                          underlineColor="transparent"
                          activeUnderlineColor="transparent"
                          underlineColorAndroid={'transparent'}
                        />
                      </View>

                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginTop: '2%',
                          // marginHorizontal: 5,
                          // marginBottom: 20,
                          // justifyContent: 'space-between',
                        }}>
                        <View
                          style={{
                            borderRadius: 5,
                            overflow: 'hidden',
                            flexDirection: 'row',
                            // marginHorizontal: 15,
                            borderColor: '#D43D1C',
                            borderWidth: 1,
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
                              // backgroundColor: '#FFF',
                              width: 20, // Set your desired width
                              height: 20, // Set your desired height
                            }}
                          />
                        </View>
                        <View>
                          <Text
                            style={{
                              color: '#353535',
                              fontSize: 16,
                              fontFamily: 'GeneralSans-Variable',
                              fontStyle: 'normal',
                              fontWeight: '500',
                              // lineHeight: 24, /* 150% */
                              letterSpacing: -0.446,
                            }}>
                            {'   '}By continuing you accept our Privacy Policy.
                          </Text>
                        </View>
                      </View>

                      <View
                        style={{
                          justifyContent: 'center',
                          alignContent: 'center',
                          flexDirection: 'row',
                          marginTop: '10%',
                          marginHorizontal: 20,
                        }}>
                        <ButtonComp
                          btnwidth={'97%'}
                          btnHeight={56}
                          btnText={'Update Profile'}
                          justify={'center'}
                          align={'center'}
                          fontSize={16}
                          radius={15}
                          txtwidth={'100%'}
                          bgColor={'#D53A1D'}
                          txtColor={'#FFFFFF'}
                          press={() => {
                            Navigation.navigate('Profile');
                            //   updatePassword();
                            // setModalVisible2(true);
                          }}
                        />
                      </View>
                    </View>
                  </View>
                </ScrollView>
              </SafeArea>
            )}
          </Formik>

          <RBSheet
            ref={rbSheetRef}
            height={100}
            openDuration={250}
            customStyles={{
              container: {
                justifyContent: 'center',
                alignItems: 'center',
                borderTopEndRadius: 25,
                borderTopStartRadius: 25,
              },
            }}>
            <View
              style={{
                alignItems: 'flex-start',
                margin: '8%',
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Pressable
                  style={{
                    width: 45,
                    height: 45,
                    backgroundColor: COLORS.primary,
                    borderRadius: 25,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={openCamera}>
                  <Icons name="photo-camera" color={'#fff'} size={30} />
                </Pressable>
                <InteractParagraph p={'Camera'} />
              </View>
              <View
                style={{
                  marginLeft: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Pressable
                  style={{
                    width: 45,
                    height: 45,
                    backgroundColor: COLORS.primary,
                    borderRadius: 60,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={openGallery}>
                  <Icons name="photo-library" color={'#fff'} size={30} />
                </Pressable>
                <InteractParagraph p={' Gallery'} />
              </View>
            </View>
          </RBSheet>
        </>
      )}
    </>
  );
};
