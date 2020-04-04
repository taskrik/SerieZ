import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const LoadingSpinner = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./icons/redSpinner.gif')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: { height: 80, width: 80 },
});

export default LoadingSpinner;
