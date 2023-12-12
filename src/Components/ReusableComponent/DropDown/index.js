import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DropdownComponent = props => {
  // const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  let {data, defaultValue, setValue, value} = props;

  return (
    <Dropdown
      style={[
        styles.dropdown,
        {
          shadowColor: 'black',
          shadowOffset: {width: 0, height: 2},
          // shadowOpacity: 0.5,
          // shadowRadius: 4,
          // elevation: 2,
          backgroundColor: 'rgba(228, 228, 228, 0.5)',
          // width: 352,
          height: 60,
          borderRadius: 20,
        },
      ]}
      itemTextStyle={{color: '#667080'}}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      // search
      maxHeight={250}
      labelField="label"
      valueField="value"
      placeholder={!isFocus ? defaultValue : defaultValue}
      searchPlaceholder="Search..."
      value={value}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={item => {
        setValue(item.value);
        setIsFocus(false);
      }}
      renderLeftIcon={() => (
        <>
          <Image
            source={require('../../../Assets/Images/EAA/sagittarius.png')}
            style={{
              width: 24,
              // marginTop: 12,
              // marginBottom: 14,
              // marginLeft: 15,
            }}
            resizeMethod={'resize'}
            resizeMode={'contain'}
          />
          <Text>{'    '}</Text>
        </>
      )}
    />
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    // height: 50,
    // borderRadius: 20,
    // paddingHorizontal: 12,
    paddingHorizontal: 25,
    color: '#667080',
    // backgroundColor: 'pink',
  },
  icon: {
    marginRight: 5,
  },
  label: {
    // position: 'absolute',
    // backgroundColor: 'red',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    // color: 'pink',
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'black',
    // backgroundColor:'pink'
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'black',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: 'black',
    // borderRadius:10
  },
});
