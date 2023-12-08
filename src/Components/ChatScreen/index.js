import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Heading from '../ReusableComponent/Heading';
// import {Image} from 'react-native-svg';
import ButtonComp from '../ReusableComponent/Button';
import SafeArea from '../ReusableComponent/Safearea';
import {Loader} from '../ReusableComponent/Loader';
import Head from '../ReusableComponent/Head';
import {useState} from 'react';

export const ChatScreen = props => {
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
    {
      id: 2,
      sentBy: 'user',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipisng elit, sed do eiusmod tempor exercitation.  sed do eiusmod tempor exercitation.',
    },
  ];

  const [messageText, setMessageText] = useState('');

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
                    marginLeft: 15,
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
                    width={284}
                    // txtAlign={'left'}
                    p={10}
                    lh={16}
                    ml={30}
                    mt={-5}
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
                // mr={74}
              />
            </View>
          ) : (
            <View style={{marginTop: 40}}>
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
                    marginLeft: 70,
                    // width: 250,
                    alignItems: 'right',
                    borderRadius: 16,
                    // borderColor: 'white',
                    borderWidth: 3,
                    borderColor:
                      Platform.OS === 'ios'
                        ? 'rgba(0, 0, 0, 0.1)'
                        : 'rgba(0, 0, 0, 0.12)',
                    // elevation: 12,
                  }}>
                  <Heading
                    Fontsize={14}
                    width={250}
                    txtAlign={'left'}
                    p={10}
                    // lh={18}
                    Heading={item.message}
                    color={'#FFFFFF'}
                  />
                </View>
              </View>
              <Heading
                Heading={'16 min. ago'}
                color={'rgba(156, 156, 156, 1)'}
                Fontsize={12}
                ml={68}
                mt={3}
                mb={0}
              />
            </View>
          )}
        </View>
      </>
    );
  };

  return (
    <>
      <SafeArea>
        <View
          style={{
            flex: 1,
            marginHorizontal: 10,
            // backgroundColor:'pink',
            marginBottom:-110
          }}>
          <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            // keyboardVerticalOffset={65}
          >
            <View style={{flexDirection: 'column'}}>
              <View style={{maxHeight: props.height ? '83%' : '87%'}}>
                <FlatList
                  data={data}
                  renderItem={renderItem}
                  contentContainerStyle={{flexGrow: 1}}
                  showsVerticalScrollIndicator={false}
                />
              </View>

              <View
                style={{
                  marginVertical: 10,
                  backgroundColor: '#E4E4E4',
                  marginHorizontal: 15,
                  padding: 15,
                  borderRadius: 20,
                  borderColor: '#BBBBBB',
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
                    color: 'black',
                    fontSize: 16,
                    letterSpacing: -0.446,
                    fontWeight: 500,
                  }}
                  placeholder={'Type your Message here...'}
                  placeholderTextColor={'black'}
                  editable={true}
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
          </KeyboardAvoidingView>
        </View>
        {/* )} */}
      </SafeArea>
    </>
  );
};
