import React, { Component } from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux';

import { clearDetails, getDetails } from '../../actions/serieDetails';
import LoadingSpinner from '../shared/LoadingSpinner';
import AdditionalInfo from './AdditionalInfo';
import Description from './Description';
import DetailsHeader from './DetailsHeader';
import EpisodeInfo from './EpisodeInfo';
import Poster from './Poster';

class SerieDetails extends Component {
  componentDidMount() {
    this.props.getDetails(this.props.route.params.id);
  }

  componentWillUnmount() {
    this.props.clearDetails();
  }

  render() {
    const { gettingDetails, serieDetails } = this.props;
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.outerContainer}>
          {(gettingDetails || !serieDetails) && (
            <View style={styles.spinnerContainer}>
              <LoadingSpinner />
            </View>
          )}
          {serieDetails && (
            <ScrollView contentContainerStyle={styles.scrollView}>
              <DetailsHeader
                name={serieDetails.name}
                network={serieDetails.networks[0].name}
                firstAir={serieDetails.first_air_date}
              />
              <Poster imagePath={serieDetails.poster_path} />
              <Description text={serieDetails.overview} />
              <AdditionalInfo
                genres={serieDetails.genres}
                status={serieDetails.in_production}
                rating={serieDetails.vote_average}
                ratingCount={serieDetails.vote_count}
              />
              {serieDetails.in_production && (
                <EpisodeInfo episodeData={serieDetails.next_episode_to_air} />
              )}
              <View />
            </ScrollView>
          )}
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  gettingDetails: state.serieDetails.gettingDetails,
  serieDetails: state.serieDetails.serieDetails,
});

export default connect(mapStateToProps, { getDetails, clearDetails })(
  SerieDetails,
);

const styles = {
  safeArea: { flex: 1, backgroundColor: '#000' },
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
};
