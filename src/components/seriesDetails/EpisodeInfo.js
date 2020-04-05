import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { nextEpisode } from '../../utils/NextEpisodeCounter';

const EpisodeInfo = ({ episodeData }) => {
  if (episodeData) {
    const { air_date, episode_number, season_number } = episodeData;
    return (
      <Animatable.View
        animation="bounceInRight"
        duration={1500}
        style={styles.genreContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.text}>Current season:</Text>
          <Text style={styles.text}>{season_number}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.text}>Next Episode:</Text>
          <Text style={styles.text}>{episode_number}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.text}>Next episode on air:</Text>
          <Text style={styles.text}>{nextEpisode(air_date)}</Text>
        </View>
      </Animatable.View>
    );
  } else {
    return (
      <Animatable.View
        animation="bounceInRight"
        duration={1500}
        style={styles.genreContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.text}>
            Sorry, next episode info unavailable..
          </Text>
        </View>
      </Animatable.View>
    );
  }
};

export default EpisodeInfo;

const styles = StyleSheet.create({
  genreContainer: {
    borderBottomWidth: 0.5,
    borderColor: 'grey',
    paddingVertical: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  text: { fontSize: 13, color: 'white', textAlign: 'center', marginLeft: 10 },
});
