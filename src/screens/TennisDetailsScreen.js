import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TennisDetailsScreen = ({ route }) => {
  const { details } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Match Details</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Match Title:</Text>
        <Text style={styles.value}>{details.title}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Home Player:</Text>
        <Text style={styles.value}>{details.home_player}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Away Player:</Text>
        <Text style={styles.value}>{details.away_player}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Status:</Text>
        <Text style={styles.value}>{details.status}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Date:</Text>
        <Text style={styles.value}>{details.date}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Court:</Text>
        <Text style={styles.value}>{details.court}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Round:</Text>
        <Text style={styles.value}>{details.round_name}</Text>
      </View>
      {details.result && (
        <>
          <View style={styles.detailContainer}>
            <Text style={styles.label}>Result:</Text>
            <Text style={styles.value}>{details.result.result_description}</Text>
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.label}>Home Sets:</Text>
            <Text style={styles.value}>{details.result.home_sets}</Text>
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.label}>Away Sets:</Text>
            <Text style={styles.value}>{details.result.away_sets}</Text>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2f95dc',
    marginBottom: 20,
    textAlign: 'center',
  },
  detailContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    width: 150,
  },
  value: {
    fontSize: 18,
    color: '#666',
  },
});

export default TennisDetailsScreen;