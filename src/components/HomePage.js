import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useDispatch, useSelector } from 'react-redux';

import { getSeries } from '../actions/getSeries';
import CategoryList from './shared/CategoryList';

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

const HomePage = (props) => {
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
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <HomeHeader />
        <CategoryList
          title={'Most Popular'}
          data={popular}
          loading={gettingPopular}
          navigation={props.navigation}
        />
        <CategoryList
          title={'Top Rated'}
          data={topRated}
          loading={gettingTopRated}
          navigation={props.navigation}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#000' },
  container: {
    flex: 1,
    backgroundColor: '#000',
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
