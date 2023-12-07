import React, {useState} from 'react';
// import {TextInput} from 'react-native-paper';
// import COLORS from '../../../Assets/Style/Color';
import {useSelector} from 'react-redux';
import {
  Image,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
// import Feather from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Heading from '../Heading';
// import FONT from '../../../Assets/Style/Font';
import {Calendar} from 'react-native-calendars';
import Entypo from 'react-native-vector-icons/Entypo';
import {ActivityIndicator} from 'react-native-paper';

export default function SecondInput(props) {
  const emptyIcon = () => null;
  const [text, setText] = useState();

  // const [value, onChangeText] = useState('');
  const [notPressed, setNotPressed] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const [purchaseDate, setPurchaseDate] = useState();
  const [loader, setloader] = useState(false);

  const openCalendar = () => {
    setModalVisible(true);
  };

  const closeCalendar = () => {
    setModalVisible(false);
  };

  const handleIconPress = () => {
    // You can set a state variable to control the modal visibility
    setModalVisible(true);
  };

  return (
    <>
      <Modal
        visible={loader}
        transparent={true}
        animationType="fade"
        onRequestClose={() => {}}>
        <View style={styles.loaderContainer}>
          <View style={styles.loaderContent}>
            <ActivityIndicator
              size="large"
              // color={COLORS.primary}
            />
          </View>
        </View>
      </Modal>

      <Modal
        visible={isModalVisible}
        animationType="none"
        transparent={false}
        onRequestClose={closeCalendar}>
        <View style={styles.modalContainer}>
          <Pressable
            onPress={() => {
              setModalVisible(false);
            }}>
            <View
              style={{
                alignContent: 'flex-end',
                alignSelf: 'flex-end',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <Entypo name="cross" size={28} color={'black'} />
            </View>
          </Pressable>
          <Calendar
            // Customize the calendar as per your requirement
            onDayPress={day => {
              console.log('Selected day:', day);
              const month = String(day.month).padStart(2, '0');
              const formattedDay = String(day.day).padStart(2, '0');
              const formattedDate = `${month}/${formattedDay}/${day.year}`;
              setPurchaseDate(formattedDate);
              closeCalendar();
            }}
          />
        </View>
      </Modal>

      <View>
        <View
          style={{
            borderColor: 'rgba(187, 187, 187, 0.5)',
            borderWidth: 0.5,
            height: 64,
            borderRadius: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 15,
            backgroundColor: props.bgColor ? props.bgColor : '#E9978D',
          }}>
          {props.urlImg && (
            <Image
              source={props.urlImg}
              style={{
                width: 24,
                marginTop: 12,
                marginBottom: 14,
                marginLeft: 5,
                marginRight: props.halfSpace ? 10 : 0,
              }}
              resizeMethod={'resize'}
              resizeMode={'contain'}
            />
          )}
          <TextInput
            editable={!props.disabled}
            // multiline
            onChangeText={text => props.onChangeText(text)}
            value={purchaseDate ? purchaseDate : props.value}
            style={{
              width: props.pass ? '50%' : '80%',
              color: props.color ? props.color : 'white',
              fontSize: 16,
              letterSpacing: -0.446,
            }}
            placeholder={props.placeholder}
            placeholderTextColor={props.color ? props.color : 'white'}
            secureTextEntry={props.pass && !props.dob ? notPressed : false}
            keyboardType={props.keyboardType}
          />
          {props.dob ? (
            <View
              style={{
                marginLeft: -25,
              }}>
              <Pressable>
                <Image
                  source={require('../../../Assets/Images/EAA/finger-scan.png')}
                  style={{
                    width: 26,
                    marginTop: 12,
                    marginBottom: 14,
                    marginLeft: -5,
                    marginRight: 5,
                  }}
                  resizeMethod={'resize'}
                  resizeMode={'contain'}
                />
                {/* <Icon
                  name={'keyboard-arrow-down'}
                  style={{fontWeight: '900'}}
                  color={'rgba(123, 134, 158, 1)'}
                  size={30}
                /> */}
              </Pressable>
            </View>
          ) : props.pass ? (
            <View
              style={{
                // backgroundColor: 'pink',
                alignSelf: 'center',
                width: '30%',
                alignContent: 'flex-end',
                alignItems: 'flex-end',
                margin: 2
              }}>
              <Pressable
                onPress={() => {
                  notPressed ? setNotPressed(false) : setNotPressed(true);
                }}
                disabled={props.disabled}>
                {notPressed ? (
                  <Image
                    source={require('../../../Assets/Images/EAA/eyepass.png')}
                    style={{width: 24, height: 24}}
                  />
                ) : (
                  <MaterialIcon
                    name={'eye-outline'}
                    style={{fontWeight: '900'}}
                    color={props.passImg ? '#292D32' : 'white'}
                    size={24}
                  />
                )}
              </Pressable>
            </View>
          ) : (
            <View></View>
          )}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
  },
  loaderContent: {
    // backgroundColor: 'white', // Loader background color
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
