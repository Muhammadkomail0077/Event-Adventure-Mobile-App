import React, { useState } from 'react';
import {FlatList, Image, TextInput, View} from 'react-native';
import {Text} from 'react-native-paper';
import Head from '../../Components/ReusableComponent/Head';
import { ChatScreen } from '../../Components/ChatScreen';
import Heading from '../../Components/ReusableComponent/Heading';

export const GeneralDiscussion = () => {
  const [messageText, setMessageText] = useState('');

  const data = [
    {
      id: 1,
      sentBy: 'mytext',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipisng elit, sed do eiusmod tempor exercitation.  sed do eiusmod tempor exercitation.',
    },
    {
      id: 2,
      sentBy: 'user',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipisng elit, sed do eiusmod tempor exercitation.  sed do eiusmod tempor exercitation.',
    },
    {
      id: 3,
      sentBy: 'mytext',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipisng elit, sed do eiusmod tempor exercitation.  sed do eiusmod tempor exercitation.',
    },
    // {
    //   id: 2,
    //   sentBy: 'user',
    //   message:
    //     'Lorem ipsum dolor sit amet, consectetur adipisng elit, sed do eiusmod tempor exercitation.  sed do eiusmod tempor exercitation.',
    // },
  ];

  const renderItem = ({item}) => {
    // const messageTime = new Date(item.sentAt).toLocaleTimeString([], {
    //   hour: '2-digit',
    //   minute: '2-digit',
    // });
    return (
      <>
        <View style={{marginHorizontal: '1%', flex: 1}}>
          {item.sentBy === 'user' ? (
            <View style={{marginTop: 25}}>
              <View
                style={{
                  flexDirection: 'row',
                  borderColor: '#F6F6F6',
                  borderWidth: 1,
                  borderTopRightRadius: 30,
                  borderBottomLeftRadius: 30,
                  padding: 10,
                }}>
                <Image
                  source={require('../../Assets/Images/EAA/chatprofile.png')}
                  style={{
                    // marginTop: -15,
                    // marginLeft: 10,
                    borderRadius: 20,
                  }}
                />

                <View>
                  <Heading
                    Heading={'William Roy'}
                    color={'#D4271C'}
                    Fontsize={16}
                    // txtAlign={'left'}
                    p={10}
                    lh={18}
                    // ml={-30}
                    mt={-5}
                    mb={8}
                    Fontweight={600}
                    ls={-0.446}
                  />
                  <Heading
                    Heading={item.message}
                    color={'#707070'}
                    Fontsize={12}
                    width={290}
                    // txtAlign={'left'}
                    p={10}
                    lh={16}
                    // ml={30}
                    mt={-20}
                    mb={8}
                    ls={-0.446}
                    Fontweight={500}
                  />
                  {/* </LinearGradient> */}
                </View>
              </View>
              <Heading
                Heading={'16 min. ago'}
                color={'#F18473'}
                Fontsize={12}
                txtAlign={'right'}
                ls={-0.24}
                Fontweight={500}
                lh={16}
                mt={17}
                // mr={74}
              />
            </View>
          ) : (
            <View style={{marginTop: 20}}>
              <View
                style={{
                  flexDirection: 'row',
                  width: 340,
                  borderRadius: 16,
                  // marginRight: 20,
                }}>
                <View
                  style={{
                    backgroundColor: '#F18473',
                    flex: 1,
                    marginLeft: 40,
                    // width: 250,
                    alignItems: 'right',
                    borderRadius: 16,
                    // borderColor: 'white',
                    // borderWidth: 3,
                    borderColor:
                      Platform.OS === 'ios'
                        ? 'rgba(0, 0, 0, 0.1)'
                        : 'rgba(0, 0, 0, 0.12)',
                    // elevation: 12,
                  }}>
                  <Heading
                    Fontsize={12}
                    width={290}
                    txtAlign={'left'}
                    p={13}
                    // lh={18}
                    Heading={item.message}
                    color={'#FFFFFF'}
                    fontWeight={500}
                    lh={16}
                    ls={-0.446}
                  />
                </View>
              </View>
              <Heading
                Heading={'16 min. ago'}
                color={'black'}
                Fontsize={12}
                ml={41}
                mt={17}
                mb={0}
                fontWeight={500}
                ls={-0.446}
              />
            </View>
          )}
        </View>
      </>
    );
  };

  return (
    <View
      style={{
        flexDirection: 'column',
        flex: 1,
        paddingTop: '8%',
        backgroundColor: '#FFF',
      }}>
      <View
        style={{
          // marginBottom: 20,
          marginTop: Platform.OS === 'ios' ? 40 : '-5%',
        }}>
        <Head head={'General Discussion'} />
      </View>
      <View style={{borderColor: 'rgba(246, 246, 246, 0.5)', width: '90%', height: 1, borderWidth: 1, marginTop: 25, marginBottom: 10, marginRight: 'auto',
              marginLeft: 'auto',}}></View>
              <View style={{marginHorizontal: 10, height: '100%',}} >
      {/* <ChatScreen aa={true} /> */}

      <View
          style={{
            flex: 1,
            marginHorizontal: 10,
            // backgroundColor:'pink',
            marginBottom:-110
          }}>
          {/* <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            // keyboardVerticalOffset={65}
          > */}
            <View style={{width: '100%', marginLeft: 'auto', marginRight: 'auto', marginBottom: 110}}>
                      <Heading
                        Stylefont={'normal'}
                        Fontweight={500}
                        Fontsize={14}
                        Heading={
                          'Tuesday, 25 July 2023 - 9:34 pm'
                        }
                        color={'grey'}
                        ls={-0.446}
                        lh={20}
                        txtAlign={'center'}
                        mt={20}
                      />
                    </View>

                    {/* {props.aa? (<View style={{marginTop: 70}}></View>) : null} */}
            <View style={{flexDirection: 'column'}}>
            
              <View style={{
                // maxHeight: props.height ? '100%' : '87%', 
                marginBottom: 30}}>
                <FlatList
                  data={data}
                  renderItem={renderItem}
                  contentContainerStyle={{flexGrow: 1}}
                  showsVerticalScrollIndicator={false}
                />
              </View>

              <View
                style={{
                  // marginVertical: 10,
                  // marginTop: 50,
                  // bottom: 5,
                  backgroundColor: 'rgba(228, 228, 228, 0.5)',
                  // marginHorizontal: 10,
                  padding: 15,
                  borderRadius: 20,
                  borderColor: 'rgba(187, 187, 187, 0.5)',
                  borderWidth: 1,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <TextInput
                  value={messageText}
                  onChangeText={setMessageText}
                  style={{
                    //   backgroundColor: 'pink',
                    width: '80%',
                    color: 'rgba(53, 53, 53, 1)',
                    fontSize: 16,
                    letterSpacing: -0.446,
                    fontWeight: 500,
                  }}
                  placeholder={'Type your Message here...'}
                  placeholderTextColor={'black'}
                  editable={false}
                />
                <Image
                  source={require('../../Assets/Images/EAA/sendmessage.png')}
                  style={{
                    width: 23,
                    height: 20,
                    // marginRight: 1,
                    // marginTop: 2,
                  }}
                  resize
                />
              </View>
            </View>
          {/* </KeyboardAvoidingView> */}
        </View>
      </View>
    </View>
  );
};
