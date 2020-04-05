import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Rating } from '../shared/Rating';

const AdditionalInfo = ({ genres, status, rating, ratingCount }) => {
  return (
    <Animatable.View
      animation="bounceInRight"
      duration={1500}
      style={styles.genreContainer}>
      <View style={styles.genreView}>
        <Text style={styles.text}>Genres: </Text>
        {genres.map((item) => (
          <Text key={item.id} style={styles.text}>
            | {item.name}
          </Text>
        ))}
      </View>
      <Rating rating={rating} ratingCount={ratingCount} />
      <View style={styles.status}>
        <Text style={styles.text}>Status: </Text>
        {status ? (
          <Text style={styles.text}>Running</Text>
        ) : (
          <Text style={styles.text}>Ended</Text>
        )}
      </View>
    </Animatable.View>
  );
};

export default AdditionalInfo;

const styles = StyleSheet.create({
  genreContainer: {
    borderBottomWidth: 0.5,
    borderColor: 'grey',
    paddingVertical: 10,
  },
  genreView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  status: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  text: { fontSize: 13, color: 'white', textAlign: 'center' },
});
