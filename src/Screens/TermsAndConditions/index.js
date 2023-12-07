import {Platform, ScrollView, View} from 'react-native';
import Head from '../../Components/ReusableComponent/Head';
import Heading from '../../Components/ReusableComponent/Heading';

export const TermsAndCondition = ({route}) => {
  return (
    <>
      <View
        style={{
          flexDirection: 'column',
          // justifyContent: 'space-between',
          flex: 1,
          paddingVertical: '8%',
          backgroundColor: '#FFF'

        }}>
        <View
          style={{
            // marginBottom: 20,
            marginTop: Platform.OS === 'ios' ? 40 : '-5%',
          }}>
          <Head head={'Terms & Conditions'} />
        </View>
        <View style={{borderColor: 'rgba(246, 246, 246, 0.5)', width: '90%', height: 1, borderWidth: 1, marginTop: 30, marginBottom: 0, marginRight: 'auto',
              marginLeft: 'auto',}}></View>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            marginTop: Platform.OS === 'ios' ? 0 : '-5%',
            marginHorizontal: 5,
          }}>
          <View style={{marginHorizontal: '5%', marginTop: '7%'}}>
            <Heading
              //   Stylefont={'normal'}
              Fontweight={500}
              Fontsize={17}
              Heading={'Nullam Porta Diam Id Dolar'}
              color={'rgba(53, 53, 53, 1)'}
              lh={24}
            />
            <Heading
              Stylefont={'normal'}
              Fontsize={13}
              txtAlign={'justify'}
              lh={20}
              // ls={-0.446}
              Heading={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur nisl sapien, in consectetur turpis posuere in. Vestibulum arcu metus, vestibulum in egestas quis, facilisis vel nisl. Curabitur aliquam felis et ullamcorper ultrices. Mauris iaculis sapien fermentum eros finibus, id interdum nulla scelerisque. Nulla lacinia volutpat consectetur. Nunc hendrerit odio at felis porttitor, vel ornare erat elementum. Aliquam nec massa neque. Donec dignissim libero ac metus maximus, a accumsan diam bibendum. Nullam vitae urna ultricies, commodo tellus eu, tempor leo. Pellentesque lorem augue, viverra et eleifend eget, volutpat vitae mi.'
              }
              color={'rgba(91, 91, 91, 1)'}
              mt={'3%'}
            />
          </View>
          <View style={{marginHorizontal: '5%', marginTop: '5%'}}>
            <Heading
              Fontweight={500}
              Fontsize={17}
              Heading={'Nullam Porta Diam Id Dolar'}
              color={'rgba(53, 53, 53, 1)'}
              lh={24}
            />
            <Heading
              Stylefont={'normal'}
              Fontsize={13}
              txtAlign={'justify'}
              lh={20}
              // ls={-0.446}
              Heading={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur nisl sapien, in consectetur turpis posuere in. Vestibulum arcu metus, vestibulum in egestas quis, facilisis vel nisl. Curabitur aliquam felis et ullamcorper ultrices. Mauris iaculis sapien fermentum eros finibus, id interdum nulla scelerisque. Nulla lacinia volutpat consectetur. Nunc hendrerit odio at felis porttitor, vel ornare erat elementum. Aliquam nec massa neque. Donec dignissim.  id interdum nulla scelerisque. Nulla lacinia volutpat consectetur. Nunc hendrerit odio at felis porttitor, vel ornare erat elementum. Aliquam nec massa neque. Donec dignissim.'
              }
              color={'rgba(91, 91, 91, 1)'}
              mt={'3%'}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
};