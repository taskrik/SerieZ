import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Rating = ({ rating, ratingCount }) => {
  return (
    <View style={styles.container}>
      <Animatable.View
        animation="pulse"
        easing="ease-out"
        iterationCount="infinite"
        style={styles.starContainer}>
        <Icon size={20} color="gold" name="star" />
        <Icon size={20} color="gold" name="star" />
        <Icon size={20} color="gold" name="star" />
        <Icon size={20} color="gold" name="star" />
      </Animatable.View>
      <Text style={styles.text}>{parseFloat(rating).toFixed(1)} / 10</Text>
      <Text style={styles.text}>from {ratingCount} users</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  starContainer: { flexDirection: 'row' },
  text: { color: 'white', marginLeft: 10 },
});
