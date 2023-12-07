import {Image, Platform, ScrollView, View} from 'react-native';
import Head from '../../Components/ReusableComponent/Head';
import Heading from '../../Components/ReusableComponent/Heading';

export const MemberHandbook4 = ({route}) => {
  return (
    <>
      <View
        style={{
          flexDirection: 'column',
          // justifyContent: 'space-between',
          flex: 1,
          paddingTop: '8%',
          backgroundColor: '#FFF',
        }}>
        <View
          style={{
            // marginBottom: 20,
            marginTop: Platform.OS === 'ios' ? 40 : '-5%',
          }}>
          <Head head={'Guidelines and Policies'} />
        </View>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            marginTop: Platform.OS === 'ios' ? 0 : '-5%',
            // marginHorizontal: 5,
          }}>
        <View
          style={{
            borderColor: 'rgba(246, 246, 246, 0.5)',
            width: '90%',
            height: 1,
            borderWidth: 1,
            marginTop: 30,
            marginBottom: 28,
            marginRight: 'auto',
            marginLeft: 'auto',
          }}></View>
        
          <View
            style={{
              // padding: 5,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.3,
              shadowRadius: 4.65,
              elevation: 8,
              marginHorizontal:20,
              backgroundColor:'white',
              borderRadius:20,
              marginTop:2,
              marginBottom: 25

            }}>
            <View style={{marginHorizontal: '2%', marginTop: 0}}>
              <Image
                style={{
                  width: 340,
                  height: 221,
                  // marginRight: -15,
                  // marginTop: 10,
                  // marginLeft: 5,
                }}
                resizeMode={'contain'}
                source={require('../../Assets/Images/EAA/Events.png')}
              />
            </View>
            <View style={{marginHorizontal: '5%', marginTop: 0}}>
              <Heading
                Stylefont={'normal'}
                Fontsize={12}
                Fontweight={500}
                Heading={
                  'Ballet Under the Stars allows Arizona communities to enjoy dance in a unique outdoor setting complete with a stage, lighting, costumes, and beautiful Arizona weather.'
                }
                color={'#707070'}
                mt={'2%'}
                lh={18}
                ls={-0.45}
                txtAlign={'justify'}
              />
              <Heading
                Stylefont={'normal'}
                Fontsize={12}
                Fontweight={500}
                Heading={
                  'Public consumption of alcohol is a criminal offense that is considered a Class 2 Misdemeanor. As a class 2 misdemeanor, penalties for public consumption of alcohol can be severe, with a maximum of 4 months jail, fines of $750 plus surcharges and up to 2 years probation. You must be a permit holder that is responsible for ensuring that all members of the party are of legal age to consume alcoholic beverages according to Arizona State Law.'
                }
                color={'#707070'}
                mt={'4%'}
                lh={18}
                ls={-0.45}
                txtAlign={'justify'}
              />
              <Heading
                Stylefont={'normal'}
                Fontsize={12}
                Heading={
                  'Public consumption of alcohol is a criminal offense that is considered a Class 2 Misdemeanor. As a class 2 misdemeanor, penalties for public consumption of alcohol can be severe, with a maximum of 4 months jail, fines of $750 plus surcharges and up to 2 years probation. You must be a permit holder that is responsible for ensuring that all members of the party are of legal age to consume alcoholic beverages according to Arizona State Law.'
                }
                color={'#707070'}
                mt={'4%'}
                lh={18}
                ls={-0.45}
                txtAlign={'justify'}
                Fontweight={500}
                mb={15}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};
