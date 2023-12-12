import {
  FlatList,
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import HeadWithIcon from '../../Components/ReusableComponent/HeadWithIcon';
import Heading from '../../Components/ReusableComponent/Heading';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useState} from 'react';
import {Text} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {Header} from '../../Components/ReusableComponent/Header';
import ImageSlider from '../../Components/ImageSlider';

export const Profile = ({route}) => {
  const [secondModal, setSecondModal] = useState(false);
  const AuthReducer = useSelector(state => state.AuthReducer);

  const Navigation = useNavigation();

  const data = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];

  const images = [
    require('../../Assets/Images/EAA/image1.png'),
    require('../../Assets/Images/EAA/Sports.png'),
    require('../../Assets/Images/EAA/Events.png'),
  ];

  return (
    <>
      <SafeArea>
        <ScrollView>
          <View
            style={
              {
                //   marginVertical: '5%',
                // marginBottom: Platform.OS === 'ios' ? '18%' : '8%',
              }
            }>
            <View style={{marginHorizontal: 20}}>
              <View>
                <Header
                  header={'My Profile'}
                  screenName={true}
                  iconSecond={require('../../Assets/Images/EAA/edit.png')}
                  navigationRight={true}
                />
              </View>
              <View
                style={{
                  alignItems: 'center',
                  margin: 20,
                  marginTop: 30,
                  // backgroundColor: 'pink',
                }}>
                <View
                  style={{
                    width: 198,
                    height: 198,
                    alignSelf: 'center',
                    // marginTop: '8%',
                    // marginBottom: '8%',
                    backgroundColor: 'white',
                    borderWidth: 1,
                    borderColor: 'rgba(242, 86, 75, 0.1)',
                    borderRadius: 95,
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      width: 148,
                      height: 148,
                      alignSelf: 'center',
                      // marginTop: '8%',
                      // marginBottom: '8%',
                      backgroundColor: 'rgba(242, 86, 75, 0.06)',
                      borderWidth: 1,
                      borderColor: 'rgba(242, 86, 75, 0.3)',
                      borderRadius: 75,
                      justifyContent: 'center',
                      // opacity:0.08
                      //           shadowColor: '#F2564B',
                      // shadowOffset: { width: 0, height: 0 },
                      // shadowOpacity: 0.08,
                      // shadowRadius: 0,
                    }}>
                    <Image
                      source={require('../../Assets/Images/EAA/profileImage.png')}
                      // source={{
                      //   uri: ``,
                      // }}
                      style={{
                        alignSelf: 'center',
                        justifyContent: 'center',
                        width: 104,
                        height: 104,
                        marginTop: 2,
                        borderRadius: 75,
                      }}
                      resizeMode={'cover'}
                    />
                  </View>
                </View>
              </View>
            </View>

            <View
              style={{
                alignContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Heading
                Heading={'John, 28'}
                Fontsize={18}
                color={'black'}
                Fontweight={600}
                ls={-0.446}
              />
              <Image
                source={require('../../Assets/Images/EAA/shield-tick.png')}
                style={{width: 24, height: 24, marginLeft: 4}}
              />
            </View>

            <View
              style={{
                alignItems: 'center',
                marginTop: 10,
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignContent: 'center',
                alignContent: 'center',
                alignSelf: 'center',
                marginRight: 55,
              }}>
              <Heading
                Heading={'Hampton Bays, New York   '}
                Fontsize={14}
                color={'#707070'}
                Fontweight={400}
                lh={22}
                // txtAlign={'left'}
              />
              <View style={styles.verticalLine} />
              <Heading
                Heading={'   +12 01 857 7757'}
                Fontsize={14}
                color={'#707070'}
                Fontweight={400}
                lh={22}
                // Fontweight={'bold'}
              />
            </View>

            <View
              style={{
                alignItems: 'center',
                marginTop: '15%',
                // justifyContent: 'space-between',
                flexDirection: 'row',
                marginHorizontal: 20,
              }}>
              <View
                style={{
                  width: 59,
                  height: 56,

                  ...Platform.select({
                    ios: {
                      shadowColor: 'rgba(242, 86, 75, 0.2)',
                      shadowOffset: {width: 0, height: 0},
                      shadowOpacity: 1,
                      shadowRadius: 32,
                    },
                    android: {
                      elevation: 32,
                    },
                  }),
                }}>
                <View
                  style={{
                    width: 59,
                    height: 56,
                    backgroundColor: '#fff',
                    borderRadius: 10,
                  }}>
                  <Image
                    source={require('../../Assets/Images/EAA/calendarRed.png')}
                    style={{
                      width: 32,
                      height: 32,
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      marginTop: 'auto',
                      marginBottom: 'auto',
                    }}
                  />
                </View>
              </View>
              <Heading
                Heading={'       10 September, 2000'}
                Fontsize={14}
                color={'gray'}
                Fontweight={500}
                lh={24}
                ls={-0.446}
              />
            </View>

            <View
              style={{
                alignItems: 'center',
                marginTop: '6%',
                // justifyContent: 'space-between',
                flexDirection: 'row',
                marginHorizontal: 20,
              }}>
                <View
                style={{
                  width: 59,
                  height: 56,

                  ...Platform.select({
                    ios: {
                      shadowColor: 'rgba(242, 86, 75, 0.2)',
                      shadowOffset: {width: 0, height: 0},
                      shadowOpacity: 1,
                      shadowRadius: 32,
                    },
                    android: {
                      elevation: 32,
                    },
                  }),
                }}>
                <View
                  style={{
                    width: 59,
                    height: 56,
                    backgroundColor: '#fff',
                    borderRadius: 10,
                  }}>
              <Image
                source={require('../../Assets/Images/EAA/woman.png')}
                style={{width: 32, height: 32, marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 'auto',
                marginBottom: 'auto',}}
              />
              </View>
              </View>
              <Heading
                Heading={'       Male'}
                Fontsize={14}
                color={'gray'}
                Fontweight={500}
                lh={24}
                ls={-0.446}              />
            </View>

            <View
              style={{
                alignItems: 'center',
                marginTop: '6%',
                // justifyContent: 'space-between',
                flexDirection: 'row',
                marginHorizontal: 20,
              }}>
                <View
                style={{
                  width: 59,
                  height: 56,

                  ...Platform.select({
                    ios: {
                      shadowColor: 'rgba(242, 86, 75, 0.2)',
                      shadowOffset: {width: 0, height: 0},
                      shadowOpacity: 1,
                      shadowRadius: 32,
                    },
                    android: {
                      elevation: 32,
                    },
                  }),
                }}>
                <View
                  style={{
                    width: 59,
                    height: 56,
                    backgroundColor: '#fff',
                    borderRadius: 10,
                  }}>
              <Image
                source={require('../../Assets/Images/EAA/location.png')}
                style={{width: 32, height: 32, marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 'auto',
                marginBottom: 'auto',}}
              />
              </View>
              </View>
              <Heading
                Heading={'       Hampton Bays, New York'}
                Fontsize={14}
                color={'gray'}
                Fontweight={500}
                lh={24}
                ls={-0.446}

              />
            </View>

            <View
              style={{
                marginTop: '10%',
                // justifyContent: 'space-between',
                marginHorizontal: 20,
              }}>
              <Heading
                Heading={'About Me'}
                Fontsize={18}
                color={'black'}
                Fontweight={500}
                lh={24}
                // Fontweight={'bold'}
              />
              <Heading
                Heading={
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur nisl sapien, in consectetur turpis posuere in. Vestibulum arcu metus.'
                }
                Fontsize={14}
                color={'#707070'}
                mt={10}
                Fontweight={500}
                lh={24}
                ls={-0.446}
              />
            </View>

            <View
              style={{
                marginTop: '5%',
                // justifyContent: 'space-between',
                marginHorizontal: 20,
              }}>
              <Heading Heading={'Interests'} Fontsize={18} color={'black'} />

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 20,
                }}>
                <View
                  style={{
                    backgroundColor: '#FB7369',
                    alignContent: 'center',
                    alignItems: 'center',
                    borderRadius: 16,
                    paddingHorizontal: 16,
                    paddingVertical: 10,
                  }}>
                  <Heading
                    Heading={'Trainer'}
                    Fontsize={12}
                    color={'white'}
                    Fontweight={600}
                    lh={20}
                    ls={-0.446}
                    txtAlign={'center'}                  />
                </View>

                <View
                  style={{
                    backgroundColor: '#626FDD',
                    alignContent: 'center',
                    alignItems: 'center',
                    borderRadius: 16,
                    paddingHorizontal: 16,
                    paddingVertical: 10,
                  }}>
                  <Heading
                    Heading={'Art'}
                    Fontsize={12}
                    color={'white'}
                    Fontweight={600}
                    lh={20}
                    ls={-0.446}
                    txtAlign={'center'}                  />
                </View>

                <View
                  style={{
                    backgroundColor: '#3A99CE',
                    alignContent: 'center',
                    alignItems: 'center',
                    borderRadius: 16,
                    paddingHorizontal: 16,
                    paddingVertical: 10,
                  }}>
                  <Heading
                    Heading={'Cooking'}
                    Fontsize={12}
                    color={'white'}
                    Fontweight={600}
                    lh={20}
                    ls={-0.446}
                    txtAlign={'center'}
                  />
                </View>

                <View
                  style={{
                    backgroundColor: '#3ACE90',
                    alignContent: 'center',
                    alignItems: 'center',
                    borderRadius: 16,
                    paddingHorizontal: 16,
                    paddingVertical: 10,
                  }}>
                  <Heading
                    Heading={'Action & Adventure'}
                    Fontsize={12}
                    color={'white'}
                    Fontweight={600}
                lh={20}
                ls={-0.446}
                txtAlign={'center'}
                  />
                </View>
              </View>
            </View>

            <View style={{marginHorizontal: 20, marginBottom: 20}}>
              <Heading
                Heading={'Pictures'}
                Fontsize={18}
                color={'black'}
                Fontweight={500}
                lh={24}
                // Fontweight={'bold'}
              />
            </View>
          </View>
          <View>
            <ImageSlider images={images} />
          </View>
        </ScrollView>
      </SafeArea>
    </>
  );
};

const styles = StyleSheet.create({
  verticalLine: {
    height: '100%',
    width: 1, // Adjust the width as needed
    backgroundColor: 'black',
    // marginRight: 90 // Change the color as needed
  },
});
