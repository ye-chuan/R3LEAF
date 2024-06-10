import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ListOfPosts from '../../components/ListOfPosts';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <ListOfPosts place="profile" userID={'bob'} />
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

export default Profile;
