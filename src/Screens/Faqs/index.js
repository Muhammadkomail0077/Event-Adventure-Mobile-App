import {Platform, Pressable, ScrollView, View} from 'react-native';
import Head from '../../Components/ReusableComponent/Head';
import Heading from '../../Components/ReusableComponent/Heading';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useState} from 'react';

export const Faqs = ({route}) => {
  const [first, setfirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  const toggleState1 = () => {
    setfirst(!first);
  };
  const toggleState2 = () => {
    setSecond(!second);
  };
  const toggleState3 = () => {
    setThird(!third);
  };

  return (
    <>
      <View
        style={{
          flexDirection: 'column',
          // justifyContent: 'space-between',
          flex: 1,
          // marginVertical: '8%',
          backgroundColor: '#FFF'
        }}>
        <View
          style={{
            marginBottom: 20,
            marginTop: Platform.OS === 'ios' ? 70 : '-5%',
          }}>
          <Head head={'FAQs'} />
        </View>
        <View style={{borderColor: 'rgba(246, 246, 246, 0.5)', width: '90%', height: 1, borderWidth: 1, marginTop: 10, marginBottom: 20, marginRight: 'auto',
              marginLeft: 'auto',}}></View>

        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            marginTop: Platform.OS === 'ios' ? 10 : '-5%',
          }}>

          <View
            style={{
              marginRight: 'auto',
              marginLeft: 'auto',
              // marginTop: '5%',
              borderColor: 'rgba(216, 216, 216, 1)',
              borderWidth: 1,
              width: 350,
              borderRadius: 20,
              padding: 15,
              // height: 168,
            }}>
            <Pressable onPress={toggleState1}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Heading
                  Stylefont={'normal'}
                  Fontsize={14}
                  Heading={'Event Cancellations'}
                  color={'rgba(53, 53, 53, 1)'}
                  // mt={'4%'}
                  lh={20}
                  Fontweight={500}
                />
                <AntDesign name="up" size={16} color={'rgba(53, 53, 53, 1)'} style={{marginRight: 5, marginTop: 3}} />
              </View>
            </Pressable>
            {first && (
              <Heading
                Stylefont={'normal'}
                Fontsize={12}
                Heading={
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur nisl sapien, in consectetur turpis posuere in. Vestibulum arcu metus, vestibulum in egestas quis, facilisis vel nisl. Curabitur aliquam felis et ullamcorper ultrices. Mauris iaculis sapien fermentum eros finibus,'
                }
                color={'rgba(53, 53, 53, 1)'}
                mt={'4%'}
                lh={20}
                ls={-0.45}
                txtAlign={'justify'}
                width={284}
              />
            )}
          </View>

          <View
            style={{
              marginRight: 'auto',
              marginLeft: 'auto',
              marginTop: '4%',
              borderColor: 'rgba(216, 216, 216, 1)',
              borderWidth: 1,
              width: 350,
              borderRadius: 20,
              padding: 15,
              // height: 168,
            }}>
            <Pressable onPress={toggleState2}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Heading
                  Stylefont={'normal'}
                  Fontsize={14}
                  Heading={'A quick note about politics'}
                  color={'rgba(53, 53, 53, 1)'}
                  // mt={'4%'}
                  lh={20}
                  Fontweight={500}
                />
                <AntDesign name="up" size={16} color={'rgba(53, 53, 53, 1)'} style={{marginRight: 5, marginTop: 3}} />
              </View>
            </Pressable>
            {second && (
              <Heading
                Stylefont={'normal'}
                Fontsize={12}
                Heading={
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur nisl sapien, in consectetur turpis posuere in. Vestibulum arcu metus, vestibulum in egestas quis, facilisis vel nisl. Curabitur aliquam felis et ullamcorper ultrices. Mauris iaculis sapien fermentum eros finibus,'
                }
                color={'rgba(53, 53, 53, 1)'}
                mt={'4%'}
                lh={20}
                ls={-0.45}
                width={284}
              />
            )}
          </View>

          <View
            style={{
              marginRight: 'auto',
              marginLeft: 'auto',
              marginTop: '4%',
              borderColor: 'rgba(216, 216, 216, 1)',
              borderWidth: 1,
              width: 350,
              borderRadius: 20,
              padding: 15,
              // height: 168,
            }}>
            <Pressable onPress={toggleState3}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Heading
                  Stylefont={'normal'}
                  Fontsize={14}
                  Heading={'Contacting the Phoenix Club'}
                  color={'rgba(53, 53, 53, 1)'}
                  // mt={'4%'}
                  lh={20}
                  Fontweight={500}
                />
                <AntDesign name="up" size={16} color={'rgba(53, 53, 53, 1)'} style={{marginRight: 5, marginTop: 3}} />
              </View>
            </Pressable>
            {third && (
              <Heading
                Stylefont={'normal'}
                Fontsize={12}
                Heading={
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur nisl sapien, in consectetur turpis posuere in. Vestibulum arcu metus, vestibulum in egestas quis, facilisis vel nisl. Curabitur aliquam felis et ullamcorper ultrices. Mauris iaculis sapien fermentum eros finibus,'
                }
                color={'rgba(53, 53, 53, 1)'}
                mt={'4%'}
                lh={20}
                ls={-0.45}
                width={284}
              />
            )}
          </View>
        </ScrollView>
      </View>
    </>
  );
};
