import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import SeriesCard from './SeriesCard';
import LoadingSpinner from './LoadingSpinner';

const CategoryList = ({ title, data, loading }) => {
  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryText}>{title}</Text>
      {loading ? (
        <View style={styles.spinnerContainer}>
          <LoadingSpinner />
        </View>
      ) : (
        <FlatList
          horizontal
          data={data}
          renderItem={({ item }) => (
            <SeriesCard title={item.name} image={item.poster_path} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    borderTopWidth: 1,
    borderTopColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    alignItems: 'flex-start',
    marginTop: 30,
    padding: 5,
  },
  spinnerContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryText: {
    fontWeight: '600',
    fontSize: 20,
    color: '#fff',
    marginLeft: 20,
    marginBottom: 10,
  },
});

export default CategoryList;
