import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { fetchData, tennisApiOptions } from '../services/api';

const TennisHomeScreen = ({ navigation }) => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = 'https://tennis-live-data.p.rapidapi.com/matches-by-date/2020-09-06';
    fetchData(url, tennisApiOptions)
      .then((data) => {
        console.log('API response:', data); // Log the API response
        if (data && data.results) {
          const allMatches = [];
          data.results.forEach(result => {
            if (result.matches) {
              allMatches.push(...result.matches);
            }
          });
          setMatches(allMatches);
        } else {
          console.error('Unexpected API response format:', data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2f95dc" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={matches}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('TennisDetails', { details: item })}>
          <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemPlayers}>{item.home_player} vs {item.away_player}</Text>
            <Text style={styles.itemStatus}>{item.status}</Text>
            <Text style={styles.itemScore}>{item.result ? `${item.result.home_sets} - ${item.result.away_sets}` : 'No score available'}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#2f95dc',
  },
  itemContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPlayers: {
    fontSize: 16,
    color: '#666',
  },
  itemStatus: {
    fontSize: 14,
    color: '#999',
  },
  itemScore: {
    fontSize: 14,
    color: '#999',
  },
});

export default TennisHomeScreen;