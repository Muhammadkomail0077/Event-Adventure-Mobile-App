import React from 'react';
import {FlatList, Image, Pressable, View} from 'react-native';
import {Text} from 'react-native-paper';
import Head from '../../Components/ReusableComponent/Head';
import { useNavigation } from '@react-navigation/native';

const JoinEvent = () => {
  const data = [
    {imgUrl: require('../../Assets/Images/EAA/ImageTripsCard.png'), id: 1},
    {imgUrl: require('../../Assets/Images/EAA/Events.png'), id: 2},
    {imgUrl: require('../../Assets/Images/EAA/Group57201.png'), id: 3},
    {imgUrl: require('../../Assets/Images/EAA/Group57201.png'), id: 3},
  ];

  const Navigation = useNavigation();

  const renderItem = (item, index) => {
    console.log(item.index);
    return (
      <>
        <Pressable
          onPress={() => {
            Navigation.navigate('EventsDetail');
          }}>
          <View
            style={{
              alignContent: 'center',
              alignItems: 'center',
              // marginTop: 35,
              marginBottom: 20,
              
              // marginHorizontal: 20
            }}>
            <Image
              source={
                item.index == 0
                  ? require('../../Assets/Images/EAA/JoinEvent2.png')
                  : item.index == 1
                  ? require('../../Assets/Images/EAA/JoinEvent4.png')
                  : item.index == 2
                  ? require('../../Assets/Images/EAA/JoinEvent3.png')
                  : item.index == 3
                  ? require('../../Assets/Images/EAA/JoinEvent1.png')
                  : require('../../Assets/Images/EAA/JoinEvent1.png')
              }
              style={{width: 352, height: 215}}
            />
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
            marginTop: Platform.OS === 'ios' ? 70 : '-5%',
            marginBottom: 35,
          }}>
          <Head head={'Joined Events'} />
          <View style={{borderColor: 'rgba(246, 246, 246, 0.5)', width: '88%', height: 1, borderWidth: 1, marginTop: 25, marginBottom: 0, marginRight: 'auto',
              marginLeft: 'auto',}}></View>
        </View>
      </>
    );
  };

  return (
    <View
      style={{
        flexDirection: 'column',
        // justifyContent: 'space-between',
        flex: 1,
        // paddingVertical: '8%',
        backgroundColor: '#FFF',
      }}>
      <FlatList
        data={data}
        ListHeaderComponent={ListHeaderComponent}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item.id}
        renderItem={renderItem}
        //   style={{paddingBottom:200}}
        // columnWrapperStyle={{}}
        contentContainerStyle={{paddingBottom: 30}}
      />
    </View>
  );
};

export default JoinEvent;
