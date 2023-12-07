import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';

const Timer = () => {
  return (
    <View style={styles.container}>
      <CountdownCircleTimer
        isPlaying
        duration={59}
        colors={['red']}
        colorsTime={[0]}
        strokeWidth={15}
        strokeLinecap="round">
        {({remainingTime}) => (
          <View style={styles.timerContainer}>
            <Text style={styles.timerText}>{remainingTime}</Text>
          </View>
        )}
      </CountdownCircleTimer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerContainer: {
    backgroundColor: '#FFF',
    borderRadius: 140,
    borderWidth: 10,
    borderColor: '#FFF',
    padding: 63,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'GeneralSans-Variable'
  },
});

export default Timer;
