import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ListOfPosts from '../../components/ListOfPosts';

const Homepage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HomePage</Text>
      <ListOfPosts place="homepage" userID={'bob'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Homepage;
