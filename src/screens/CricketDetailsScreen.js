import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CricketDetailsScreen = ({ route }) => {
  const { details } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Series Details</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Series Name:</Text>
        <Text style={styles.value}>{details.series_name}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Season:</Text>
        <Text style={styles.value}>{details.season}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Status:</Text>
        <Text style={styles.value}>{details.status}</Text>
      </View>
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
    width: 100,
  },
  value: {
    fontSize: 18,
    color: '#666',
  },
});

export default CricketDetailsScreen;