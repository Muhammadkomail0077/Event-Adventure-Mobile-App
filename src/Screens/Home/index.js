import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Pressable, Image, FlatList} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Heading from '../../Components/ReusableComponent/Heading';
import {useNavigation} from '@react-navigation/native';
import {ModalView} from '../../Components/ReusableComponent/Modal';

const Home = () => {
  const Navigation = useNavigation();

  const data = [
    {
      day: 'Fri',
      date: '01',
      lastday: 'yes',
      arrayOfData: [
        {
          name: 'Phoenix Club',
          time: '12:00 PM',
          detail:
            'Welcome to the Phoenix Club! Learn about your Event Manager!',
          itemColorChange: 'yes',
          presentDayColor: 'yes',
        },
        {
          name: 'Adventure',
          time: '12:00 PM',
          detail: 'Adventure Camping Labor Day Weekend',
          itemColorChange: 'no',
          presentDayColor: 'yes',
        },
        {
          name: 'Adventure',
          time: '12:00 PM',
          detail: 'Adventure Camping Labor Day Weekend',
          itemColorChange: 'yes',
          presentDayColor: 'yes',
        },
        {
          name: 'Phoenix Club',
          time: '12:00 PM',
          detail:
            'Welcome to the Phoenix Club! Learn about your Event Manager!',
          itemColorChange: 'no',
          presentDayColor: 'yes',
        },
      ],
    },
    {
      day: 'Fri',
      date: '02',
      lastday: 'no',
      arrayOfData: [
        {
          name: 'Phoenix Club',
          time: '12:00 PM',
          detail:
            'Welcome to the Phoenix Club! Learn about your Event Manager!',
          itemColorChange: 'no',
        },
        {
          name: 'Adventure',
          time: '12:00 PM',
          detail: 'Adventure Camping Labor Day Weekend',
          itemColorChange: 'no',
          presentDayColor: 'no',
        },
      ],
    },
    {
      day: 'Fri',
      date: '03',
      lastday: 'no',
      arrayOfData: [
        {
          name: 'Phoenix Club',
          time: '12:00 PM',
          detail:
            'Welcome to the Phoenix Club! Learn about your Event Manager!',
          itemColorChange: 'no',
          presentDayColor: 'no',
        },
      ],
    },
    {
      day: 'Fri',
      date: '04',
      lastday: 'no',
      arrayOfData: [
        {
          name: 'Phoenix Club',
          time: '12:00 PM',
          detail:
            'Welcome to the Phoenix Club! Learn about your Event Manager!',
          itemColorChange: 'no',
          presentDayColor: 'no',
        },
        {
          name: 'Adventure',
          time: '12:00 PM',
          detail: 'Adventure Camping Labor Day Weekend',
          itemColorChange: 'no',
          presentDayColor: 'no',
        },
      ],
    },
    {
      day: 'Fri',
      date: '05',
      lastday: 'no',
      arrayOfData: [
        {
          name: 'Phoenix Club',
          time: '12:00 PM',
          detail:
            'Welcome to the Phoenix Club! Learn about your Event Manager!',
          itemColorChange: 'no',
          presentDayColor: 'no',
        },
      ],
    },
    {
      day: 'Fri',
      date: '06',
      lastday: 'no',
      arrayOfData: [
        {
          name: 'Phoenix Club',
          time: '12:00 PM',
          detail:
            'Welcome to the Phoenix Club! Learn about your Event Manager!',
          itemColorChange: 'no',
          presentDayColor: 'no',
        },
      ],
    },
    {
      day: 'Fri',
      date: '04',
      lastday: 'no',
      arrayOfData: [
        {
          name: 'Phoenix Club',
          time: '12:00 PM',
          detail:
            'Welcome to the Phoenix Club! Learn about your Event Manager!',
          itemColorChange: 'no',
          presentDayColor: 'no',
        },
        {
          name: 'Adventure',
          time: '12:00 PM',
          detail: 'Adventure Camping Labor Day Weekend',
          itemColorChange: 'no',
          presentDayColor: 'no',
        },
      ],
    },
    {
      day: 'Fri',
      date: '05',
      lastday: 'no',
      arrayOfData: [
        {
          name: 'Phoenix Club',
          time: '12:00 PM',
          detail:
            'Welcome to the Phoenix Club! Learn about your Event Manager!',
          itemColorChange: 'no',
          presentDayColor: 'no',
        },
      ],
    },
    {
      day: 'Fri',
      date: '06',
      lastday: 'no',
      arrayOfData: [
        {
          name: 'Phoenix Club',
          time: '12:00 PM',
          detail:
            'Welcome to the Phoenix Club! Learn about your Event Manager!',
          itemColorChange: 'no',
          presentDayColor: 'no',
        },
      ],
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <Pressable
        onPress={() => {
          console.log('Press Done');
          item.itemColorChange == 'yes' && Navigation.navigate('EventsDetail');
        }}>
        <View
          style={{
            width: 145,
            margin: 5,
            height: 71,
          }}>
          <View
            style={{
              backgroundColor:
                item.itemColorChange == 'yes'
                  ? '#F18473'
                  : item.presentDayColor == 'yes'
                  ? '#DBDBDB'
                  : '#F6F6F6',
              paddingHorizontal: 10,
              paddingVertical: 10,
              borderRadius: 16,
              height: 71,
              marginTop: -5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <Heading
                  Stylefont={'normal'}
                  Fontweight={500}
                  Fontsize={12}
                  Heading={item.name}
                  color={item.itemColorChange == 'yes' ? '#FFFFFF' : 'black'}
                  ls={-0.446}
                  lh={14}
                />
              </View>

              <View>
                <Heading
                  Stylefont={'normal'}
                  Fontweight={400}
                  Fontsize={10}
                  txtAlign={'center'}
                  Heading={item.time}
                  color={item.itemColorChange == 'yes' ? '#FFFFFF' : 'black'}
                  ls={-0.446}
                  lh={14}
                />
              </View>
            </View>
            <View style={{marginTop: 5}}>
              <Heading
                Fontsize={9}
                Fontweight={400}
                Heading={item.detail}
                color={item.itemColorChange == 'yes' ? '#FFFFFF' : 'black'}
                Stylefont={'italic'}
                ls={-0.7}
                lh={14}
              />
            </View>
          </View>
        </View>
      </Pressable>
    );
  };

  const renderItemMain = ({item, index}) => {
    return (
      <>
        <View
          style={{
            marginHorizontal: 15,
            flexDirection: 'row',
            // backgroundColor: 'red',
          }}>
          {/* Left Hand side */}
          <View style={{flexDirection: 'row', marginBottom: 20}}>
            <View>
              <View>
                <Heading
                  Stylefont={'normal'}
                  Fontweight={500}
                  Fontsize={24}
                  txtAlign={'center'}
                  // p={10}
                  lh={24}
                  ls={-0.446}
                  Heading={item.date}
                  color={item.lastday == 'no' ? 'black' : '#D43D1C'}
                />
              </View>

              <View>
                <Heading
                  Stylefont={'normal'}
                  Fontweight={400}
                  Fontsize={12}
                  txtAlign={'center'}
                  // p={10}
                  // lh={31}
                  Heading={item.day}
                  color={'black'}
                  lh={12}
                  ls={-0.446}
                />
              </View>
            </View>

            {item.lastday == 'yes' ? (
              <View style={styles.container}>
                <View style={styles.circleContainer}>
                  <View style={styles.circle} />
                </View>
                <View style={styles.verticalLine} />
              </View>
            ) : (
              <View style={styles.container}>
                <View style={styles.circleContainertwo}>
                  {/* <View style={styles.circletwo} /> */}
                </View>
                <View style={styles.verticalLine} />
              </View>
            )}
            {/* Right Hand side Boxes */}
            {/* <View style={{flexDirection: 'row'}}> */}
          </View>

          <View style={{}}>
            <FlatList
              data={item.arrayOfData}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              numColumns={2} // Set the number of columns to 2
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                flexDirection: 'column',
                // flexWrap: 'wrap',
                justifyContent: 'space-between', // Add this line
              }}
            />
          </View>
          {/* </View> */}
        </View>
      </>
    );
  };

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (!modalVisible) {
      const intervalId = setInterval(() => {
        setModalVisible(true);
      }, 20000);
    }
  });

  return (
    <>
      <ModalView
        set={setModalVisible}
        get={modalVisible}
        cross={() => setModalVisible(false)}
        // txt={'Are you sure you want to logout ?'}
        headtxt={'There is a Event Nearby Wanna Join?'}
        buttonLeftText={'Cancel'}
        buttonRightText={'Go to Event'}
        no={() => {
          setModalVisible(!modalVisible);
        }}
        yes={() => {
          setModalVisible(!modalVisible);
          Navigation.navigate('EventsDetail');
        }}
        icon={'yes'}
      />
      <View style={{flex: 1, backgroundColor: '#FFF', paddingBottom: 100}}>
        {/* Header */}

        <View>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 0,
              marginTop: 70,
              justifyContent: 'space-between',
              marginHorizontal: 15,
              // backgroundColor: 'pink',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Pressable
              onPress={() => {
                // Navigation.goBack();
                Navigation.navigate('Drawer');
              }}>
              <View
                style={{
                  // backgroundColor: '#E9978D',
                  padding: 8,
                  borderRadius: 12,
                  // borderWidth: 2,
                  // borderColor: 'white',
                }}>
                <View>
                  <Image source={require('../../Assets/Images/EAA/menu.png')} />
                </View>
              </View>
            </Pressable>

            <View>
              <Heading
                Stylefont={'normal'}
                Fontweight={'bold'}
                Fontsize={20}
                txtAlign={'center'}
                p={10}
                lh={31}
                Heading={'Event Calendar'}
                color={'#D43D1C'}
              />
            </View>

            <Pressable
              onPress={() => {
                Navigation.navigate('Notifications');
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
                    source={require('../../Assets/Images/EAA/notification.png')}
                    style={{width: 25, height: 25}}
                  />
                </View>
              </View>
            </Pressable>
          </View>

          <View
            style={{
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '67%',
                marginTop: 15,
                backgroundColor: 'rgba(228, 228, 228, 0.5)',
                // padding: 10,
                borderRadius: 16,
                height: 48,
                alignContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 12,
                borderWidth: 0.5,
                borderColor: 'rgba(187, 187, 187, 1)',
              }}>
              <Heading
                Stylefont={'normal'}
                Fontweight={500}
                Fontsize={14}
                txtAlign={'center'}
                // p={10}
                lh={24}
                Heading={'London'}
                color={'black'}
                ls={-0.446}
              />
              <Image
                source={require('../../Assets/Images/EAA/gps.png')}
                style={{width: 25, height: 25}}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '30%',
                marginTop: 15,
                backgroundColor: 'rgba(228, 228, 228, 0.5)',
                // padding: 10,
                borderRadius: 16,
                height: 48,
                alignContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 12,
                borderWidth: 0.5,
                borderColor: 'rgba(187, 187, 187, 1)',
              }}>
              <Heading
                Stylefont={'normal'}
                Fontweight={500}
                Fontsize={14}
                txtAlign={'center'}
                // p={10}
                lh={24}
                Heading={'Dec'}
                color={'black'}
                ls={-0.446}
              />
              <Image
                source={require('../../Assets/Images/EAA/calendar2.png')}
                style={{width: 25, height: 25}}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              borderRadius: 16,
              height: 48,
              alignContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 20,
              marginVertical: 8,
            }}>
            <View>
              <Heading
                Stylefont={'normal'}
                Fontweight={500}
                Fontsize={18}
                txtAlign={'center'}
                Heading={'December'}
                color={'black'}
                lh={24}
                ls={-0.446}
              />
            </View>
            <View
              style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              <Pressable
                onPress={() => {
                  console.log('Left');
                }}
                style={{marginRight: 10}}>
                <AntDesign name="left" size={23} color={'black'} />
              </Pressable>
              <Pressable
                onPress={() => {
                  console.log('Right');
                }}>
                <AntDesign name="right" size={23} color={'black'} />
              </Pressable>
            </View>
          </View>
        </View>

        {/* Calender Wise Data */}

        <View
          style={{paddingBottom: 150, marginHorizontal: 6, marginBottom: 20}}>
          <FlatList
            data={data}
            renderItem={renderItemMain}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{flexDirection: 'column'}}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // marginTop: -1,
    // justifyContent: 'center',
    marginHorizontal: 5,
  },

  containertwo: {
    alignItems: 'center',
    // marginTop: -1,
    // justifyContent: 'center',
    marginHorizontal: 5,
  },

  circleContainer: {
    width: 18, // adjust the size as needed
    height: 18, // adjust the size as needed
    borderRadius: 30, // half of the width and height to make it a circle
    borderWidth: 1, // adjust the border width as needed
    borderColor: '#F18473',
    justifyContent: 'center',
    alignItems: 'center',
  },

  circleContainertwo: {
    width: 10, // adjust the size as needed
    height: 10, // adjust the size as needed
    borderRadius: 30, // half of the width and height to make it a circle
    borderWidth: 1, // adjust the border width as needed
    borderColor: '#F18473',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 20
    marginBottom: 9,
    marginLeft: 1,
    marginRight: 4,
  },

  circle: {
    width: 12, // adjust the size as needed
    height: 12, // adjust the size as needed
    borderRadius: 20, // half of the width and height to make it a circle
    backgroundColor: '#F18473',
  },

  circletwo: {
    width: 12, // adjust the size as needed
    height: 12, // adjust the size as needed
    borderRadius: 20, // half of the width and height to make it a circle
    backgroundColor: '#F18473',
  },

  verticalLine: {
    width: 2, // adjust the width of the line as needed
    backgroundColor: '#D4321C', // adjust the color of the line as needed
    // height: 30, // spans the height of the parent view
    marginTop: 7,
    marginRight: 2,
    flex: 1, // spans the height of the parent view
  },
});

export default Home;
