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
    },
    {
      id: 2,
      image: require('../../Assets/Images/EAA/notify2.jpeg'),
      head: 'Arlene McCoy',
      description: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor.',
      time: '05 min ago',
      count: 2,
    },
    {
      id: 3,
      image: require('../../Assets/Images/EAA/notify3.jpeg'),
      head: 'Jenny Wilson',
      description: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor.',
      time: '05 min ago',
      count: 2,
    },
    {
      id: 4,
      image: require('../../Assets/Images/EAA/notify4.jpeg'),
      head: 'Cameron Williamson',
      description: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor.',
      time: '05 min ago',
      count: 2,
    },
    {
      id: 5,
      image: require('../../Assets/Images/EAA/notify5.jpeg'),
      head: 'Theresa Webb',
      description: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor.',
      time: '05 min ago',
      count: 2,
    },
    {
      id: 6,
      image: require('../../Assets/Images/EAA/notify6.jpeg'),
      head: 'Savannah Nguyen',
      description: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor.',
      time: '05 min ago',
      count: 2,
    },
    {
      id: 7,
      image: require('../../Assets/Images/EAA/notify7.jpeg'),
      head: 'Devon Lane',
      description: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor.',
      time: '05 min ago',
      count: 2,
    },
    {
      id: 8,
      image: require('../../Assets/Images/EAA/notify1.jpeg'),
      head: 'Box Shelve',
      description: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor.',
      time: '05 min ago',
      count: 2,
    },
    {
      id: 8,
      image: require('../../Assets/Images/EAA/notify3.jpeg'),
      head: 'Box Shelve',
      description: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor.',
      time: '05 min ago',
      count: 2,
    },
  ];

  const renderItem = ({item}) => {
    console.log('item: ',item.image);
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            paddingBottom: 9,
            borderColor: '#D8D8D8',
            borderRadius: 20,
            borderWidth: 1,
            marginHorizontal: 15,
            // backgroundColor: 'pink',
            alignItems: 'center',
            alignContent: 'center',
            alignSelf: 'center',
            padding: 12,
            borderWidth:1,
            borderColor:'#D8D8D8',
            marginBottom:12
          }}>
            
          <View>
            <Image
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
            />
          </View>

          <View style={{marginLeft: 10, width: '60%'}}>
            <View>
              <Heading
                Heading={item.head}
                Fontsize={16}
                color={'black'}
                Fontweight={500}
                // txtAlign={'center'}
                // width={100}
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

          <View style={{alignItems: 'flex-end'}}>

            <View
              style={{
                backgroundColor: '#D5331D',
                width: 24,
                height: 24,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                top:-10
              }}>
              <Heading
                Heading={item.count}
                Fontsize={16}
                //   color={COLORS.dark}
                // txtAlign={'center'}
                color={'#FFFFFF'}
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
              // mt={5}
              // ml={10}
            />
          </View>
        </View>
      </>
    );
  };

  const ListHeaderComponent = () => {
    return (
      <>
        <View
          style={{
            marginBottom: 40,
          }}>
          <Head head={'Notifications'} />
        </View>
      </>
    );
  };

  return (
    <>
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
