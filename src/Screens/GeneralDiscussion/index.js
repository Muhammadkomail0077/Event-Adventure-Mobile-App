import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import Head from '../../Components/ReusableComponent/Head';
import { ChatScreen } from '../../Components/ChatScreen';

export const GeneralDiscussion = () => {
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
      <ChatScreen />
    </View>
  );
};
