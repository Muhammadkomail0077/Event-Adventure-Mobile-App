import React, {useState} from 'react';
import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {Button, Text} from 'react-native-paper';
import Heading from '../../Components/ReusableComponent/Heading';
import CheckBox from '@react-native-community/checkbox';
import ButtonComp from '../../Components/ReusableComponent/Button';

export const SignUpPageOfEventsDetail = () => {
  const [showEventInfo, setShowEventInfo] = useState(true);
  const [showSuitchAppTeam, setShowSuitchAppTeam] = useState(true);
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
  const [toggleCheckBox3, setToggleCheckBox3] = useState(false);
  const [toggleCheckBox4, setToggleCheckBox4] = useState(false);
  const [toggleCheckBox5, setToggleCheckBox5] = useState(false);
  const [toggleCheckBox6, setToggleCheckBox6] = useState(false);
  const [toggleCheckBox7, setToggleCheckBox7] = useState(false);

  const [guest, setGuest] = useState('');
  const [carPool, setCarPool] = useState('');
  const [comment, setComment] = useState('');

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Modal animationType="none" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              onPress={() => {
                // setDeleteModalVisible(!deleteModalVisible);
                setModalVisible(!modalVisible);
              }}>
              <View style={{position: 'fixed', right: -135, top: 20}}>
                <View
                  style={{
                    borderColor: 'rgba(187, 187, 187, 0.5)',
                    borderWidth: 1,
                    width: 38,
                    height: 38,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                  }}>
                  <Image
                    source={require('../../Assets/Images/EAA/cross.png')}
                    style={{width: 15, height: 15}}
                  />
                </View>
              </View>
            </Pressable>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../Assets/Images/EAA/Ellipse71.png')}
                style={{width: 180, height: 180}}
                resizeMode="contain"
              />
            </View>
            <View style={{alignContent: 'center', padding: 20}}>
              <Text style={{fontWeight: '600', fontSize: 24}}>
                Michael Figueroa
              </Text>
            </View>
          </View>
        </View>
      </Modal>

      {/* <Modal animationType="none" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                alignSelf: 'flex-end',
                top: 15,
              }}>
              <Pressable
                onPress={() => {
                  // setDeleteModalVisible(!deleteModalVisible);
                }}>
                <View
                  style={{
                    borderColor: 'rgba(187, 187, 187, 0.5)',
                    borderWidth: 1,
                    width: 38,
                    height: 38,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                  }}>
                  <Image
                    source={require('../../Assets/Images/EAA/cross.png')}
                    style={{width: 15, height: 15}}
                  />
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal> */}

      <View style={{flex: 1, marginTop: 5, backgroundColor: 'white'}}>
        {/* Cards */}
        <View>
          <View
            style={{
              backgroundColor: 'white',
              marginTop: 30,
              //   alignItems: 'center',
              borderRadius: 20,
              shadowColor: 'black',
              shadowOpacity: 0.1,
              shadowRadius: 5,
              elevation: 5,
            }}>
            <View
              style={{
                alignContent: 'center',
                alignItems: 'center',
                marginTop: -15,
              }}>
              <Image
                source={require('../../Assets/Images/EAA/image2.png')}
                style={{width: 355, height: 261}}
                resizeMode="contain"
              />
            </View>
            <View style={{width: '80%', marginLeft: 15, marginBottom: 20}}>
              <Heading
                Stylefont={'normal'}
                Fontweight={'bold'}
                Fontsize={18}
                Heading={'Karaoke at Playa Bar!Playa II'}
                color={'black'}
                ls={-0.446}
              />
            </View>
          </View>
        </View>
        {/* Second Portion */}

        {/* Event Info Complete */}
        <View
          style={{
            marginTop: 25,
            marginHorizontal: 10,
            borderColor: showEventInfo ? '#D43D1C' : 'transparent',
            borderWidth: showEventInfo ? 1 : 0,
            //   padding: 10,
            borderRadius: 20,
          }}>
          {showEventInfo ? (
            <Pressable onPress={() => setShowEventInfo(!showEventInfo)}>
              <View
                style={{
                  backgroundColor: '#D43D1C',
                  alignContent: 'center',
                  alignItems: 'center',
                  // width:382,
                  height: 56,
                  // alignSelf:'center'
                  justifyContent: 'center',
                  borderTopEndRadius: 20,
                  borderTopStartRadius: 20,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'white',
                    lineHeight: 24,
                    fontWeight: 'bold',
                  }}>
                  Event Info
                </Text>
              </View>
            </Pressable>
          ) : (
            <Pressable onPress={() => setShowEventInfo(!showEventInfo)}>
              <View
                style={{
                  backgroundColor: 'white',
                  alignContent: 'center',
                  alignItems: 'center',
                  // width:382,
                  height: 56,
                  // alignSelf:'center'
                  justifyContent: 'center',
                  borderRadius: 20,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.1,
                  shadowRadius: 1.65,
                  elevation: 2,
                  borderColor: '#BBBBBB',
                  borderWidth: 1,
                  //   borderTopStartRadius: 20,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'black',
                    lineHeight: 24,
                    fontWeight: 'bold',
                  }}>
                  Event Info
                </Text>
              </View>
            </Pressable>
          )}
          {showEventInfo && (
            <>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 15,
                  marginVertical: 8,
                  // marginTop: 10,
                  // paddingBottom:10
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 16, color: 'black'}}>
                    Event Status
                  </Text>
                </View>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 14, color: '#707070'}}>
                      Event is available
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 15,
                  marginVertical: 8,
                  // marginTop: 5,
                  // paddingBottom:10
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 16, color: 'black'}}>
                    Member Status
                  </Text>
                </View>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 14, color: '#707070'}}>
                      Not Signed Up
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 15,
                  marginVertical: 8,
                  // marginTop: 5,
                  // paddingBottom:10
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{fontSize: 16, color: '#D43D1C', fontWeight: 600}}>
                    Member Guest
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 15,
                  marginVertical: 8,
                  // marginTop: 5,
                  // paddingBottom:10
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 16, color: 'black'}}>
                    Sign Up Status
                  </Text>
                </View>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 14, color: '#707070'}}>
                      You are Signed Up
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 15,
                  marginVertical: 8,
                  // marginTop: 5,
                  // paddingBottom:10
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 16, color: 'black'}}>
                    Event Status
                  </Text>
                </View>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 14, color: '#707070'}}>
                      Event is available
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 15,
                  marginVertical: 8,
                  // marginTop: 5,
                  // paddingBottom:10
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 16, color: 'black'}}>Host(s)</Text>
                </View>
                <View>
                  <Pressable
                    onPress={() => {
                      setModalVisible(true);
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={require('../../Assets/Images/EAA/SignupEventOrginzerPic.png')}
                        style={{width: 28, height: 28}}
                      />
                      <Text style={{fontSize: 14, color: '#707070'}}>
                        {'  '} Michael Figueroa
                      </Text>
                    </View>
                  </Pressable>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 15,
                  marginVertical: 8,
                  // marginTop: 5,
                  // paddingBottom:10
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{fontSize: 16, color: '#D43D1C', fontWeight: 600}}>
                    Event Type
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 15,
                  marginVertical: 8,
                  // marginTop: 5,
                  // paddingBottom:10
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 16, color: 'black'}}>Duration</Text>
                </View>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 14, color: '#707070'}}>
                      3 + Hours
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 15,
                  marginVertical: 8,
                  // marginTop: 5,
                  // paddingBottom:10
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 16, color: 'black'}}>Attendees</Text>
                </View>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 14, color: '#707070'}}>
                      No Limit
                    </Text>
                  </View>
                </View>
              </View>
            </>
          )}
        </View>

        {/* Event Info Complete */}
        <View
          style={{
            marginTop: 25,
            marginHorizontal: 10,
            borderColor: showSuitchAppTeam ? '#D43D1C' : 'transparent',
            borderWidth: showSuitchAppTeam ? 1 : 0,
            //   padding: 10,
            borderRadius: 20,
          }}>
          {showSuitchAppTeam ? (
            <Pressable onPress={() => setShowSuitchAppTeam(!showSuitchAppTeam)}>
              <View
                style={{
                  backgroundColor: '#D43D1C',
                  alignContent: 'center',
                  alignItems: 'center',
                  // width:382,
                  height: 56,
                  // alignSelf:'center'
                  justifyContent: 'center',
                  borderTopEndRadius: 20,
                  borderTopStartRadius: 20,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'white',
                    lineHeight: 24,
                    fontWeight: 'bold',
                  }}>
                  Suitch App Team
                </Text>
              </View>
            </Pressable>
          ) : (
            <Pressable onPress={() => setShowSuitchAppTeam(!showSuitchAppTeam)}>
              <View
                style={{
                  backgroundColor: 'white',
                  alignContent: 'center',
                  alignItems: 'center',
                  // width:382,
                  height: 56,
                  // alignSelf:'center'
                  justifyContent: 'center',
                  borderRadius: 20,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.1,
                  shadowRadius: 1.65,
                  elevation: 2,
                  borderColor: '#BBBBBB',
                  borderWidth: 1,
                  //   borderTopStartRadius: 20,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'black',
                    lineHeight: 24,
                    fontWeight: 'bold',
                  }}>
                  Suitch App Team
                </Text>
              </View>
            </Pressable>
          )}
          {showSuitchAppTeam && (
            <>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 15,
                  marginVertical: 8,
                  // marginTop: 10,
                  // paddingBottom:10
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 16, color: 'black'}}>Event Cost</Text>
                </View>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 14, color: '#707070'}}>
                      $0.00 USD
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 15,
                  marginVertical: 8,
                  // marginTop: 5,
                  // paddingBottom:10
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 16, color: 'black'}}>Event Tax</Text>
                </View>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 14, color: '#707070'}}>
                      $0.00 USD
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 15,
                  marginVertical: 8,
                  // marginTop: 5,
                  // paddingBottom:10
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 16, color: 'black'}}>
                    Event Credit
                  </Text>
                </View>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 14, color: '#707070'}}>
                      $0.00 USD
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  // alignItems: 'center',
                  marginTop: '2%',
                  marginHorizontal: 15,
                  paddingBottom: 15,
                  // marginBottom: 20,
                  // justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    borderRadius: 5,
                    // overflow: 'hidden',
                    flexDirection: 'row',
                    // marginHorizontal: 15,
                    // borderColor: '#D43D1C',
                    // borderWidth: 1,
                  }}>
                  <CheckBox
                    disabled={false}
                    value={toggleCheckBox7}
                    onValueChange={newValue => setToggleCheckBox7(newValue)}
                    boxType="square"
                    onCheckColor="#D43D1C"
                    style={{
                      // backgroundColor: '#FFF',
                      width: 15, // Set your desired width
                      height: 15, // Set your desired height
                      borderColor: '#D43D1C',
                      borderWidth: 1,
                    }}
                  />
                </View>
                <View
                  style={{
                    width: '95%',
                    marginLeft: 10,
                    bottom: 2,
                  }}>
                  <Text
                    style={{
                      color: '#353535',
                      fontSize: 16,
                      fontFamily: 'GeneralSans-Variable',
                      fontStyle: 'normal',
                      // fontWeight: '500',
                      // lineHeight: 24, /* 150% */
                      letterSpacing: -0.446,
                    }}>
                    Event Credit not available Use Event Credit
                  </Text>
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
                  // multiline
                  onChangeText={guest}
                  value={setGuest}
                  style={{
                    width: '80%',
                    color: 'black',
                    fontSize: 16,
                    letterSpacing: -0.446,
                    fontWeight: 500,
                  }}
                  placeholder={'Guest'}
                  placeholderTextColor={'black'}
                />
              </View>

              <View style={{width: '100%', flexDirection: 'row'}}>
                <View
                  style={{
                    marginVertical: 10,
                    backgroundColor: '#E4E4E4',
                    marginHorizontal: 15,
                    padding: 20,
                    borderRadius: 20,
                    borderColor: '#BBBBBB',
                    borderWidth: 1,
                    width: '60%',
                  }}>
                  <TextInput
                    // multiline
                    onChangeText={guest}
                    value={setGuest}
                    style={{
                      width: '80%',
                      color: 'black',
                      fontSize: 16,
                      letterSpacing: -0.446,
                      fontWeight: 500,
                    }}
                    placeholder={'Guest'}
                    placeholderTextColor={'black'}
                  />
                </View>

                <View
                  style={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    backgroundColor: '#D53A1D',
                    height: 64,
                    width: 91,
                    alignSelf: 'center',
                    alignItems: 'center',
                    borderRadius: 20,
                    // padding:20
                    // flexDirection: 'row',
                    // marginVertical: '6%',
                    // marginHorizontal: 15,
                  }}>
                  <Text style={{color: 'white', fontSize: 16, fontWeight: 600}}>
                    Auto Fill
                  </Text>
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
                  // multiline
                  onChangeText={guest}
                  value={setGuest}
                  style={{
                    width: '80%',
                    color: 'black',
                    fontSize: 16,
                    letterSpacing: -0.446,
                    fontWeight: 500,
                  }}
                  placeholder={'Comment'}
                  placeholderTextColor={'black'}
                />
              </View>

              <View style={{margin: 15}}>
                <Text
                  style={{color: '#D43D1C', fontWeight: '600', fontSize: 16}}>
                  Actions
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  // alignItems: 'center',
                  marginTop: '0%',
                  marginHorizontal: 15,
                  paddingBottom: 15,
                  // marginBottom: 20,
                  // justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    borderRadius: 5,
                    // overflow: 'hidden',
                    flexDirection: 'row',
                    // marginHorizontal: 15,
                    // borderColor: '#D43D1C',
                    // borderWidth: 1,
                  }}>
                  <CheckBox
                    disabled={false}
                    value={toggleCheckBox6}
                    onValueChange={newValue => setToggleCheckBox6(newValue)}
                    boxType="square"
                    onCheckColor="#D43D1C"
                    style={{
                      // backgroundColor: '#FFF',
                      width: 15, // Set your desired width
                      height: 15, // Set your desired height
                      borderColor: '#D43D1C',
                      borderWidth: 1,
                    }}
                  />
                </View>
                <View
                  style={{
                    width: '95%',
                    marginLeft: 10,
                    bottom: 2,
                  }}>
                  <Text
                    style={{
                      color: '#353535',
                      fontSize: 16,
                      fontFamily: 'GeneralSans-Variable',
                      fontStyle: 'normal',
                      // fontWeight: '500',
                      // lineHeight: 24, /* 150% */
                      letterSpacing: -0.446,
                    }}>
                    I want to signup for the event and I agree to pay the cost
                    specified for the Event.
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  // alignItems: 'center',
                  marginTop: '0%',
                  marginHorizontal: 15,
                  paddingBottom: 15,
                  // marginBottom: 20,
                  // justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    borderRadius: 5,
                    // overflow: 'hidden',
                    flexDirection: 'row',
                    // marginHorizontal: 15,
                    // borderColor: '#D43D1C',
                    // borderWidth: 1,
                  }}>
                  <CheckBox
                    disabled={false}
                    value={toggleCheckBox1}
                    onValueChange={newValue => setToggleCheckBox1(newValue)}
                    boxType="square"
                    onCheckColor="#D43D1C"
                    style={{
                      // backgroundColor: '#FFF',
                      width: 15, // Set your desired width
                      height: 15, // Set your desired height
                      borderColor: '#D43D1C',
                      borderWidth: 1,
                    }}
                  />
                </View>
                <View
                  style={{
                    width: '95%',
                    marginLeft: 10,
                    bottom: 2,
                  }}>
                  <Text
                    style={{
                      color: '#353535',
                      fontSize: 16,
                      fontFamily: 'GeneralSans-Variable',
                      fontStyle: 'normal',
                      // fontWeight: '500',
                      // lineHeight: 24, /* 150% */
                      letterSpacing: -0.446,
                    }}>
                    I want to be Wait Listed for this event. If I am moved from
                    the Wait List into the Event, I authorize Events and
                    Adventures to charge me for the cost of the Event.
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  // alignItems: 'center',
                  marginTop: '0%',
                  marginHorizontal: 15,
                  paddingBottom: 15,
                  // marginBottom: 20,
                  // justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    borderRadius: 5,
                    // overflow: 'hidden',
                    flexDirection: 'row',
                    // marginHorizontal: 15,
                    // borderColor: '#D43D1C',
                    // borderWidth: 1,
                  }}>
                  <CheckBox
                    disabled={false}
                    value={toggleCheckBox2}
                    onValueChange={newValue => setToggleCheckBox2(newValue)}
                    boxType="square"
                    onCheckColor="#D43D1C"
                    style={{
                      // backgroundColor: '#FFF',
                      width: 15, // Set your desired width
                      height: 15, // Set your desired height
                      borderColor: '#D43D1C',
                      borderWidth: 1,
                    }}
                  />
                </View>
                <View
                  style={{
                    width: '95%',
                    marginLeft: 10,
                    bottom: 2,
                  }}>
                  <Text
                    style={{
                      color: '#353535',
                      fontSize: 16,
                      fontFamily: 'GeneralSans-Variable',
                      fontStyle: 'normal',
                      // fontWeight: '500',
                      // lineHeight: 24, /* 150% */
                      letterSpacing: -0.446,
                    }}>
                    I want to cancel my signup for this event.
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  // alignItems: 'center',
                  marginTop: '0%',
                  marginHorizontal: 15,
                  paddingBottom: 15,
                  // marginBottom: 20,
                  // justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    borderRadius: 5,
                    // overflow: 'hidden',
                    flexDirection: 'row',
                    // marginHorizontal: 15,
                    // borderColor: '#D43D1C',
                    // borderWidth: 1,
                  }}>
                  <CheckBox
                    disabled={false}
                    value={toggleCheckBox3}
                    onValueChange={newValue => setToggleCheckBox3(newValue)}
                    boxType="square"
                    onCheckColor="#D43D1C"
                    style={{
                      // backgroundColor: '#FFF',
                      width: 15, // Set your desired width
                      height: 15, // Set your desired height
                      borderColor: '#D43D1C',
                      borderWidth: 1,
                    }}
                  />
                </View>
                <View
                  style={{
                    width: '95%',
                    marginLeft: 10,
                    bottom: 2,
                  }}>
                  <Text
                    style={{
                      color: '#353535',
                      fontSize: 16,
                      fontFamily: 'GeneralSans-Variable',
                      fontStyle: 'normal',
                      // fontWeight: '500',
                      // lineHeight: 24, /* 150% */
                      letterSpacing: -0.446,
                    }}>
                    Add my Guest
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  // alignItems: 'center',
                  marginTop: '0%',
                  marginHorizontal: 15,
                  paddingBottom: 15,
                  // marginBottom: 20,
                  // justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    borderRadius: 5,
                    // overflow: 'hidden',
                    flexDirection: 'row',
                    // marginHorizontal: 15,
                    // borderColor: '#D43D1C',
                    // borderWidth: 1,
                  }}>
                  <CheckBox
                    disabled={false}
                    value={toggleCheckBox4}
                    onValueChange={newValue => setToggleCheckBox4(newValue)}
                    boxType="square"
                    onCheckColor="#D43D1C"
                    style={{
                      // backgroundColor: '#FFF',
                      width: 15, // Set your desired width
                      height: 15, // Set your desired height
                      borderColor: '#D43D1C',
                      borderWidth: 1,
                    }}
                  />
                </View>
                <View
                  style={{
                    width: '95%',
                    marginLeft: 10,
                    bottom: 2,
                  }}>
                  <Text
                    style={{
                      color: '#353535',
                      fontSize: 16,
                      fontFamily: 'GeneralSans-Variable',
                      fontStyle: 'normal',
                      // fontWeight: '500',
                      // lineHeight: 24, /* 150% */
                      letterSpacing: -0.446,
                    }}>
                    Add my Comment
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  // alignItems: 'center',
                  marginTop: '0%',
                  marginHorizontal: 15,
                  paddingBottom: 15,
                  // marginBottom: 20,
                  // justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    borderRadius: 5,
                    // overflow: 'hidden',
                    flexDirection: 'row',
                    // marginHorizontal: 15,
                    // borderColor: '#D43D1C',
                    // borderWidth: 1,
                  }}>
                  <CheckBox
                    disabled={false}
                    value={toggleCheckBox5}
                    onValueChange={newValue => setToggleCheckBox5(newValue)}
                    boxType="square"
                    onCheckColor="#D43D1C"
                    style={{
                      // backgroundColor: '#FFF',
                      width: 15, // Set your desired width
                      height: 15, // Set your desired height
                      borderColor: '#D43D1C',
                      borderWidth: 1,
                    }}
                  />
                </View>
                <View
                  style={{
                    width: '95%',
                    marginLeft: 10,
                    bottom: 2,
                  }}>
                  <Text
                    style={{
                      color: '#353535',
                      fontSize: 16,
                      fontFamily: 'GeneralSans-Variable',
                      fontStyle: 'normal',
                      // fontWeight: '500',
                      // lineHeight: 24, /* 150% */
                      letterSpacing: -0.446,
                    }}>
                    Yes, I have read and agree to the waiver and release
                  </Text>
                </View>
              </View>
            </>
          )}
        </View>

        {/* Button General Discussion */}
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
            btnText={'Send'}
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
