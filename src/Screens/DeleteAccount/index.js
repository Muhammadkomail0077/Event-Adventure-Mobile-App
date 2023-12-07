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
import {Button, Text, TextInput} from 'react-native-paper';
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
import {ModalWithButton} from '../../Components/ReusableComponent/ModalWithButton';

export const DeleteAccount = () => {
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
      <ModalWithButton
        set={setModalVisible}
        get={modalVisible}
        txt={'Request Submit'}
        paratxt={
          'The request have been Submitted to the admin for deleting your account. Our Representative will contact you shortly.'
        }
        done={() => {
          setModalVisible(false);
          //   route.params.screenName == 'MyCards'
          //     ? Navigation.navigate('MyCards', {
          //         prevName: 'AddCard',
          //       })
          //     : setSecondModal(true);
          Navigation.navigate('login')
        }}
        btntxt={'Done'}
      />
      <View
        style={{
          flexDirection: 'column',
          // justifyContent: 'space-between',
          flex: 1,
          marginVertical: '8%',
          backgroundColor: '#FFF'
        }}>
        <View
          style={{
            marginBottom: 20,
            marginTop: Platform.OS === 'ios' ? 40 : '-5%',
          }}>
          <Head head={'Delete Account'} />
        </View>
        {/* <SafeArea> */}
        <View
          style={{
            marginHorizontal: '6%',
            marginTop: 15,
            borderWidth: 0.8,
            borderColor: '#F6F6F6',
          }}></View>
        <ScrollView>
          <View style={{marginTop: '8%'}}>
            <Heading
              Stylefont={'normal'}
              Fontweight={500}
              Fontsize={18}
              Heading={'Reason'}
              color={'black'}
              lh={24}
              ls={-0.45}
              ml={24}
            />
            <View
              style={{
                width: 342,
                height: 156,
                backgroundColor: 'rgba(228, 228, 228, 0.5)',
                marginHorizontal: '6%',
                borderRadius: 20,
                marginTop: 20,
                borderColor: 'rgba(187, 187, 187, 0.5)',
                borderWidth: 1,
              }}>
              <TextInput
                editable={false}
                multiline={true}
                style={{
                  // width: '85%',
                  // color: '#1C1C1C',
                  backgroundColor: 'transparent',
                  // marginBottom: -3,
                  // marginLeft: 3,
                  fontSize: 16,
                  // height: 156,
                  // marginTop: -45,
                  padding: 2,
                  letterSpacing: -0.446,
                  fontWeight: 500
                  // lineHeight: 24,
                }}
                placeholder="Descriptions"
                placeholderTextColor={'#353535'}
                activeUnderlineColor={'transparent'}
                underlineColorAndroid={'transparent'}
                underlineColor={'transparent'}
                // secureTextEntry={props.pass && !props.dob ? notPressed : false}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: '10%',
                marginTop: 24,
              }}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  borderWidth: 0.4,
                  //   marginRight: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 350,
                  height: 64,
                  borderRadius: 20,
                  backgroundColor: '#D53A1D',
                }}
                onPress={() => {
                  //   Navigation.navigate('DeleteAccount')
                  setModalVisible(!modalVisible);
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 14,
                    fontWeight: 'bold',
                    fontFamily: 'GeneralSans-Variable'
                  }}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};
