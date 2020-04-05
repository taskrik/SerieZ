import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

const Description = ({ text }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <Animatable.View
      animation="bounceInLeft"
      duration={1500}
      style={styles.descriptionContainer}>
      <Text
        numberOfLines={readMore ? null : 4}
        style={[styles.text, styles.description]}>
        {text}
      </Text>
      <TouchableOpacity onPress={() => setReadMore(!readMore)}>
        <Text style={styles.hideButton}>
          {readMore ? 'Hide details' : 'Show More'}
        </Text>
      </TouchableOpacity>
    </Animatable.View>
  );
};

export default Description;

const styles = StyleSheet.create({
  descriptionContainer: {
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: 'grey',
  },
  description: {
    paddingHorizontal: 30,
  },
  text: { fontSize: 13, color: 'white', textAlign: 'center' },
  hideButton: {
    color: '#E50914',
    textAlign: 'center',
    marginVertical: 10,
  },
});
