import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const ImageSlider = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const flatListRef = useRef(null);

  // const handleImageChange = index => {
  //   flatListRef.current.scrollToIndex({index, animated: true});
  //   setCurrentIndex(index);
  // };

  // Create a loop effect for infinite scrolling
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     const newIndex = (currentIndex + 1) % images.length;
  //     handleImageChange(newIndex);
  //   }, 3000); // Change the interval duration as needed

  //   return () => clearInterval(intervalId);
  // }, [currentIndex, images.length]);

  const renderDot = index => {
    return (
      <TouchableOpacity
        key={index}
        style={[
          styles.dot,
          index === currentIndex % images.length && styles.activeDot,
        ]}
        // onPress={() => handleImageChange(index)}
      />
    );
  };

  const renderItem = ({item, index}) => {
    return <Image source={item} style={styles.image} resizeMode="cover" />;
  };

  // Duplicate images for infinite scrolling
  const extendedImages = [...images, ...images, ...images];

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={extendedImages}
        horizontal
        // pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        // onMomentumScrollEnd={event => {
        //   const newIndex = Math.round(
        //     event.nativeEvent.contentOffset.x /
        //       event.nativeEvent.layoutMeasurement.width,
        //   );
        //   setCurrentIndex(newIndex);
        // }}
        initialScrollIndex={images.length} // Start from the first set of images
      />

      {/* <View style={styles.dotsContainer}>
        {images.map((_, index) => renderDot(index))}
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 251,
    height: 151,
    marginHorizontal: 5,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 16,
    width: '100%',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    margin: 8,
  },
  activeDot: {
    backgroundColor: 'blue', // Change the color for the active dot
  },
});

export default ImageSlider;
