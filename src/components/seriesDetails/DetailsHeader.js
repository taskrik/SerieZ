import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

const DetailsHeader = ({ name, network, firstAir }) => {
  return (
    <Animatable.View
      animation="bounceInLeft"
      duration={1500}
      style={styles.titleContainer}>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.networkContainer}>
        <Text style={styles.text}>{network} |</Text>
        <Text style={styles.text}> Year: {firstAir}</Text>
      </View>
    </Animatable.View>
  );
};

export default DetailsHeader;

const styles = StyleSheet.create({
  titleContainer: {
    marginVertical: 15,
    alignContent: 'center',
    alignItems: 'center',
    marginHorizontal: 25,
  },
  title: {
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  networkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  text: { fontSize: 13, color: 'white', textAlign: 'center' },
});
