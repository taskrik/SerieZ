import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useDispatch, useSelector } from 'react-redux';

import { getSeries } from '../actions/popular';
import CategoryList from '../shared/CategoryList';
import LoadingSpinner from '../shared/LoadingSpinner';

const HomeHeader = () => {
  return (
    <SafeAreaView>
      <View style={styles.titleContainer}>
        <Animatable.Text
          animation="bounceInRight"
          duration={2000}
          style={styles.nameText}>
          SerieZ
        </Animatable.Text>
        <Animatable.Text
          animation="bounceInLeft"
          duration={2000}
          style={styles.text}>
          Track your favorite series!
        </Animatable.Text>
      </View>
    </SafeAreaView>
  );
};

const HomePage = () => {
  const { gettingPopular, gettingTopRated } = useSelector(
    (state) => state.series,
  );
  const popular = useSelector((state) => state.series.popularSeries);
  const topRated = useSelector((state) => state.series.topRatedSeries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSeries());
  }, [dispatch]);

  return (
    <ScrollView style={styles.container}>
      <HomeHeader />
      <CategoryList
        title={'Most Popular'}
        data={popular}
        loading={gettingPopular}
      />
      <CategoryList
        title={'Top Rated'}
        data={topRated}
        loading={gettingTopRated}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  titleContainer: {
    marginLeft: 20,
    marginTop: 20,
    height: 90,
    justifyContent: 'center',
  },
  nameText: { fontSize: 50, fontWeight: 'bold', color: '#E50914' },
});

export default HomePage;
