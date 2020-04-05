import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class Favorites extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> My Favorites Screen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6b6b6b',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
