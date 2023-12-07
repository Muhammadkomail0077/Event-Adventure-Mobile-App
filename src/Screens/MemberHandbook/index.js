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

export const MemberHandbook = () => {
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
      <View
        style={{
          flexDirection: 'column',
          // justifyContent: 'space-between',
          flex: 1,
          paddingVertical: '8%',
          backgroundColor: '#FFF'
        }}>
        <View
          style={{
            // marginBottom: 20,
            marginTop: Platform.OS === 'ios' ? 40 : '-5%',
          }}>
          <Head head={'Member Handbook'} />
        </View>
        <View style={{borderColor: 'rgba(246, 246, 246, 0.5)', width: '90%', height: 1, borderWidth: 1, marginTop: 30, marginBottom: 0, marginRight: 'auto',
              marginLeft: 'auto',}}></View>
        {/* <SafeArea> */}
          <ScrollView>
            <View style={{marginHorizontal: '5%'}}>
              <Pressable
                onPress={() => {
                  Navigation.navigate('MemberHandbook1');
                }}>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    // backgroundColor: 'rgba(228, 228, 228, 0.5)',
                    width: '100%',
                    marginTop: 30,
                    padding: Platform.OS === 'ios' ? 13 : 7,
                    borderColor: 'rgba(187, 187, 187, 0.5)',
                    borderRadius: 20,
                    borderWidth: 1,
                    height: 56,
                  }}>
                  <View style={{paddingLeft: 10}}>
                    <Heading
                      Heading={'25 Tips For New Members'}
                      Fontsize={16}
                      color={'black'}
                      txtAlign={'center'}
                      mt={Platform.OS === 'ios' ? 4 : 2}
                      ml={2}
                      Fontweight={500}
                      // lh={24}
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
                  Navigation.navigate('MemberHandbook2');
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
                      Heading={'Events'}
                      Fontsize={16}
                      color={'black'}
                      txtAlign={'center'}
                      mt={Platform.OS === 'ios' ? 4 : 2}
                      ml={2}
                      Fontweight={500}
                      // lh={24}
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
                  Navigation.navigate('MemberHandbook3');
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
                      Heading={'Sports'}
                      Fontsize={16}
                      color={'black'}
                      txtAlign={'center'}
                      mt={Platform.OS === 'ios' ? 4 : 2}
                      ml={2}
                      Fontweight={500}
                      // lh={24}
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
                  Navigation.navigate('MemberHandbook4');
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
                      Heading={'Guidelines and Policies'}
                      Fontsize={16}
                      color={'black'}
                      txtAlign={'center'}
                      mt={Platform.OS === 'ios' ? 4 : 2}
                      ml={2}
                      Fontweight={500}
                      // lh={24}
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
                  Navigation.navigate('MemberHandbook5');
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
                      Heading={'Browser Best Practices'}
                      Fontsize={16}
                      color={'black'}
                      txtAlign={'center'}
                      mt={Platform.OS === 'ios' ? 4 : 2}
                      ml={2}
                      Fontweight={500}
                      // lh={24}
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

            </View>
          </ScrollView>
      </View>
      
    </>
  );
};

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: '#25241C',
    opacity: 0.9,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
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