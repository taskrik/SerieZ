import React, { Component } from 'react';
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux';

import { getDetails } from '../actions/serieDetails';
import LoadingSpinner from './shared/LoadingSpinner';

class SerieDetails extends Component {
  state = {
    readMore: false,
  };
  componentDidMount() {
    this.props.getDetails(this.props.route.params.id);
  }
  render() {
    const { gettingDetails, serieDetails } = this.props;
    const { readMore } = this.state;
    return (
      <View style={styles.outerContainer}>
        {(gettingDetails || !serieDetails) && (
          <View style={styles.spinnerContainer}>
            <LoadingSpinner />
          </View>
        )}
        {serieDetails && (
          <ScrollView contentContainerStyle={styles.scrollView}>
            <Animatable.View
              animation="bounceInLeft"
              duration={1500}
              style={styles.titleContainer}>
              <Text style={styles.title}>{serieDetails.name}</Text>
              <View style={styles.networkContainer}>
                <Text style={styles.text}>
                  {serieDetails.networks[0].name} |
                </Text>
                <Text style={styles.text}>
                  {' '}
                  Year: {serieDetails.first_air_date}
                </Text>
              </View>
            </Animatable.View>
            <Animatable.View
              style={styles.imageContainer}
              animation="bounceInRight"
              duration={1500}>
              {serieDetails.backdrop_path && (
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w1280/${serieDetails.backdrop_path}`,
                  }}
                  style={styles.image}
                  resizeMode="cover"
                />
              )}
              {!serieDetails.backdrop_path && (
                <View style={styles.noImage}>
                  <Text style={[styles.text, styles.description]}>
                    No Image available
                  </Text>
                </View>
              )}
            </Animatable.View>
            <Animatable.View
              animation="bounceInLeft"
              duration={1500}
              style={styles.descriptionContainer}>
              <Text
                numberOfLines={readMore ? null : 4}
                style={[styles.text, styles.description]}>
                {serieDetails.overview}
              </Text>
              <TouchableOpacity
                onPress={() => this.setState({ readMore: !readMore })}>
                <Text style={styles.hideButton}>
                  {readMore ? 'Hide details' : 'Show More'}
                </Text>
              </TouchableOpacity>
            </Animatable.View>
            <Animatable.View
              animation="bounceInRight"
              duration={1500}
              style={styles.genreContainer}>
              <View style={styles.genreView}>
                <Text style={styles.text}>Genres: </Text>
                {serieDetails.genres.map((item) => (
                  <Text key={item.id} style={styles.text}>
                    | {item.name}
                  </Text>
                ))}
              </View>
              <View style={styles.status}>
                <Text style={styles.text}>Status: </Text>
                <Text style={styles.text}>{serieDetails.status}</Text>
              </View>
            </Animatable.View>
            <View />
          </ScrollView>
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  gettingDetails: state.serieDetails.gettingDetails,
  serieDetails: state.serieDetails.serieDetails,
});

export default connect(mapStateToProps, { getDetails })(SerieDetails);

const styles = {
  outerContainer: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  scrollView: { paddingBottom: 50 },
  spinnerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    marginVertical: 25,
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
  imageContainer: {
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: { width: 350, height: 250, alignSelf: 'center', marginBottom: 40 },
  noImage: {
    width: 350,
    height: 200,
    backgroundColor: '#6b6b6b6b',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 40,
  },
  description: {
    paddingHorizontal: 20,
  },
  text: { fontSize: 13, color: 'white', textAlign: 'center' },
  hideButton: {
    color: '#E50914',
    textAlign: 'center',
    marginVertical: 10,
  },
  descriptionContainer: {
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: 'grey',
  },
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
};
