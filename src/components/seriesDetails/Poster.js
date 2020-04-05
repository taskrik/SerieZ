import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

const Poster = ({ imagePath }) => {
  return (
    <Animatable.View
      style={styles.imageContainer}
      animation="bounceInRight"
      duration={1500}>
      {imagePath && (
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w1280/${imagePath}`,
          }}
          style={styles.image}
          resizeMode="contain"
        />
      )}
      {!imagePath && (
        <View style={styles.noImage}>
          <Text style={[styles.text, styles.description]}>
            No Image available
          </Text>
        </View>
      )}
    </Animatable.View>
  );
};

export default Poster;

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: { width: 350, height: 350, alignSelf: 'center', marginBottom: 40 },
  noImage: {
    width: 350,
    height: 300,
    backgroundColor: '#6b6b6b6b',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 40,
  },
});
