import {
  FlatList,
  Image,
  ImageBackground,
  Platform,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  // TouchableOpacity,
  View,
} from 'react-native';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import Heading from '../../Components/ReusableComponent/Heading';
import {useState} from 'react';
import Head from '../../Components/ReusableComponent/Head';
import {useNavigation} from '@react-navigation/native';
import { ModalView } from '../../Components/ReusableComponent/Modal';

export const Notifications = () => {
  const Navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [secondModal, setSecondModal] = useState(false);
  const [cardSelect, setCardSelect] = useState(false);
  const [selectedCard, setSelectedCard] = useState();

  const data = [
    {
      id: 1,
      image: require('../../Assets/Images/EAA/notify1.jpeg'),
      head: '08 Hours Remaining',
      description: '08 Hours remaining before the event starts',
      time: '05 min ago',
      count: 1,
      imageType: false

    },
    {
      id: 2,
      image: require('../../Assets/Images/EAA/notify2.jpeg'),
      head: 'Arlene McCoy',
      description: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor.',
      time: '05 min ago',
      count: 2,
      imageType: false

    },
    {
      id: 3,
      image: require('../../Assets/Images/EAA/notify4.jpeg'),
      head: 'Jenny Wilson',
      description: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor.',
      time: '05 min ago',
      count: 2,
      imageType: false

    },
    {
      id: 4,
      image: require('../../Assets/Images/EAA/notify5.jpeg'),
      head: 'Cameron Williamson',
      description: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor.',
      time: '05 min ago',
      count: 2,
      imageType: false

    },
    {
      id: 5,
      image: require('../../Assets/Images/EAA/notify3.jpeg'),
      head: 'Theresa Webb',
      description: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor.',
      time: '05 min ago',
      count: 2,
      imageType: false

    },
    {
      id: 6,
      image: require('../../Assets/Images/EAA/notify7.jpeg'),
      head: 'Savannah Nguyen',
      description: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor.',
      time: '05 min ago',
      count: 2,
      imageType: false

    },
    {
      id: 7,
      image: require('../../Assets/Images/EAA/notify6.jpeg'),
      head: 'Devon Lane',
      description: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor.',
      time: '05 min ago',
      count: 2,
      imageType: false
    },
    {
      id: 8,
      image: require('../../Assets/Images/EAA/chatprofile11.png'),
      head: 'Box Shelve',
      description: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor.',
      time: '05 min ago',
      count: 2,
      imageType: true
    },
    {
      id: 8,
      image: require('../../Assets/Images/EAA/chatprofile11.png'),
      head: 'Box Shelve',
      description: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor.',
      time: '05 min ago',
      count: 2,
      imageType: true

    },
  ];

  const handlePress = () => {
    // Your onPress logic for the first item
    setModalVisible(true)
  };

  const handlePress2 = () => {
    // Your onPress logic for the first item
    Navigation.navigate('GeneralDiscussion');
  };

  const renderItem = ({item, index}) => {
    console.log('item: ', item.image);
    return (
      <>
            <Pressable onPress={index === 0 ? handlePress : index === 1 ? handlePress2 : index === 2 ? handlePress2 : undefined}>
        <View
          style={{
            flexDirection: 'row',
            paddingBottom: 9,
            borderColor: '#D8D8D8',
            borderRadius: 20,
            borderWidth: 1,
            marginHorizontal: 28,
            // backgroundColor: 'pink',
            alignItems: 'center',
            alignContent: 'center',
            alignSelf: 'center',
            padding: 12,
            borderWidth: 1,
            borderColor: '#D8D8D8',
            marginBottom: 18,
          }}>
          <View>
            {item.imageType ? (<Image
              source={item?.image}
              style={{
                width: 66,
                height: 70,
                // alignContent: 'center',
                // alignItems: 'center',
                // alignSelf: 'center',
                marginTop: 3,
                marginBottom: -8
                // marginLeft: -5,
              }}
            />) : (<Image
              source={item?.image}
              style={{
                width: 56,
                height: 56,
                // alignContent: 'center',
                // alignItems: 'center',
                // alignSelf: 'center',
                // marginTop: -12,
                // marginLeft: -5,
              }}
            />)}
          </View>

          <View style={{marginLeft: 10, width: '60%', marginVertical: 3}}>
            <View>
              <Heading
                Heading={item.head}
                Fontsize={18}
                color={'black'}
                Fontweight={500}
                // txtAlign={'center'}
                // width={100}
                lh={24}
              />
            </View>
            <Heading
              Heading={item.description}
              Fontsize={14}
              color={'#707070'}
              // txtAlign={'center'}
              // mt={5}
              Fontweight={400}
              width={'90%'}
              lh={18}
            />
          </View>

          <View style={{alignItems: 'flex-end', marginTop: 12}}>
            <View
              style={{
                backgroundColor: '#D5331D',
                width: 24,
                height: 24,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                top: -10,
              }}>
              <Heading
                Heading={item.count}
                Fontsize={16}
                //   color={COLORS.dark}
                // txtAlign={'center'}
                color={'#FFFFFF'}
                Fontweight={421}
                // lh={16}
                // mt={5}
                // ml={10}
              />
            </View>
            <Heading
              Heading={item.time}
              Fontsize={14}
              //   color={COLORS.dark}
              txtAlign={'center'}
              color={'#707070'}
              mt={8}
              Fontweight={400}
              lh={18}
              // ml={10}
            />
          </View>
        </View>
        </Pressable>
      </>
    );
  };

  const ListHeaderComponent = () => {
    return (
      <>
        <View
          style={{
            marginBottom: 30,
            marginTop: 10,
          }}>
          <Head head={'Notifications'} />
        </View>
      </>
    );
  };

  return (
    <>
<ModalView
        set={setModalVisible}
        get={modalVisible}
        // cross={() => setModalVisible(false)}
        // txt={'Are you sure you want to logout ?'}
        headtxt={'08 Hours remaining before the event starts'}
        urlImg={require('../../Assets/Images/EAA/modalTimer.png')}
        buttonLeftText={'Cancel'}
        buttonRightText={'Yes'}
        no={() => {
          setModalVisible(false);
                    Navigation.navigate('Home');
        }}
        yes={() => {
          setModalVisible(false);
          Navigation.navigate('EventsDetail');
        }}
        icon={'yes'}
      />

      <SafeArea>
        <View>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.metal_id}
            contentContainerStyle={{
              flexDirection: 'column',
              // marginHorizontal: 15,
              // marginVertical:10
            }}
            ListHeaderComponent={ListHeaderComponent}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SafeArea>
    </>
  );
};
