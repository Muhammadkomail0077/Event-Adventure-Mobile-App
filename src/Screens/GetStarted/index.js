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
  Modal,
} from 'react-native';
import {ActivityIndicator, Button, Text} from 'react-native-paper';
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
import CheckBox from '@react-native-community/checkbox';
import {Cards} from '../../Components/Cards';
import {FlatList} from 'react-native-gesture-handler';
import COLORS from '../../Assets/Style/Color';
import LinearGradient from 'react-native-linear-gradient';
import TransparentButton from '../../Components/ReusableComponent/TransparentButton';

export const GetStarted = () => {
  const [passHide, setPassHide] = useState(false);
  const [loading, setLoading] = useState(false);
  const [valuePass, onChangeTextPass] = useState('');
  const [valueConfirmPass, onChangeTextConfirmPass] = useState('');
  const [valueEmail, onChangevalueEmail] = useState('');
  const [valuePhone, onChangevaluePhone] = useState('');
  const [valuelocation, onChangevaluelocation] = useState('');

  const [error, onChangeError] = useState('');

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  const Navigation = useNavigation();

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const data = [
    {
      id: 1,
      title: 'Virtual Fun',
    },
    {
      id: 2,
      title: 'Exciting Events',
    },
    {
      id: 1,
      title: 'Thrilling Adventure',
    },
  ];

  const data2 = [
    {
      id: 1,
      title: 'SOUTH AMERICA',
    },
    {
      id: 2,
      title: 'EUROPE',
    },
    {
      id: 1,
      title: 'ASIA',
    },
  ];

  const datacards = [
    {
      item1: require('../../Assets/Images/EAA/route-square.png'),
      item2: `LET'S GO PLACES`,
    },
    {
      item1: require('../../Assets/Images/EAA/calendar.png'),
      item2: 'LOCAL EVENTS    ',
    },
    {
      item1: require('../../Assets/Images/EAA/security-safe.png'),
      item2: 'MINGLE                  ',
    },
    {
      item1: require('../../Assets/Images/EAA/messages.png'),
      item2: 'SOCIAL EXPERTS',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <>
        <Pressable
          onPress={() => {
            setModalVisible2(true);
          }}>
          <View
            style={{
              backgroundColor: '#FFF',
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.1,
              shadowRadius: 2,
              padding: 0,
              // Elevation for Android
              elevation: 5,
              borderRadius: 10,
              marginHorizontal: 10,
            }}>
            <Image
              source={require('../../Assets/Images/EAA/cardImage.png')}
              style={{
                width: '97%',
                height: 150,
                borderRadius: 10,
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 13,
              }}
              resizeMode="contain"
            />

            <View style={{marginVertical: 12, marginHorizontal: 10}}>
              <Heading
                Fontsize={16}
                Heading={item.title}
                color={'#353535'}
                Fontweight="bold"
                lh={-0.446}
              />
            </View>

            <View
              style={{
                marginVertical: 0,
                marginHorizontal: 10,
                marginBottom: 10,
              }}>
              {/* <Heading
                Fontsize={12}
                Heading={
                  ''
                }
                color={'#707070'}
                width={258}
                lh={16}
                ls={-0.446}
              /> */}

              <Text
                style={{
                  fontSize: 12,
                  color: '#707070',
                  width: 258,
                  lineHeight: 16,
                  letterSpacing: -0.446,
                }}>
                Stay connected from anywhere with exciting group virtual events.
                Meet new people at comedy nights, game nights, mixology classes
                and other fun shared,{' '}
                <Text style={{color: '#D43D1C'}}>ALL ONLINE.</Text>
              </Text>

              {/* <TouchableOpacity onPress={() => handleAllOnlinePress()}>
                <Heading
                  Fontsize={12}
                  Heading={'ALL ONLINE.'}
                  color={'#D43D1C'}
                />
              </TouchableOpacity> */}
            </View>
          </View>
        </Pressable>
      </>
    );
  };

  const renderItemCardsPlaces = ({item}) => {
    return (
      <>
        <Pressable
          onPress={() => {
            setModalVisible2(true);
          }}>
          <View style={{margin: 8}}>
            <View
              style={{
                backgroundColor: '#FFF',
                width: '100%',
                borderRadius: 20,
                alignContent: 'center',
                alignItems: 'center',
                height: 157,
                flex: 1,
                justifyContent: 'center',
                // marginHorizontal
                // marginRight: 17,
                // marginHorizontal: 5,
              }}>
              <View>
                <Image
                  source={`${item.item1}`}
                  style={{width: 40, height: 40}}
                  resizeMode="contain"
                />
              </View>
              <View style={{marginTop: 10, marginHorizontal: 17}}>
                <Heading
                  Fontsize={16}
                  txtAlign={'center'}
                  Heading={item.item2}
                  color={'#D4271C'}
                  ls={-0.446}
                  // Fontweight={'bold'}
                />
              </View>
            </View>
          </View>
        </Pressable>
      </>
    );
  };

  return (
    <>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <Image
                source={require('../../Assets/Images/EAA/service.png')}
                style={{width: 80, height: 80, marginTop: 15}}
              />
            </View>
            <View style={{marginVertical: 20}}>
              <Heading
                Heading={
                  'Our Representative will contact & verify your profile '
                }
                Fontsize={24}
                color={COLORS.dark}
                txtAlign={'center'}
                Fontweight={600}
                width={300}
                ls={-0.446}
                // mb={10}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                alignContent: 'center',
                alignItems: 'center',
                marginBottom: 20,
                marginHorizontal: 10,
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
                txtColor={'#FFFFFF'}
                press={() => {
                  //   updatePassword();
                  setModalVisible(false);
                  Navigation.navigate('Home');
                }}
              />
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible2(!modalVisible2);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{marginVertical: 20}}>
              <Heading
                Heading={
                  'In-order to use our Service please Register yourself first '
                }
                Fontsize={24}
                color={COLORS.dark}
                Fontweight={600}
                txtAlign={'center'}
                ls={-0.446}
                mb={2}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                alignContent: 'center',
                alignItems: 'center',
                marginBottom: 17,
                marginHorizontal: 10,
              }}>
              <ButtonComp
                btnwidth={'97%'}
                btnHeight={56}
                btnText={'Register'}
                justify={'center'}
                align={'center'}
                fontSize={16}
                radius={15}
                txtwidth={'100%'}
                bgColor={'#D53A1D'}
                txtColor={'#FFFFFF'}
                press={() => {
                  //   updatePassword();
                  setModalVisible2(false);
                  Navigation.navigate('login');
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                alignContent: 'center',
                alignItems: 'center',
                marginBottom: 20,
                marginHorizontal: 10,
              }}>
              <TransparentButton
                btnwidth={'97%'}
                btnHeight={56}
                btnText={'No Need'}
                justify={'center'}
                align={'center'}
                fontSize={16}
                radius={15}
                txtwidth={'100%'}
                txtColor={'black'}
                press={() => {
                  //   updatePassword();
                  setModalVisible2(false);
                  // Navigation.navigate('Home');
                }}
                bgColor="white"
                borderColor="#BBB"
              />
            </View>
          </View>
        </View>
      </Modal>

      {loading ? (
        <Loader />
      ) : (
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            backgroundColor: '#F8F8F8',
            // marginTop: 5,
          }}>
          <View>
            <Image
              source={require('../../Assets/Images/EAA/getingStarted.png')}
              resizeMode="contain"
              style={{width: '100%', marginTop: '-4%'}}
            />
          </View>

          <View style={{marginBottom: '7%'}}>
            {/* Heading */}
            <View style={{marginVertical: 10}}>
              <Heading
                Fontsize={24}
                txtAlign={'center'}
                Heading={'Get Started!'}
                color={'#D4271C'}
                Fontweight={'bold'}
                lh={24}
                ls={-0.446}
                fontfamily={'GeneralSans-Variable'}
              />
            </View>

            {/* Inputs */}
            <View style={{marginHorizontal: 19}}>
              <View style={{marginVertical: 10}}>
                <Input
                  urlImg={require('../../Assets/Images/EAA/profile.png')}
                  placeholder={'First Name'}
                  value={valuePass}
                  onChangeText={onChangeTextPass}
                  bgColor={'rgba(228, 228, 228, 0.5)'}
                  color={'#353535'}
                />
              </View>

              <View style={{marginVertical: 4}}>
                <Input
                  urlImg={require('../../Assets/Images/EAA/profile.png')}
                  placeholder={'Last Name'}
                  value={valueConfirmPass}
                  onChangeText={onChangeTextConfirmPass}
                  bgColor={'rgba(228, 228, 228, 0.5)'}
                  color={'#353535'}
                />
              </View>

              <View style={{marginVertical: 10}}>
                <Input
                  urlImg={require('../../Assets/Images/EAA/smsBlack.png')}
                  placeholder={'Email'}
                  value={valueEmail}
                  onChangeText={onChangevalueEmail}
                  bgColor={'rgba(228, 228, 228, 0.5)'}
                  color={'#353535'}
                />
              </View>

              <View style={{marginVertical: 4}}>
                <Input
                  urlImg={require('../../Assets/Images/EAA/call-calling.png')}
                  placeholder={'Phone Number'}
                  value={valuePhone}
                  onChangeText={onChangevaluePhone}
                  bgColor={'rgba(228, 228, 228, 0.5)'}
                  color={'#353535'}
                />
              </View>

              <View style={{marginVertical: 10}}>
                <Input
                  title={'Re-type Password'}
                  urlImg={require('../../Assets/Images/EAA/gps.png')}
                  placeholder={'Home Club'}
                  value={valuelocation}
                  onChangeText={onChangevaluelocation}
                  bgColor={'rgba(228, 228, 228, 0.5)'}
                  color={'#353535'}
                />
              </View>
            </View>

            {/* Text */}
            <View
              style={{marginHorizontal: 20, marginBottom: 10, marginTop: 4}}>
              <Heading
                Fontsize={14}
                Heading={
                  'We meet all prospective members to let us get to know each other, and promote quality, safety & comfort for everyone. You must be 21 or older and either single or legally divorced to be a member.'
                }
                color={'#707070'}
                txtAlign={'justify'}
                lh={20}
                Fontweight={500}
                ls={-0.446}
              />
            </View>

            {/* CheckBox */}
            <View
              style={{
                flexDirection: 'row',
                // alignItems: 'center',
                marginTop: '2%',
                marginHorizontal: 5,
                marginBottom: 20,
                // justifyContent: 'space-between',
              }}>
              <View
                style={{
                  borderRadius: 5,
                  overflow: 'hidden',
                  flexDirection: 'row',
                  marginLeft: 15,
                  borderColor: '#D43D1C',
                  borderWidth: 0.5,
                }}>
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                  boxType="square"
                  onCheckColor="black"
                  style={{
                    backgroundColor: '#FFF',
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
                    marginLeft: 10,

                    // lineHeight: 24, /* 150% */
                    letterSpacing: -0.446,
                  }}>
                  By continuing you accept our Privacy Policy.
                </Text>
              </View>
            </View>

            {/* Button */}
            <View
              style={{
                justifyContent: 'center',
                alignContent: 'center',
                flexDirection: 'row',
                marginTop: '4%',
                marginHorizontal: 20,
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
                txtColor={'#FFFFFF'}
                press={() => {
                  // Navigation.navigate('login');
                  //   updatePassword();
                  setModalVisible(true);
                }}
              />
            </View>

            <View
              style={{
                justifyContent: 'center',
                alignContent: 'center',
                flexDirection: 'row',
                marginTop: '5%',
                marginHorizontal: 20,
              }}>
              <TransparentButton
                btnwidth={'97%'}
                btnHeight={56}
                btnText={'Sign In'}
                justify={'center'}
                align={'center'}
                fontSize={16}
                radius={15}
                txtwidth={'100%'}
                bgColor={'#FFFFFF'}
                txtColor={'black'}
                borderColor={'rgba(187, 187, 187, 1)'}
                press={() => {
                  Navigation.navigate('login');
                  //   updatePassword();
                }}
              />
            </View>

            {/* Text */}
            <View
              style={{marginHorizontal: 20, marginTop: 30, marginBottom: 15}}>
              <Heading
                Fontsize={18}
                Heading={'Events and Adventures. '}
                color={'black'}
                Fontweight={600}
                ls={-0.446}
                lh={24}
              />
              <Heading
                Fontsize={18}
                Heading={'A Community Created for Singles.'}
                color={'black'}
                Fontweight={600}
                ls={-0.446}
                lh={24}
                fontfamily={'GeneralSans-Variable'}
              />
            </View>

            <View style={{marginHorizontal: 20, marginBottom: 10}}>
              <Heading
                Fontsize={14}
                Heading={
                  'We’re an invitation-only social club for singles that want to live life to the fullest. Why swipe through mystery profiles when you can actually meet real people with Events & Adventures? We host a full calendar of exciting in-person events and virtual meetups, every month! Experience a pressure-free environment where people can meet naturally over shared group activities. The best part? Everyone is single!'
                }
                color={'#707070'}
                txtAlign={'justify'}
                ls={-0.446}
                // Fontweight={500}
                lh={17}
              />
            </View>

            <View
              style={{marginHorizontal: 20, marginBottom: 30, marginTop: 10}}>
              <Heading
                Fontsize={14}
                Heading={
                  'From hiking adventures and Taco Tuesdays to brewery tours and world travel, there’s something for everyone. If you’re over 21 and single, or happily divorced, there’s never been a better time to become a member of this exclusive singles community.'
                }
                color={'#707070'}
                txtAlign={'justify'}
                ls={-0.446}
                lh={17}
              />
            </View>

            {/* Cards */}
            <View
              style={{
                //   marginVertical: '5%',
                marginBottom: Platform.OS === 'ios' ? '8%' : '5%',
                marginLeft: 9,
              }}>
              <FlatList
                data={data}
                renderItem={renderItem}
                // keyExtractor={item => item.metal_id}
                contentContainerStyle={{
                  flexDirection: 'row',
                  // width: '70%',
                  //   marginHorizontal: 15,
                }}
                // ListHeaderComponent={ListHeaderComponent}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>

            <View style={{marginHorizontal: 20}}>
              <Heading
                Fontsize={18}
                txtAlign={'flex-start'}
                Heading={'Are you ready to start the fun?'}
                color={'black'}
                Fontweight={600}
                ls={-0.446}
              />
            </View>

            <View style={{marginVertical: -15}}>
              <Image
                source={require('../../Assets/Images/EAA/image.png')}
                resizeMode="contain"
                style={{width: '100%'}}
              />
              {/* wid */}
            </View>

            <View
              style={{
                justifyContent: 'center',
                alignContent: 'center',
                flexDirection: 'row',
                marginTop: '1%',
                marginHorizontal: 20,
              }}>
              <ButtonComp
                btnwidth={'97%'}
                btnHeight={56}
                btnText={'I Need This In My Life'}
                justify={'center'}
                align={'center'}
                fontSize={16}
                radius={15}
                txtwidth={'100%'}
                bgColor={'#D53A1D'}
                txtColor={'#FFFFFF'}
                press={() => {
                  // Navigation.navigate('login');
                  //   updatePassword();
                  setModalVisible2(true);
                }}
              />
            </View>

            <View
              style={{
                marginHorizontal: 22,
                width: '70%',
                marginTop: '8%',
                marginBottom: 2,
              }}>
              <Heading
                Fontsize={18}
                txtAlign={'flex-start'}
                Heading={'THE BENEFITS OF JOINING EVENTS & ADVENTURES:'}
                color={'#353535'}
                Fontweight={'bold'}
                ls={-0.446}
                lh={24}
              />
            </View>

            <View
              style={{
                // flexDirection: 'row',
                // flexWrap: 'wrap',
                // justifyContent: 'center',
                // marginHorizontal: '4%',
                alignContent: 'center',
                alignItems: 'center',
                // alignSelf: 'center',
                // backgroundColor:'red'
              }}>
              <FlatList
                data={datacards}
                renderItem={renderItemCardsPlaces}
                // keyExtractor={item => item.metal_id}
                contentContainerStyle={{
                  flexDirection: 'row',
                  width: '100%',
                  flexWrap: 'wrap',
                  //   marginHorizontal: 15,
                }}
                // ListHeaderComponent={ListHeaderComponent}
                // horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>

            {/* Heading */}
            <View style={{marginVertical: 15, marginHorizontal: 20}}>
              <Heading
                Fontsize={18}
                // txtAlign={'center'}
                Heading={'Travel the World With Us'}
                color={'black'}
                Fontweight={600}
                ls={-0.446}
              />
            </View>

            <View
              style={{
                //   marginVertical: '5%',
                marginLeft: 9,
                marginBottom: Platform.OS === 'ios' ? '10%' : '5%',
              }}>
              <FlatList
                data={data2}
                renderItem={renderItem}
                // keyExtractor={item => item.metal_id}
                contentContainerStyle={{
                  flexDirection: 'row',
                  // width: '70%',
                  //   marginHorizontal: 15,
                }}
                // ListHeaderComponent={ListHeaderComponent}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>

            {/* Button */}
            <View
              style={{
                justifyContent: 'center',
                alignContent: 'center',
                flexDirection: 'row',
                // marginTop: '2%',
                marginHorizontal: 20,
              }}>
              <ButtonComp
                btnwidth={'97%'}
                btnHeight={56}
                btnText={'Join Our Next Adventure'}
                justify={'center'}
                align={'center'}
                fontSize={16}
                radius={15}
                txtwidth={'100%'}
                bgColor={'#D53A1D'}
                txtColor={'#FFFFFF'}
                press={() => {
                  // Navigation.navigate('login');
                  //   updatePassword();
                  setModalVisible2(true);
                }}
              />
            </View>

            {/* Text */}
            <View style={{marginHorizontal: 20, marginVertical: 20}}>
              <Heading
                Fontsize={14}
                Heading={
                  'Most memberships range from $150 to $200 per month. For information about canceling your membership, please email '
                }
                color={'#707070'}
                ls={-0.446}
                Fontweight={500}
                txtAlign={'justify'}
                lh={20}
                // Fontweight={'bold'}
              />
              <Heading
                Fontsize={14}
                Heading={'resolutions@eventsandadventures.com. '}
                color={'#D43D1C'}
                ls={-0.446}
                Fontweight={500}
                txtAlign={'justify'}
                lh={20}
              />
              <Heading
                Fontsize={14}
                Heading={
                  'Membership cancellation policy: Any membership can be cancelled for a full refund within three business days of signing our membership agreement simply by notifying the company in writing to the address on the agreement. Full details are in the agreement for your state or province. Cancellation for specific events vary and are listed on each event’s page.'
                }
                color={'#707070'}
                ls={-0.446}
                txtAlign={'justify'}
                lh={20}
                Fontweight={500}
              />
            </View>
          </View>
        </ScrollView>
      )}
    </>
  );
};

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    // backgroundColor: 'red',
    // opacity: 0.5,
    backgroundColor: 'rgba(17, 17, 17, 0.9)',
  },
  modalView: {
    margin: 17,
    backgroundColor: 'white',
    borderRadius: 20,
    // paddingHorizontal: 20,
    // paddingBottom: 20,
    padding: 10,
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
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
