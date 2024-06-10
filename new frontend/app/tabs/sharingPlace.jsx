import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ListOfPosts from '../../components/ListOfPosts';

const SharingPlace = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SharingPlace</Text>
      <ListOfPosts place="sharing" userID={'bob'} />
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

export default SharingPlace;
