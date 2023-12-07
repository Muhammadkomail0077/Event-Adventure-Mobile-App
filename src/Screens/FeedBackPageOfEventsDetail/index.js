import React, {useState} from 'react';
import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {Text} from 'react-native-paper';
import ButtonComp from '../../Components/ReusableComponent/Button';
import { useNavigation } from '@react-navigation/native';

export const FeedBackPageOfEventsDetail = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const [modalVisible, setModalVisible] = useState(false);

  const Navigation = useNavigation();

  return (
    <>
      <Modal animationType="none" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../Assets/Images/EAA/timer2.png')}
                style={{width: 90, height: 90}}
                resizeMode="contain"
              />
            </View>
            <View style={{alignContent: 'center'}}>
              <Text style={{fontWeight: '600', fontSize: 24}}>
                Feedback Has been Send
              </Text>
            </View>

            <View
              style={{
                justifyContent: 'center',
                alignContent: 'center',
                flexDirection: 'row',
                marginVertical: '6%',
                marginHorizontal: 15,
              }}>
              <ButtonComp
                btnwidth={'97%'}
                btnHeight={56}
                btnText={'Done'}
                justify={'center'}
                align={'center'}
                fontSize={16}
                radius={15}
                txtwidth={'100%'}
                bgColor={'#D53A1D'}
                //   txtColor={COLORS.white}
                //   color={isValid ? COLORS.primary : COLORS.border_color}
                // enable={!isValid}
                press={() => {
                  // Navigation.navigate('login');
                  // updatePassword();
                  setModalVisible(true);
                  Navigation.navigate('Home');
                }}
                // bgcolor={'#BA7607'}
              />
            </View>
          </View>
        </View>
      </Modal>

      <View style={{marginTop: '10%'}}>
        <View
          style={{
            alignContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}>
          <View
            style={{
              width: '70%',
              alignItems: 'center',
              alignContent: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 600,
                lineHeight: 28,
                textAlign: 'center',
              }}>
              HOW WAS YOUR EXPERIENCE WITH THE EVENT?
            </Text>
          </View>

          <View>
            <Image
              source={require('../../Assets/Images/EAA/Bitmap.png')}
              style={{width: 120, height: 120}}
            />
          </View>

          <View
            style={{
              width: '70%',
              alignItems: 'center',
              alignContent: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 600,
                lineHeight: 28,
                textAlign: 'center',
              }}>
              Give A Stars
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../Assets/Images/EAA/StarFilled.png')}
              style={{width: 35, height: 40}}
            />
            <Image
              source={require('../../Assets/Images/EAA/StarFilled.png')}
              style={{width: 35, height: 40}}
            />
            <Image
              source={require('../../Assets/Images/EAA/StarFilled.png')}
              style={{width: 35, height: 40}}
            />
            <Image
              source={require('../../Assets/Images/EAA/StarFilled.png')}
              style={{width: 35, height: 40}}
            />
            <Image
              source={require('../../Assets/Images/EAA/StarFilled.png')}
              style={{width: 35, height: 40}}
            />
            <Image
              source={require('../../Assets/Images/EAA/StarFilled.png')}
              style={{width: 35, height: 40}}
            />
            <Image
              source={require('../../Assets/Images/EAA/StarFilled.png')}
              style={{width: 35, height: 40}}
            />
            <Image
              source={require('../../Assets/Images/EAA/StarFilled.png')}
              style={{width: 35, height: 40}}
            />
            <Image
              source={require('../../Assets/Images/EAA/StarFilled.png')}
              style={{width: 35, height: 40}}
            />
            <Image
              source={require('../../Assets/Images/EAA/StarFilled.png')}
              style={{width: 35, height: 40}}
            />
          </View>
        </View>

        <View
          style={{
            marginVertical: 10,
            backgroundColor: '#E4E4E4',
            marginHorizontal: 15,
            padding: 20,
            borderRadius: 20,
            borderColor: '#BBBBBB',
            borderWidth: 1,
          }}>
          <TextInput
            onChangeText={title}
            value={setTitle}
            style={{
              // width: '80%',
              color: 'black',
              fontSize: 16,
              letterSpacing: -0.446,
              fontWeight: 500,
            }}
            placeholder={'Title'}
            placeholderTextColor={'black'}
          />
        </View>

        <View
          style={{
            marginVertical: 10,
            backgroundColor: '#E4E4E4',
            marginHorizontal: 15,
            padding: 20,
            borderRadius: 20,
            borderColor: '#BBBBBB',
            borderWidth: 1,
            //   paddingBottom:100
            height: 150,
          }}>
          <TextInput
            multiline
            numberOfLines={1}
            onChangeText={message}
            value={setMessage}
            style={{
              // width: '80%',
              color: 'black',
              fontSize: 16,
              letterSpacing: -0.446,
              fontWeight: 500,
            }}
            placeholder={'Message'}
            placeholderTextColor={'black'}
          />
        </View>

        {/* Button General Discussion */}
        <View
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            flexDirection: 'row',
            marginTop: '6%',
            marginHorizontal: 15,
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
            //   txtColor={COLORS.white}
            //   color={isValid ? COLORS.primary : COLORS.border_color}
            // enable={!isValid}
            press={() => {
              // Navigation.navigate('login');
              // updatePassword();
              setModalVisible(true);
            }}
            // bgcolor={'#BA7607'}
          />
        </View>
      </View>
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
    width: '90%',
    height: '35%',
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
