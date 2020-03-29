import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const SeriesCard = ({ title, image }) => {
  return (
    <TouchableOpacity>
      <View style={styles.cardContainer}>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w1280/${image}` }}
          style={styles.cardImage}
          resizeMode="contain"
        />
        <View style={styles.cardTitleContainer}>
          <Text style={styles.cardTitle}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 200,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    padding: 5,
  },
  cardImage: { width: 190, height: 250 },
  cardTitleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  cardTitle: {
    fontSize: 16,
    textAlign: 'center',
    letterSpacing: 1,
    color: '#fff',
  },
});

export default SeriesCard;
