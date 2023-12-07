import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Image,
  FlatList,
  Modal,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Heading from '../../Components/ReusableComponent/Heading';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';
import ButtonComp from '../../Components/ReusableComponent/Button';
import {SignUpPageOfEventsDetail} from '../SignUpPageOfEventsDetail';
import {PhotosPageOfEventsDetail} from '../PhotosPageOfEventsDetail';
import {FeedBackPageOfEventsDetail} from '../FeedBackPageOfEventsDetail';
// import {ModalView} from '../../Components/ReusableComponent/Modal';

const EventsDetail = () => {
  const Navigation = useNavigation();

  const [showLocation, setShowLocation] = useState(true);
  const [showEventDetail, setShowEventDetail] = useState(true);
  const [showSignUpPageOfEventsDetail, setShowSignUpPageOfEventsDetail] =
    useState(false);

  const [showPhotosPageOfEventsDetail, setShowPhotosPageOfEventsDetail] =
    useState(false);

  const [showFeedBackPageOfEventsDetail, setShowFeedBackPageOfEventsDetail] =
    useState(false);

  const [modal, setModal] = useState(false);

  return (
    <>
      <Modal animationType="none" transparent={true} visible={modal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{marginBottom: 0, marginHorizontal: 20, paddingTop: 30}}>
              <Pressable
                onPress={() => {
                  // setDeleteModalVisible(!deleteModalVisible);
                  setModal(!modal);
                }}>
                <View style={{alignItems: 'flex-end'}}>
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

              <View style={{marginTop: -20, marginBottom: 10}}>
                <Heading
                  Heading={'Share'}
                  Fontsize={24}
                  //   color={COLORS.dark}
                  Fontweight={700}
                  txtAlign={'center'}
                  color={'#000B0D'}
                  lh={32}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <View style={{marginHorizontal: 10}}>
                  <Image
                    source={require('../../Assets/Images/EAA/fbIconWIthBackground.png')}
                    style={{width: 65, height: 80}}
                  />
                </View>
                <View style={{marginHorizontal: 10}}>
                  <Image
                    source={require('../../Assets/Images/EAA/gmailIconWIthBackground.png')}
                    style={{width: 65, height: 80}}
                  />
                </View>
                <View style={{marginHorizontal: 10}}>
                  <Image
                    source={require('../../Assets/Images/EAA/whatsappIconWIthBackground.png')}
                    style={{width: 65, height: 80}}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <ScrollView style={{flexGrow: 1, flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 1, backgroundColor: '#FFF'}}>
          {/* Header */}

          <View
            style={{
              marginTop: 70,
              backgroundColor: 'white',
              marginHorizontal: 12,
              flex: 1,
              marginBottom: 40,
            }}>
            {/* Header */}
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 0,
                // marginTop: 70,
                justifyContent: 'space-between',
                alignContent: 'center',
                alignItems: 'center',
                flex: 1,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  // margin: Platform.OS === 'ios' ? '6%' : '6%',
                  marginBottom: 0,
                  alignSelf: 'center',
                  // backgroundColor: 'rgba(233, 151, 141, 1)',
                  width: 40,
                  height: 40,
                  borderColor: 'rgba(187, 187, 187, 0.5)',
                  borderWidth: 1,
                  borderRadius: 12,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: -3,
                  marginLeft: 15,
                }}>
                <Pressable
                  onPress={() => {
                    Navigation.goBack();
                  }}>
                  <Ionicons
                    name="chevron-back"
                    size={24}
                    color={'rgba(53, 53, 53, 1)'}
                  />
                </Pressable>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignContent: 'center',
                  alignItems: 'center',
                }}>
                <Heading
                  Stylefont={'normal'}
                  Fontweight={'bold'}
                  Fontsize={20}
                  txtAlign={'center'}
                  p={10}
                  lh={31}
                  Heading={
                    showSignUpPageOfEventsDetail ||
                    showPhotosPageOfEventsDetail ||
                    showFeedBackPageOfEventsDetail
                      ? 'Suitch App Team'
                      : 'Event Details'
                  }
                  color={'#D43D1C'}
                />
                {showSignUpPageOfEventsDetail ||
                showPhotosPageOfEventsDetail ||
                showFeedBackPageOfEventsDetail ? (
                  <Image
                    source={require('../../Assets/Images/EAA/arrow-right.png')}
                    style={{
                      width: 16,
                      height: 16,
                      position: 'relative',
                      right: 8,
                      bottom: 8,
                    }}
                  />
                ) : null}
              </View>

              <Pressable
                onPress={() => {
                  // Navigation.navigate('Notifications');
                  setModal(!modal);
                }}>
                <View
                  style={{
                    backgroundColor: '#FFFF',
                    padding: 8,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: 'rgba(187, 187, 187, 0.5)',
                  }}>
                  <View>
                    <Image
                      source={require('../../Assets/Images/EAA/share.png')}
                      style={{width: 25, height: 25}}
                    />
                  </View>
                </View>
              </Pressable>
            </View>

            {/* Buttons */}
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                justifyContent: 'space-between',
              }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <Pressable
                  onPress={() => {
                    Navigation.navigate('Home');
                  }}>
                  <View
                    style={{
                      alignItems: 'center',
                      backgroundColor: 'white',
                      padding: 11,
                      borderRadius: 16,
                      borderWidth: 1,
                      borderColor: '#BBB',
                      opacity: 5,
                      marginHorizontal: 5,
                    }}>
                    <Text style={{color: 'black', fontWeight: 'bold'}}>
                      Calendar
                    </Text>
                  </View>
                </Pressable>

                <Pressable
                  onPress={() => {
                    setShowSignUpPageOfEventsDetail(true);
                    setShowPhotosPageOfEventsDetail(false);
                    setShowFeedBackPageOfEventsDetail(false);
                  }}>
                  <View
                    style={{
                      alignItems: 'center',
                      backgroundColor: showSignUpPageOfEventsDetail
                        ? '#D43D1C'
                        : 'white',
                      padding: 11,
                      borderRadius: 16,
                      borderWidth: 1,
                      borderColor: '#BBB',
                      opacity: 5,
                      marginHorizontal: 5,
                    }}>
                    <Text
                      style={{
                        color: showSignUpPageOfEventsDetail
                          ? '#FFFFFF'
                          : 'black',
                        fontWeight: 'bold',
                      }}>
                      Sign Up
                    </Text>
                  </View>
                </Pressable>
                <View
                  style={{
                    alignItems: 'center',
                    backgroundColor: 'white',
                    padding: 11,
                    borderRadius: 16,
                    borderWidth: 1,
                    borderColor: '#BBB',
                    opacity: 5,
                    marginHorizontal: 5,
                  }}>
                  <Text style={{color: 'black', fontWeight: 'bold'}}>
                    Car Pool
                  </Text>
                </View>
                <Pressable
                  onPress={() => {
                    setShowPhotosPageOfEventsDetail(true);
                    setShowFeedBackPageOfEventsDetail(false);
                    setShowSignUpPageOfEventsDetail(false);
                  }}>
                  <View
                    style={{
                      alignItems: 'center',
                      backgroundColor: showPhotosPageOfEventsDetail
                        ? '#D43D1C'
                        : 'white',
                      padding: 11,
                      borderRadius: 16,
                      borderWidth: 1,
                      borderColor: '#BBB',
                      opacity: 5,
                      marginHorizontal: 5,
                    }}>
                    <Text
                      style={{
                        color: showPhotosPageOfEventsDetail
                          ? '#FFFFFF'
                          : 'black',
                        fontWeight: 'bold',
                      }}>
                      Photos
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  onPress={() => {
                    setShowFeedBackPageOfEventsDetail(true);
                    setShowPhotosPageOfEventsDetail(false);
                    setShowSignUpPageOfEventsDetail(false);
                  }}>
                  <View
                    style={{
                      alignItems: 'center',
                      backgroundColor: showFeedBackPageOfEventsDetail
                        ? '#D43D1C'
                        : 'white',
                      padding: 11,
                      borderRadius: 16,
                      borderWidth: 1,
                      borderColor: '#BBB',
                      opacity: 5,
                      marginHorizontal: 5,
                    }}>
                    <Text
                      style={{
                        color: showFeedBackPageOfEventsDetail
                          ? 'white'
                          : 'black',
                        fontWeight: 'bold',
                      }}>
                      Feedback
                    </Text>
                  </View>
                </Pressable>
              </ScrollView>
            </View>

            {showSignUpPageOfEventsDetail ? (
              <SignUpPageOfEventsDetail />
            ) : showPhotosPageOfEventsDetail ? (
              <PhotosPageOfEventsDetail />
            ) : showFeedBackPageOfEventsDetail ? (
              <FeedBackPageOfEventsDetail />
            ) : (
              <>
                {/* Event Detail By Default Page */}
                {/* First Card */}
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
                        source={require('../../Assets/Images/EAA/EventDetailCardDetail.png')}
                        style={{width: 355, height: 261}}
                        resizeMode="contain"
                      />
                    </View>
                    <View style={{width: '80%', marginLeft: 15}}>
                      <Heading
                        Stylefont={'normal'}
                        Fontweight={'bold'}
                        Fontsize={18}
                        Heading={
                          'Ballet Show Underneath the Stars Estrella Lakeside Amphitheater'
                        }
                        color={'black'}
                        ls={-0.446}
                      />
                    </View>
                    <View style={{width: '80%', marginLeft: 15, marginTop: 10}}>
                      <Heading
                        Stylefont={'normal'}
                        Fontweight={'bold'}
                        Fontsize={16}
                        Heading={'Host: Michael 914-414-5657'}
                        color={'#D43D1C'}
                        ls={-0.446}
                      />
                    </View>
                    <View
                      style={{
                        marginHorizontal: 15,
                        marginTop: 10,
                        marginBottom: 15,
                      }}>
                      <Text
                        style={{
                          lineHeight: 20,
                          letterSpacing: -0.446,
                          fontSize: 14,
                          fontWeight: 'normal',
                          color: '#707070',
                        }}>
                        We want to be sure you are able to enjoy the event as
                        much as possible. Should you have questions, comments or
                        concerns relating to this event please feel free to
                        contact Meggie, the Phoenix Event Manager at
                        <Text style={{color: '#D43D1C', fontWeight: 'bold'}}>
                          {' '}
                          Meggie@eventsandadventures.com{' '}
                        </Text>{' '}
                        between Monday - Friday from 9AM - 5PM. Please note that
                        on the day of the event your host can be reached to
                        assist you in finding the group or relay any delays. We
                        look forward to seeing you at the event!
                      </Text>
                    </View>
                  </View>
                </View>

                {/* Second Portion */}
                <View style={{marginTop: 15, marginHorizontal: 10}}>
                  <Heading
                    Stylefont={'normal'}
                    Fontweight={'bold'}
                    Fontsize={18}
                    Heading={'CONTEMPORARY AND CLASSICAL!'}
                    color={'black'}
                    ls={-0.446}
                  />
                </View>
                <View style={{marginTop: 5, marginHorizontal: 10}}>
                  <Heading
                    Stylefont={'normal'}
                    //   Fontweight={'bold'}
                    Fontsize={14}
                    Heading={
                      'Join E&A friends underneath the stars for an outdoor Ballet show at Fountain Park.'
                    }
                    color={'#707070'}
                    ls={-0.446}
                    lh={20}
                  />
                </View>

                {/* Third Portion  */}
                <View>
                  <View
                    style={{
                      backgroundColor: 'white',
                      marginTop: 15,
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
                        source={require('../../Assets/Images/EAA/Group57201.png')}
                        style={{width: 355, height: 261}}
                        resizeMode="contain"
                      />
                    </View>

                    <View
                      style={{
                        marginHorizontal: 15,
                        marginTop: 0,
                        marginBottom: 15,
                      }}>
                      <Text
                        style={{
                          lineHeight: 20,
                          letterSpacing: -0.446,
                          fontSize: 14,
                          fontWeight: 'normal',
                          color: '#707070',
                        }}>
                        Ballet Under the Stars allows Arizona communities to
                        enjoy dance in a unique outdoor setting complete with a
                        stage, lighting, costumes, and beautiful Arizona
                        weather.
                      </Text>
                    </View>
                  </View>
                </View>

                {/* Fourth Portion */}
                <View style={{marginTop: 15, marginHorizontal: 10}}>
                  <Heading
                    Stylefont={'normal'}
                    Fontweight={'bold'}
                    Fontsize={18}
                    Heading={'MEETING LOCATION:'}
                    color={'black'}
                    ls={-0.446}
                  />
                </View>
                <View style={{marginTop: 5, marginHorizontal: 10}}>
                  <Heading
                    Stylefont={'normal'}
                    //   Fontweight={'bold'}
                    Fontsize={14}
                    Heading={
                      'Host will arrive earlier than event time and send a text out on exact location.'
                    }
                    color={'#707070'}
                    ls={-0.446}
                    lh={20}
                  />
                </View>
                <View style={{marginTop: 15, marginHorizontal: 10}}>
                  <Heading
                    Stylefont={'normal'}
                    Fontweight={'bold'}
                    Fontsize={18}
                    Heading={'SHOW INFORMAITON:'}
                    color={'black'}
                    ls={-0.446}
                  />
                </View>
                <View style={{marginTop: 5, marginHorizontal: 10}}>
                  <Heading
                    Stylefont={'normal'}
                    //   Fontweight={'bold'}
                    Fontsize={14}
                    Heading={
                      'Show is free - yay! Ballet performance will begin at 5PM.'
                    }
                    color={'#707070'}
                    ls={-0.446}
                    lh={20}
                  />
                </View>
                <View style={{marginTop: 15, marginHorizontal: 10}}>
                  <Heading
                    Stylefont={'normal'}
                    Fontweight={'bold'}
                    Fontsize={18}
                    Heading={'WHAT TO BRING:'}
                    color={'black'}
                    ls={-0.446}
                  />
                </View>
                <View style={{marginTop: 5, marginHorizontal: 10}}>
                  <Heading
                    Stylefont={'normal'}
                    //   Fontweight={'bold'}
                    Fontsize={14}
                    Heading={
                      'Blanket and/or lawn chair, snacks ready to serve and share (optional), and BYOB with your own mini cooler. *Should you happen to bring alcohol, please be discreet about it as it is not allowed at public parks.'
                    }
                    color={'#707070'}
                    ls={-0.446}
                    lh={20}
                  />
                </View>
                <View style={{marginTop: 15, marginHorizontal: 10}}>
                  <Heading
                    Stylefont={'normal'}
                    Fontweight={'bold'}
                    Fontsize={18}
                    Heading={'LIQUOR LAWS IN AZ:'}
                    color={'black'}
                    ls={-0.446}
                  />
                </View>
                <View style={{marginTop: 5, marginHorizontal: 10}}>
                  <Heading
                    Stylefont={'normal'}
                    //   Fontweight={'bold'}
                    Fontsize={14}
                    Heading={
                      'Public consumption of alcohol is a criminal offense that is considered a Class 2 Misdemeanor. As a class 2 misdemeanor, penalties for public consumption of alcohol can be severe, with a maximum of 4 months jail, fines of $750 plus surcharges and up to 2 years probation. You must be a permit holder that is responsible for ensuring that all members of the party are of legal age to consume alcoholic beverages according to Arizona State Law.'
                    }
                    color={'#707070'}
                    ls={-0.446}
                    lh={20}
                  />
                </View>
                <View style={{marginTop: 15, marginHorizontal: 10}}>
                  <Heading
                    Stylefont={'normal'}
                    //   Fontweight={'bold'}
                    Fontsize={14}
                    Heading={
                      '*If you are caught, this is solely on you, not the host and not the staff of E&A.'
                    }
                    color={'#D43D1C'}
                    ls={-0.446}
                    lh={20}
                  />
                </View>
                <View
                  style={{
                    marginTop: 25,
                    marginHorizontal: 10,
                    borderColor: '#D43D1C',
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 20,
                  }}>
                  <Text
                    style={{
                      lineHeight: 15,
                      letterSpacing: -0.446,
                      fontSize: 12,
                      fontWeight: 'normal',
                      color: '#707070',
                    }}>
                    It is wonderful when sharing in making an event as much fun
                    for yourself as it is for others. Any interaction with the
                    general public poses an elevated risk of being exposed to
                    COVID-19 and we cannot guarantee that you will not be
                    exposed while in attendance at the event. E&A is not
                    responsible for the health and safety of this event, we
                    abide by all venues, cities, and county policies and local
                    laws/restrictions. Our activities often may include taxes,
                    gratuities, service charges, plus any applicable fees owed
                    to the venue. If not, it will be noted in the description
                    for your convenience. If you place yourself on the waitlist,
                    you are agreeing that should space or a spot become
                    available, you can attend and agree to pay the payment by
                    pressing the confirmation upon signing up. Cancellation
                    refunds are subject to the date and time listed on the
                    details. You are responsible for your spot upon signup.
                    Should you desire to attend an After Event, it is then your
                    responsibility to settle your portion of the bill and not
                    rely on other E&A members to pay for your food and beverages
                    at these gatherings. Please do not assume others will cover
                    your bill should you need to leave early. Events &
                    Adventures is not responsible for any tows or tickets and
                    will give no refunds for parking issues. If you have any
                    questions, please email Meggie@eventsandadventures.com.
                    <Text style={{color: '#D43D1C', fontWeight: 'bold'}}>
                      {' '}
                      Meggie@eventsandadventures.com{' '}
                    </Text>
                  </Text>
                </View>

                {/* Event Detail Complete */}
                <View
                  style={{
                    marginTop: 25,
                    marginHorizontal: 10,
                    borderColor: '#D43D1C',
                    borderWidth: showEventDetail ? 1 : 0,
                    //   padding: 10,
                    borderRadius: 20,
                  }}>
                  {showEventDetail ? (
                    <Pressable
                      onPress={() => setShowEventDetail(!showEventDetail)}>
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
                          Event Details
                        </Text>
                      </View>
                    </Pressable>
                  ) : (
                    <Pressable
                      onPress={() => setShowEventDetail(!showEventDetail)}>
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
                          Event Details
                        </Text>
                      </View>
                    </Pressable>
                  )}
                  {showEventDetail && (
                    <>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginHorizontal: 15,
                          marginTop: 10,
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Image
                            source={require('../../Assets/Images/EAA/calendar3.png')}
                          />
                          <Text style={{fontSize: 10, color: 'black'}}>
                            {' '}
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
                            <Image
                              source={require('../../Assets/Images/EAA/user-square.png')}
                              style={{width: 16, height: 16}}
                              resizeMode="contain"
                            />
                            <Text style={{fontSize: 10, color: 'black'}}>
                              {' '}
                              Member Status
                            </Text>
                          </View>
                        </View>
                      </View>

                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginHorizontal: 15,
                          marginTop: 5,
                        }}>
                        <View>
                          <Text style={{fontSize: 14, color: 'black'}}>
                            Event is available
                          </Text>
                        </View>
                        <View>
                          <Text style={{fontSize: 14, color: 'black'}}>
                            Not Signed Up
                          </Text>
                        </View>
                      </View>

                      <View style={{marginHorizontal: 15, marginVertical: 15}}>
                        <View
                          style={{
                            height: 1,
                            width: '100%',
                            backgroundColor: '#E4E4E4', // Adjust opacity as needed
                          }}
                        />

                        <View style={{marginVertical: 10}}>
                          <Heading
                            Stylefont={'normal'}
                            Fontweight={'bold'}
                            Fontsize={16}
                            lh={'normal'}
                            Heading={'Member Guest'}
                            color={'#D43D1C'}
                          />
                        </View>

                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            // marginHorizontal: 15,
                            marginTop: 10,
                          }}>
                          <View>
                            <View
                              style={{
                                flexDirection: 'row',
                                marginLeft: -3,
                                marginVertical: 5,
                              }}>
                              <Image
                                source={require('../../Assets/Images/EAA/clock.png')}
                                style={{width: 16, height: 16}}
                                resizeMode="contain"
                              />
                              <Text style={{fontSize: 10, color: 'black'}}>
                                {'  '}
                                Sign Up Before:
                              </Text>
                            </View>
                            <View>
                              <Text style={{color: 'black', fontSize: 11}}>
                                Fri, Sep 29, 2023, 06:00 PM
                              </Text>
                            </View>
                          </View>
                          <View>
                            <View
                              style={{
                                flexDirection: 'row',
                                marginLeft: -3,
                                marginVertical: 5,
                              }}>
                              <Image
                                source={require('../../Assets/Images/EAA/clock.png')}
                                style={{width: 16, height: 16}}
                                resizeMode="contain"
                              />
                              <Text style={{fontSize: 10, color: 'black'}}>
                                {'  '}
                                Cancel Before:
                              </Text>
                            </View>
                            <View>
                              <Text style={{color: 'black', fontSize: 11}}>
                                Fri, Sep 29, 2023, 06:00 PM
                              </Text>
                            </View>
                          </View>
                        </View>

                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 15,
                            marginBottom: 5,
                          }}>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignContent: 'center',
                              alignItems: 'center',
                            }}>
                            <Image
                              source={require('../../Assets/Images/EAA/people.png')}
                              style={{width: 16, height: 16}}
                            />
                            <Text style={{color: '#707070', fontSize: 12}}>
                              {' '}
                              Host(s):
                            </Text>
                          </View>
                          <View>
                            <Text style={{color: 'black', fontSize: 14}}>
                              Michael Figueroa
                            </Text>
                          </View>
                        </View>
                      </View>

                      <View style={{marginHorizontal: 15, marginVertical: 15}}>
                        <View
                          style={{
                            height: 1,
                            width: '100%',
                            backgroundColor: '#E4E4E4', // Adjust opacity as needed
                          }}
                        />

                        <View style={{marginVertical: 10}}>
                          <Heading
                            Stylefont={'normal'}
                            Fontweight={'bold'}
                            Fontsize={16}
                            lh={'normal'}
                            Heading={'Event Type'}
                            color={'#D43D1C'}
                          />
                        </View>

                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            // marginHorizontal: 15,
                            marginTop: 10,
                          }}>
                          <View>
                            <View
                              style={{
                                flexDirection: 'row',
                                marginLeft: -3,
                                marginVertical: 5,
                              }}>
                              <Image
                                source={require('../../Assets/Images/EAA/clock.png')}
                                style={{width: 16, height: 16}}
                                resizeMode="contain"
                              />
                              <Text style={{fontSize: 10, color: 'black'}}>
                                {'  '}
                                Duration:
                              </Text>
                            </View>
                            <View>
                              <Text style={{color: 'black', fontSize: 14}}>
                                3 + Hours
                              </Text>
                            </View>
                          </View>
                          <View
                            style={{
                              justifyContent: 'flex-end',
                              alignContent: 'flex-end',
                              alignItems: 'flex-end',
                              width: '65%',
                            }}>
                            <View
                              style={{
                                flexDirection: 'row',
                                marginLeft: -3,
                                marginVertical: 5,
                                alignItems: 'center',
                              }}>
                              <Image
                                source={require('../../Assets/Images/EAA/frock.png')}
                                style={{width: 16, height: 16}}
                                resizeMode="contain"
                              />
                              <Text style={{fontSize: 10, color: 'black'}}>
                                {'  '}
                                Attire:
                              </Text>
                            </View>
                            <View style={{}}>
                              <Text style={{color: 'black', fontSize: 14}}>
                                Casual come as you are, dress for weather -
                                We'll be outside.
                              </Text>
                            </View>
                          </View>
                        </View>

                        <View
                          style={{
                            marginTop: 15,
                            marginBottom: 5,
                          }}>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignContent: 'center',
                              alignItems: 'center',
                            }}>
                            <Image
                              source={require('../../Assets/Images/EAA/people.png')}
                              style={{width: 16, height: 16}}
                            />
                            <Text style={{color: '#707070', fontSize: 12}}>
                              {' '}
                              Attendees:
                            </Text>
                          </View>
                          <View style={{marginTop: 0}}>
                            <Text style={{marginTop: 5, fontWeight: 500}}>
                              No Limit
                            </Text>
                          </View>
                        </View>
                      </View>

                      <View style={{marginHorizontal: 15, marginVertical: 10}}>
                        <View
                          style={{
                            height: 1,
                            width: '100%',
                            backgroundColor: '#E4E4E4', // Adjust opacity as needed
                          }}
                        />

                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            // marginHorizontal: 15,
                            marginTop: 10,
                          }}>
                          <View>
                            <View
                              style={{
                                flexDirection: 'row',
                                marginLeft: -3,
                                marginVertical: 5,
                                alignContent: 'center',
                                alignItems: 'center',
                              }}>
                              <Image
                                source={require('../../Assets/Images/EAA/dollar-square.png')}
                                style={{width: 16, height: 16}}
                                resizeMode="contain"
                              />
                              <Text style={{fontSize: 10, color: 'black'}}>
                                {'  '}
                                Event Cost:
                              </Text>
                            </View>
                          </View>
                          <View
                            style={{
                              justifyContent: 'flex-end',
                              alignContent: 'flex-end',
                              alignItems: 'flex-end',
                              width: '65%',
                            }}>
                            <View
                              style={{
                                flexDirection: 'row',
                                marginLeft: -3,
                                marginVertical: 5,
                              }}>
                              <Text
                                style={{
                                  fontSize: 14,
                                  color: 'black',
                                  fontWeight: '500',
                                }}>
                                {'  '}
                                $0.56 USD
                              </Text>
                            </View>
                          </View>
                        </View>

                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            // marginHorizontal: 15,
                            marginTop: 5,
                          }}>
                          <View>
                            <View
                              style={{
                                flexDirection: 'row',
                                marginLeft: -3,
                                marginVertical: 5,
                                alignContent: 'center',
                                alignItems: 'center',
                              }}>
                              <Image
                                source={require('../../Assets/Images/EAA/dollar-square.png')}
                                style={{width: 16, height: 16}}
                                resizeMode="contain"
                              />
                              <Text style={{fontSize: 10, color: 'black'}}>
                                {'  '}
                                Event Tax:
                              </Text>
                            </View>
                          </View>
                          <View
                            style={{
                              justifyContent: 'flex-end',
                              alignContent: 'flex-end',
                              alignItems: 'flex-end',
                              width: '65%',
                            }}>
                            <View
                              style={{
                                flexDirection: 'row',
                                marginLeft: -3,
                                marginVertical: 5,
                              }}>
                              <Text
                                style={{
                                  fontSize: 14,
                                  color: 'black',
                                  fontWeight: '500',
                                }}>
                                {'  '}
                                $0.56 USD
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </>
                  )}
                </View>

                {/* Location Complete */}
                <View
                  style={{
                    marginTop: 25,
                    marginHorizontal: 10,
                    borderColor: showLocation ? '#D43D1C' : 'transparent',
                    borderWidth: showLocation ? 1 : 0,
                    //   padding: 10,
                    borderRadius: 20,
                  }}>
                  {showLocation ? (
                    <Pressable onPress={() => setShowLocation(!showLocation)}>
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
                          Location
                        </Text>
                      </View>
                    </Pressable>
                  ) : (
                    <Pressable onPress={() => setShowLocation(!showLocation)}>
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
                          Location
                        </Text>
                      </View>
                    </Pressable>
                  )}
                  {showLocation && (
                    <>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginHorizontal: 15,
                          marginTop: 10,
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Text style={{fontSize: 16, color: 'black'}}>
                            Host City:
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
                              Phoenix
                            </Text>
                          </View>
                        </View>
                      </View>

                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginHorizontal: 15,
                          marginTop: 5,
                          // width: '80%',
                        }}>
                        <View>
                          <Text style={{fontSize: 16, color: 'black'}}>
                            Address:
                          </Text>
                        </View>
                        <View
                          style={{
                            justifyContent: 'flex-end',
                            alignContent: 'flex-end',
                            alignItems: 'flex-end',
                            width: '55%',
                          }}>
                          <Text
                            style={{
                              fontSize: 14,
                              color: 'black',
                              lineHeight: 20,
                              letterSpacing: -0.446,
                            }}>
                            10300 Estrella Pkwy Goodyear, AZ 85338 +16233861000
                          </Text>
                        </View>
                      </View>

                      <View style={{marginHorizontal: 15, marginVertical: 15}}>
                        <View style={{marginVertical: 10}}>
                          <Heading
                            Stylefont={'normal'}
                            Fontweight={'bold'}
                            Fontsize={16}
                            lh={'normal'}
                            Heading={'Where to Meet:'}
                            color={'#D43D1C'}
                          />
                        </View>

                        <View
                          style={{
                            marginTop: 1,
                            marginBottom: 5,
                          }}>
                          <Text style={{color: '#707070', fontSize: 14}}>
                            Host will arrive earlier than event time and send a
                            text out on exact location.
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
                    marginTop: '6%',
                    marginHorizontal: 15,
                  }}>
                  <ButtonComp
                    btnwidth={'97%'}
                    btnHeight={56}
                    btnText={'General Discussion'}
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
              </>
            )}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default EventsDetail;

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
    width: '75%',
    height: 200,
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
