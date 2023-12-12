import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Image, ImageBackground, Pressable, View, Modal} from 'react-native';
import Heading from '../Heading';
// import COLORS from '../../../Assets/Style/Color';
import {Button, Text} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

export const ModalView = props => {
  const handleButtonPress = () => {
    console.log('Button pressed');
  };

  // const [modalVisible, setModalVisible] = useState(true);

  let {set, get, cross, txt, no, yes, headtxt, urlImg} = props;

  return (
    <Modal animationType="none" transparent={true} visible={get}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={{marginBottom: 0, marginHorizontal: 20, paddingTop: 30}}>
            {props.icon && (
              <View
                style={{
                  alignContent: 'center',
                  alignItems: 'center',
                  marginBottom: 25,
                }}>
                <Image
                  // source={require('../../../Assets/Images/EAA/colorcalendar.png')}
                  source={urlImg}
                  style={{width: 80, height: 80}}
                />
              </View>
            )}
            <View style={{marginBottom: props.icon ? 20 : 0}}>
              <Heading
                Heading={headtxt}
                Fontsize={24}
                //   color={COLORS.dark}
                Fontweight={600}
                txtAlign={'center'}
                color={'black'}
                // lh={32.4}
                ls={-0.446}
                // width={400}
              />
            </View>
          </View>
          {props.txt && (
            <View
              style={{
                marginBottom: 20,
                marginHorizontal: 'auto',
                marginTop: 10,
              }}>
              <Heading
                Heading={txt}
                Fontsize={14}
                ls={-0.45}
                //   color={COLORS.dark}
                Fontweight={600}
                txtAlign={'center'}
                color={'rgba(112, 112, 112, 1)'}
                lh={20}
                // width={200}
              />
            </View>
          )}
          <View style={{flexDirection: 'row', marginBottom: 28}}>
            <TouchableOpacity
              style={{
                // flex: 1,
                // backgroundColor: 'rgba(187, 187, 187, 0.1)',
                borderWidth: 1,
                borderColor: '#BBB',
                // borderColor: '#0B105C',
                // padding: 5,
                marginRight: 10,
                justifyContent: 'center',
                alignItems: 'center',
                width: 155,
                height: 56,
                borderRadius: 20,
              }}
              onPress={no}>
              <Text
                style={{
                  color: 'rgba(53, 53, 53, 1)',
                  fontSize: 16,
                  fontWeight: 600,
                  fontFamily: 'GeneralSans-Variable',
                  lineHeight: 24 /* 150% */,
                  letterSpacing: -0.446,
                }}>
                {props.buttonLeftText ? props.buttonLeftText : 'Cancel'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: '#rgba(213, 58, 29, 1)',
                // borderWidth: 1,
                // borderColor: '',
                // borderColor: '#0B105C',
                // padding: 5,
                // marginRight: 5,
                justifyContent: 'center',
                alignItems: 'center',
                width: 155,
                height: 56,
                borderRadius: 20,
              }}
              onPress={yes}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 16,
                  fontWeight: 600,
                  fontFamily: 'GeneralSans-Variable',
                  lineHeight: 24 /* 150% */,
                  letterSpacing: -0.446,
                }}>
                {props.buttonRightText ? props.buttonRightText : 'Log Out'}
              </Text>
            </TouchableOpacity>
            {/* <LinearGradient
              colors={['#FCDD8E', '#F9B401']}
              start={{x: 0.5, y: -5}}
              end={{x: 0.4, y: 4}}
              style={{
                flex: 1,
                marginLeft: 5,
                justifyContent: 'center',
                alignItems: 'center',
                width: 111,
                borderRadius: 7,
              }}>
              <TouchableOpacity
                style={{
                  width: 190,
                  alignItems: 'center',
                }}
                onPress={yes}>
                <Text
                  style={{
                    color: '#0B105C',
                    fontSize: 14,
                    // fontWeight: 'bold',
                  }}>
                  Log Out
                </Text>
              </TouchableOpacity>
            </LinearGradient> */}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(17, 17, 17, 0.9)',
    // opacity: 0.9,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 20,
    // paddingTop: 0,
    // paddingBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 200,
    opacity: 1,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  // buttonOpen: {
  //   backgroundColor: '#F194FF',
  // },
  // buttonClose: {
  //   backgroundColor: 'red',
  // },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    borderColor: 'black',
    // borderWidth: 1,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius:100
    // backgroundColor: 'pink',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: 999,
    paddingVertical: 8,
    paddingHorizontal: 35,
    backgroundColor: 'transparent',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
  buttonShadow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 2,
    // backgroundColor: 'red',
    width: '100%',
  },
});
